"use client";
import { useEffect, useRef, useState } from "react";
import type { Material, Group } from "three";

export default function RuViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef   = useRef(false);
  const rotatingRef  = useRef(true);
  const [rotating, setRotating] = useState(true);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;

    let THREE: typeof import("three");
    let OrbitControls: any;
    let renderer: any, controls: any, animId: number;

    (async () => {
      const container = containerRef.current;
      if (!container) return;

      THREE = await import("three");
      const { OrbitControls: OC } = await import("three/examples/jsm/controls/OrbitControls.js");
      OrbitControls = OC;

      /* ── Renderer ── */
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.8;

      const cv = renderer.domElement;
      cv.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;display:block;";
      container.appendChild(cv);

      /* ── Scene & Camera ── */
      const scene  = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);

      function syncSize() {
        const w = container!.clientWidth  || 1;
        const h = container!.clientHeight || 420;
        if (cv.width !== w * renderer.getPixelRatio() ||
            cv.height !== h * renderer.getPixelRatio()) {
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      }
      syncSize();

      /* ── Lighting ── */
      scene.add(new THREE.AmbientLight(0xffffff, 2.8));
      const key = new THREE.DirectionalLight(0xfff4e0, 3.5);
      key.position.set(7, 9, 8);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xc0ddff, 2.2);
      fill.position.set(-8, 3, 6);
      scene.add(fill);
      const rim = new THREE.DirectionalLight(0xffe0a0, 1.8);
      rim.position.set(2, 7, -9);
      scene.add(rim);
      const bot = new THREE.DirectionalLight(0x9090d0, 1.2);
      bot.position.set(0, -9, 3);
      scene.add(bot);
      const back = new THREE.DirectionalLight(0xaaffdd, 1.0);
      back.position.set(-4, -4, -8);
      scene.add(back);

      /* ── OrbitControls ── */
      controls = new OrbitControls(camera, cv);
      controls.enableDamping   = true;
      controls.dampingFactor   = 0.07;
      controls.enablePan       = false;
      controls.autoRotate      = true;
      controls.autoRotateSpeed = 0.75;
      controls.target.set(0, 0, 0);

      /* ── Materials ── */
      function mat(hex: number, metal: number, rough: number, emHex: number, emInt: number) {
        return new THREE.MeshStandardMaterial({
          color: hex, metalness: metal, roughness: rough,
          emissive: emHex, emissiveIntensity: emInt,
        });
      }
      const MAT = {
        Ru:  mat(0x60d4ff, 0.88, 0.10, 0x0077bb, 0.35),
        C:   mat(0x111111, 0.00, 0.40, 0x000000, 0.10),
        N:   mat(0x2288ff, 0.00, 0.30, 0x003388, 0.45),
        O:   mat(0xff3333, 0.00, 0.30, 0x880000, 0.45),
        Cl:  mat(0x22dd55, 0.10, 0.30, 0x006622, 0.45),
        bnd: mat(0xd0d0d0, 0.00, 0.50, 0x404040, 0.15),
        eta: new THREE.MeshStandardMaterial({
          color: 0x00e5ff, metalness: 0, roughness: 0.5,
          emissive: 0x009999, emissiveIntensity: 0.6,
          transparent: true, opacity: 0.45,
        }),
        ruN: mat(0xd0d0d0, 0.00, 0.50, 0x404040, 0.15),
        ruO: mat(0xd0d0d0, 0.00, 0.50, 0x404040, 0.15),
        ruCl:mat(0xd0d0d0, 0.00, 0.50, 0x404040, 0.15),
      };

      function sphere(pos: [number,number,number], r: number, m: Material, g: Group) {
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 32), m);
        mesh.position.set(...pos);
        g.add(mesh);
      }
      function bond(a: [number,number,number], b: [number,number,number], r: number, m: Material, g: Group) {
        const s   = new THREE.Vector3(...a);
        const e   = new THREE.Vector3(...b);
        const dir = new THREE.Vector3().subVectors(e, s);
        const len = dir.length();
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 12, 1), m);
        cyl.position.copy(s).lerp(e, 0.5);
        cyl.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
        g.add(cyl);
      }

      /* ── Molecular Coordinates ── */
      const mol = new THREE.Group();
      scene.add(mol);

      const RU: [number,number,number] = [0, 0, 0];
      const CY_Y = 1.72, CY_R = 1.42;
      const cy = Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        return [CY_R * Math.cos(a), CY_Y, CY_R * Math.sin(a)] as [number,number,number];
      });

      const isoC:  [number,number,number] = [cy[0][0] * 1.95, CY_Y + 0.38, cy[0][2] * 1.95];
      const isoM1: [number,number,number] = [isoC[0] + 0.7, CY_Y + 0.88, isoC[2] - 0.55];
      const isoM2: [number,number,number] = [isoC[0] + 0.7, CY_Y + 0.88, isoC[2] + 0.55];
      const mthC:  [number,number,number] = [cy[3][0] * 2.0, CY_Y + 0.38, cy[3][2] * 2.0];

      const N1:  [number,number,number] = [-1.30, -1.02, -0.56];
      const O1:  [number,number,number] = [ 1.10, -1.02, -0.92];
      const CL1: [number,number,number] = [ 0.22, -1.25,  1.62];
      const C_IM:[number,number,number] = [-0.72, -1.48, -1.60];
      const O_R: [number,number,number] = [ 1.85, -1.38, -1.60];

      const phoCtr: [number,number,number] = [2.70, -1.72, -2.30];
      const pho = Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2;
        return [phoCtr[0] + 1.38 * Math.cos(a) * 0.78,
                phoCtr[1] + 1.38 * Math.sin(a) * 0.88,
                phoCtr[2] + 1.38 * Math.cos(a + 0.5) * 0.62] as [number,number,number];
      });

      const aniCtr: [number,number,number] = [-2.30, -1.62, -2.85];
      const ani = Array.from({ length: 6 }, (_, i) => {
        const a = (i / 6) * Math.PI * 2;
        return [aniCtr[0] + 1.38 * Math.cos(a) * 0.72,
                aniCtr[1] + 1.38 * Math.sin(a) * 0.88,
                aniCtr[2] + 1.38 * Math.cos(a + 0.4) * 0.66] as [number,number,number];
      });

      /* ── Assemble ── */
      sphere(RU, 0.56, MAT.Ru, mol);
      cy.forEach(c => sphere(c, 0.24, MAT.C, mol));
      for (let i = 0; i < 6; i++) bond(cy[i], cy[(i+1)%6], 0.07, MAT.bnd, mol);
      cy.forEach(c => bond(RU, c, 0.028, MAT.eta, mol));

      sphere(isoC, 0.20, MAT.C, mol);  bond(cy[0], isoC, 0.058, MAT.bnd, mol);
      sphere(isoM1,0.18, MAT.C, mol);  bond(isoC, isoM1, 0.05,  MAT.bnd, mol);
      sphere(isoM2,0.18, MAT.C, mol);  bond(isoC, isoM2, 0.05,  MAT.bnd, mol);
      sphere(mthC, 0.20, MAT.C, mol);  bond(cy[3], mthC,  0.058, MAT.bnd, mol);

      sphere(N1,  0.30, MAT.N,  mol);
      sphere(O1,  0.27, MAT.O,  mol);
      sphere(CL1, 0.42, MAT.Cl, mol);
      bond(RU, N1,  0.075, MAT.ruN,  mol);
      bond(RU, O1,  0.075, MAT.ruO,  mol);
      bond(RU, CL1, 0.075, MAT.ruCl, mol);

      sphere(C_IM, 0.21, MAT.C, mol);  bond(N1, C_IM, 0.065, MAT.bnd, mol);
      sphere(O_R,  0.21, MAT.O, mol);  bond(O1, O_R,  0.058, MAT.bnd, mol);

      pho.forEach(c => sphere(c, 0.18, MAT.C, mol));
      for (let i = 0; i < 6; i++) bond(pho[i], pho[(i+1)%6], 0.055, MAT.bnd, mol);
      bond(O_R, pho[0], 0.055, MAT.bnd, mol);

      ani.forEach(c => sphere(c, 0.18, MAT.C, mol));
      for (let i = 0; i < 6; i++) bond(ani[i], ani[(i+1)%6], 0.055, MAT.bnd, mol);
      bond(C_IM, ani[0], 0.058, MAT.bnd, mol);

      /* ── Auto-centre ── */
      const box    = new THREE.Box3().setFromObject(mol);
      const centre = new THREE.Vector3();
      box.getCenter(centre);
      mol.position.sub(centre);
      controls.target.set(0, 0, 0);
      controls.update();

      const sphere3 = new THREE.Sphere();
      box.getBoundingSphere(sphere3);
      const camDist = (sphere3.radius / Math.tan((camera.fov / 2) * Math.PI / 180)) * 0.88;
      camera.position.set(0, 0, camDist);
      controls.minDistance = sphere3.radius * 1.2;
      controls.maxDistance = sphere3.radius * 5;

      mol.rotation.set(-0.15, 0.40, 0);

      /* ── Animate ── */
      const prefRed = window.matchMedia("(prefers-reduced-motion: reduce)");
      controls.autoRotate = !prefRed.matches;
      let t = 0;
      const baseY = mol.position.y;

      function animate() {
        animId = requestAnimationFrame(animate);
        syncSize();
        controls.autoRotate = rotatingRef.current;
        controls.update();
        if (!prefRed.matches && rotatingRef.current) {
          t += 0.007;
          mol.position.y = baseY + Math.sin(t) * 0.10;
        }
        renderer.render(scene, camera);
      }
      animate();

      /* ── Reset button ── */
      const btnReset = document.getElementById("ru-btn-reset");
      if (btnReset) {
        btnReset.addEventListener("click", () => {
          controls.reset();
          mol.rotation.set(-0.15, 0.40, 0);
          mol.position.y = baseY;
          t = 0;
        });
      }
    })();

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (renderer) renderer.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    rotatingRef.current = !rotatingRef.current;
    setRotating(rotatingRef.current);
  };

  return (
    <div className="rounded-2xl overflow-hidden border" style={{ background: "#0a1628", borderColor: "rgba(14,124,123,0.3)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: "rgba(14,124,123,0.2)", background: "rgba(14,124,123,0.06)" }}>
        <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-ibm)" }}>
          [Ru(η⁶-<em>p</em>-cymene)(N,O-Schiff base)Cl]⁺ · Piano-Stool Geometry
        </span>
        <div className="flex items-center gap-2">
          <button onClick={handleToggle}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={{ background: "rgba(14,124,123,0.2)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            {rotating ? "⟳ Rotating" : "◼ Paused"}
          </button>
          <button id="ru-btn-reset"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-space)" }}>
            Reset
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div ref={containerRef}
        className="relative w-full"
        style={{ height: "400px" }}
        role="img"
        aria-label="Interactive 3D model of half-sandwich ruthenium arene Schiff-base complex in piano-stool geometry. Drag to rotate, scroll to zoom."
      />

      {/* Caption */}
      <div className="px-5 py-3 border-t" style={{ borderColor: "rgba(14,124,123,0.15)" }}>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
          The η⁶ <em>p</em>-cymene arene ring (top) forms the &ldquo;seat&rdquo;; the Schiff-base N,O donors
          and chloride (bottom) form the &ldquo;legs&rdquo; — giving the characteristic piano-stool geometry.
          Based on compounds reported in <em>ChemistrySelect</em> (2025). <strong style={{ color: "rgba(255,255,255,0.6)" }}>Drag to rotate · scroll to zoom.</strong>
        </p>
      </div>

      {/* Atom legend */}
      <div className="px-5 pb-4 flex flex-wrap gap-4">
        {[
          { color: "#60d4ff", label: "Ru (ruthenium)" },
          { color: "#111111", label: "C (carbon)", border: "#555" },
          { color: "#2288ff", label: "N (nitrogen)" },
          { color: "#ff3333", label: "O (oxygen)" },
          { color: "#22dd55", label: "Cl (chloride)" },
          { color: "#00e5ff", label: "η⁶ coordination", opacity: 0.7 },
        ].map((a) => (
          <span key={a.label} className="flex items-center gap-1.5 text-xs"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)" }}>
            <span className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: a.color, border: a.border ? `1px solid ${a.border}` : undefined, opacity: a.opacity ?? 1 }} />
            {a.label}
          </span>
        ))}
      </div>
    </div>
  );
}
