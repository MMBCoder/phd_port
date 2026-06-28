/* Molecular particle canvas animation */
(function () {
  'use strict';

  const ELEMENTS = [
    { sym: 'C',  r: 5,  col: 'rgba(150,150,150,' },
    { sym: 'N',  r: 6,  col: 'rgba(74,144,217,' },
    { sym: 'O',  r: 6,  col: 'rgba(224,85,85,' },
    { sym: 'H',  r: 3,  col: 'rgba(210,210,210,' },
    { sym: 'Ru', r: 9,  col: 'rgba(240,165,0,' },
    { sym: 'S',  r: 7,  col: 'rgba(245,208,32,' },
    { sym: 'Cl', r: 7,  col: 'rgba(123,198,126,' },
    { sym: 'P',  r: 7,  col: 'rgba(245,166,35,' },
    { sym: 'N',  r: 6,  col: 'rgba(74,144,217,' },
    { sym: 'C',  r: 5,  col: 'rgba(150,150,150,' },
    { sym: 'O',  r: 6,  col: 'rgba(224,85,85,' },
  ];

  class MolCanvas {
    constructor(canvasId) {
      this.cv = document.getElementById(canvasId);
      if (!this.cv) return;
      this.cx = this.cv.getContext('2d');
      this.pts = [];
      this.raf = null;
      this.resize();
      this.spawn();
      this.loop();
      window.addEventListener('resize', () => { this.resize(); this.spawn(); }, { passive: true });
    }

    resize() {
      this.cv.width  = window.innerWidth;
      this.cv.height = window.innerHeight;
    }

    spawn() {
      const n = Math.min(65, Math.floor((this.cv.width * this.cv.height) / 18000));
      this.pts = [];
      for (let i = 0; i < n; i++) {
        const el  = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
        const spd = Math.random() * 0.28 + 0.08;
        const ang = Math.random() * Math.PI * 2;
        this.pts.push({
          x:  Math.random() * this.cv.width,
          y:  Math.random() * this.cv.height,
          vx: Math.cos(ang) * spd,
          vy: Math.sin(ang) * spd,
          el: el,
          op: Math.random() * 0.32 + 0.18,
        });
      }
    }

    drawBonds() {
      const cx = this.cx, pts = this.pts, D = 135;
      for (let i = 0; i < pts.length - 1; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < D) {
            const a = (1 - d / D) * 0.3;
            cx.beginPath();
            cx.moveTo(pts[i].x, pts[i].y);
            cx.lineTo(pts[j].x, pts[j].y);
            cx.strokeStyle = `rgba(0,180,216,${a})`;
            cx.lineWidth = (1 - d / D) * 1.4;
            cx.stroke();
          }
        }
      }
    }

    drawAtoms() {
      const cx = this.cx;
      for (const p of this.pts) {
        cx.beginPath();
        cx.arc(p.x, p.y, p.el.r, 0, Math.PI * 2);
        cx.fillStyle = p.el.col + p.op + ')';
        cx.fill();

        if (p.el.r >= 5) {
          cx.fillStyle = `rgba(255,255,255,${Math.min(p.op * 1.5, 0.75)})`;
          cx.font = `bold ${Math.max(8, p.el.r * 1.1)}px Montserrat,sans-serif`;
          cx.textAlign    = 'center';
          cx.textBaseline = 'middle';
          cx.fillText(p.el.sym, p.x, p.y);
        }
      }
    }

    move() {
      const W = this.cv.width + 20, H = this.cv.height + 20;
      for (const p of this.pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = W;
        if (p.x > W)   p.x = -20;
        if (p.y < -20) p.y = H;
        if (p.y > H)   p.y = -20;
      }
    }

    loop() {
      this.cx.clearRect(0, 0, this.cv.width, this.cv.height);
      this.drawBonds();
      this.drawAtoms();
      this.move();
      this.raf = requestAnimationFrame(() => this.loop());
    }
  }

  window.MolCanvas = MolCanvas;
})();
