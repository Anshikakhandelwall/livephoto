<script>

/* ══════════════════════════════════
   FRAME TEMPLATES
   Each template = function(ctx, W, H, photos, caption, PAD)
   draws onto ctx and returns nothing
══════════════════════════════════ */
      const FRAMES = [
        {
          id: "blush",
          label: "Blush",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            ctx.fillStyle = "#fff5f8";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#f2a7c3";
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, W - 4, H - 4);
            ctx.fillStyle = "#f2a7c3";
            for (let i = 0; i < 6; i++) {
              ctx.beginPath();
              ctx.arc(Math.random() * W, Math.random() * H, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            ctx.fillStyle = "#fff5f8";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#f2a7c3";
            ctx.lineWidth = 5;
            ctx.strokeRect(3, 3, W - 6, H - 6);
            let y = PAD;
            photos.forEach((p) => {
              ctx.shadowColor = "rgba(200,80,120,.12)";
              ctx.shadowBlur = 12;
              ctx.fillStyle = "white";
              rr(ctx, PAD, y, W - PAD * 2, PH, 10);
              ctx.fill();
              ctx.shadowBlur = 0;
              drawPhoto(ctx, p, PAD + 3, y + 3, W - PAD * 2 - 6, PH - 6);
              ctx.fillStyle = "#c090a8";
              ctx.font = "10px 'DM Sans',sans-serif";
              ctx.textAlign = "left";
              ctx.fillText(new Date().toLocaleString(), PAD + 8, y + PH - 7);
              y += PH + PAD;
            });
            ctx.font = "italic 22px 'Cormorant Garamond',serif";
            ctx.fillStyle = "#e8577a";
            ctx.textAlign = "center";
            ctx.fillText(caption, W / 2, H - 18);
          },
        },
        {
          id: "dark",
          label: "Dark",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            ctx.fillStyle = "#1a0a14";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#8b3a6a";
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, W - 4, H - 4);
            ctx.fillStyle = "rgba(200,80,120,.4)";
            for (let i = 0; i < 5; i++) {
              ctx.beginPath();
              ctx.arc(
                Math.random() * W,
                Math.random() * H,
                1.5,
                0,
                Math.PI * 2,
              );
              ctx.fill();
            }
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            ctx.fillStyle = "#1a0a14";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#6b2a5a";
            ctx.lineWidth = 5;
            ctx.strokeRect(3, 3, W - 6, H - 6);
            // star dots
            ctx.fillStyle = "rgba(242,167,195,.6)";
            for (let i = 0; i < 30; i++) {
              ctx.beginPath();
              ctx.arc(
                Math.random() * W,
                Math.random() * H,
                Math.random() * 1.5 + 0.5,
                0,
                Math.PI * 2,
              );
              ctx.fill();
            }
            let y = PAD;
            photos.forEach((p) => {
              ctx.strokeStyle = "#6b2a5a";
              ctx.lineWidth = 1.5;
              rr(ctx, PAD, y, W - PAD * 2, PH, 10);
              ctx.stroke();
              drawPhoto(ctx, p, PAD + 3, y + 3, W - PAD * 2 - 6, PH - 6);
              // corner roses
              ctx.font = "14px serif";
              ctx.fillText("🌹", PAD + 6, y + 20);
              ctx.fillText("🌹", W - PAD - 20, y + 20);
              y += PH + PAD;
            });
            ctx.font = "italic 22px 'Cormorant Garamond',serif";
            ctx.fillStyle = "#f2a7c3";
            ctx.textAlign = "center";
            ctx.fillText(caption, W / 2, H - 18);
          },
        },
        {
          id: "y2k",
          label: "Y2K",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            const g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#c0f0ff");
            g.addColorStop(0.5, "#ffb6e6");
            g.addColorStop(1, "#fffb80");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#ff69b4";
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, W - 4, H - 4);
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            const g = ctx.createLinearGradient(0, 0, W, H);
            g.addColorStop(0, "#e0f8ff");
            g.addColorStop(0.5, "#ffd6f5");
            g.addColorStop(1, "#fffce0");
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
            // y2k deco shapes
            ctx.fillStyle = "rgba(255,105,180,.18)";
            for (let i = 0; i < 8; i++) {
              ctx.beginPath();
              ctx.arc(
                Math.random() * W,
                Math.random() * H,
                Math.random() * 14 + 4,
                0,
                Math.PI * 2,
              );
              ctx.fill();
            }
            ctx.strokeStyle = "#ff69b4";
            ctx.lineWidth = 4;
            ctx.strokeRect(3, 3, W - 6, H - 6);
            let y = PAD;
            photos.forEach((p) => {
              ctx.shadowColor = "rgba(255,105,180,.3)";
              ctx.shadowBlur = 16;
              ctx.fillStyle = "rgba(255,255,255,.7)";
              rr(ctx, PAD, y, W - PAD * 2, PH, 14);
              ctx.fill();
              ctx.shadowBlur = 0;
              drawPhoto(ctx, p, PAD + 3, y + 3, W - PAD * 2 - 6, PH - 6);
              ctx.font = "13px serif";
              ctx.fillText("⭐", PAD + 6, y + PH - 8);
              ctx.fillText("💫", W - PAD - 20, y + PH - 8);
              y += PH + PAD;
            });
            ctx.font = "bold italic 22px 'Cormorant Garamond',serif";
            ctx.fillStyle = "#cc0077";
            ctx.textAlign = "center";
            ctx.shadowColor = "rgba(255,105,180,.5)";
            ctx.shadowBlur = 8;
            ctx.fillText(caption, W / 2, H - 18);
            ctx.shadowBlur = 0;
          },
        },
        {
          id: "minimal",
          label: "Minimal",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            ctx.fillStyle = "#fafafa";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#ddd";
            ctx.lineWidth = 2;
            ctx.strokeRect(2, 2, W - 4, H - 4);
            ctx.fillStyle = "#aaa";
            ctx.fillRect(W / 2 - 10, H / 2 - 1, 20, 2);
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            ctx.fillStyle = "#fafafa";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#e0e0e0";
            ctx.lineWidth = 1;
            ctx.strokeRect(4, 4, W - 8, H - 8);
            let y = PAD;
            photos.forEach((p) => {
              ctx.fillStyle = "white";
              ctx.shadowColor = "rgba(0,0,0,.08)";
              ctx.shadowBlur = 8;
              rr(ctx, PAD, y, W - PAD * 2, PH, 6);
              ctx.fill();
              ctx.shadowBlur = 0;
              drawPhoto(ctx, p, PAD + 2, y + 2, W - PAD * 2 - 4, PH - 4);
              ctx.strokeStyle = "#efefef";
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(PAD, y + PH + PAD / 2);
              ctx.lineTo(W - PAD, y + PH + PAD / 2);
              ctx.stroke();
              y += PH + PAD;
            });
            ctx.font = "13px 'DM Sans',sans-serif";
            ctx.fillStyle = "#999";
            ctx.textAlign = "center";
            ctx.letterSpacing = "2px";
            ctx.fillText(caption.toUpperCase(), W / 2, H - 18);
          },
        },
        {
          id: "vintage",
          label: "Vintage",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            ctx.fillStyle = "#f5ead0";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#b08040";
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, W - 4, H - 4);
            ctx.strokeStyle = "#b08040";
            ctx.lineWidth = 1;
            ctx.strokeRect(5, 5, W - 10, H - 10);
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            ctx.fillStyle = "#f5ead0";
            ctx.fillRect(0, 0, W, H);
            // outer border double line
            ctx.strokeStyle = "#b08040";
            ctx.lineWidth = 4;
            ctx.strokeRect(4, 4, W - 8, H - 8);
            ctx.strokeStyle = "#c9a060";
            ctx.lineWidth = 1.5;
            ctx.strokeRect(10, 10, W - 20, H - 20);
            // corner ornaments
            const corners = [
              [14, 14],
              [W - 14, 14],
              [14, H - 14],
              [W - 14, H - 14],
            ];
            corners.forEach(([cx, cy]) => {
              ctx.fillStyle = "#b08040";
              ctx.font = "16px serif";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText("✦", cx, cy);
            });
            ctx.textBaseline = "alphabetic";
            let y = PAD + 8;
            photos.forEach((p) => {
              ctx.shadowColor = "rgba(150,100,30,.15)";
              ctx.shadowBlur = 10;
              ctx.fillStyle = "#fffdf5";
              rr(ctx, PAD + 6, y, W - PAD * 2 - 12, PH, 4);
              ctx.fill();
              ctx.shadowBlur = 0;
              // sepia overlay via filter
              const tmp = document.createElement("canvas");
              tmp.width = W - PAD * 2 - 18;
              tmp.height = PH - 6;
              const tc = tmp.getContext("2d");
              tc.filter = "sepia(40%)";
              drawPhoto(tc, p, 0, 0, tmp.width, tmp.height);
              ctx.drawImage(tmp, PAD + 9, y + 3);
              ctx.strokeStyle = "#c9a060";
              ctx.lineWidth = 1;
              rr(ctx, PAD + 6, y, W - PAD * 2 - 12, PH, 4);
              ctx.stroke();
              y += PH + PAD;
            });
            ctx.font = "italic 20px 'Cormorant Garamond',serif";
            ctx.fillStyle = "#7a5020";
            ctx.textAlign = "center";
            ctx.fillText(caption, W / 2, H - 16);
          },
        },
        {
          id: "hearts",
          label: "Hearts",
          preview(c) {
            const ctx = c.getContext("2d"),
              W = c.width,
              H = c.height;
            ctx.fillStyle = "#fff0f5";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#ff8ab0";
            ctx.lineWidth = 3;
            ctx.strokeRect(2, 2, W - 4, H - 4);
            ctx.font = "14px serif";
            ctx.fillText("💗", W / 2 - 7, H / 2 + 5);
          },
          draw(ctx, W, H, photos, caption, PAD, PH) {
            ctx.fillStyle = "#fff0f5";
            ctx.fillRect(0, 0, W, H);
            ctx.strokeStyle = "#ff8ab0";
            ctx.lineWidth = 5;
            ctx.strokeRect(3, 3, W - 6, H - 6);
            // scattered hearts border
            const heartEmojis = ["💗", "💕", "💖", "🌸", "💝"];
            ctx.font = "16px serif";
            for (let i = 0; i < 20; i++) {
              const x =
                Math.random() < 0.5
                  ? Math.random() * 24 + 2
                  : W - Math.random() * 24 - 18;
              const y = Math.random() * H;
              ctx.fillText(
                heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
                x,
                y,
              );
            }
            let y = PAD;
            photos.forEach((p) => {
              ctx.shadowColor = "rgba(255,100,150,.18)";
              ctx.shadowBlur = 14;
              ctx.fillStyle = "white";
              rr(ctx, PAD + 20, y, W - PAD * 2 - 40, PH, 10);
              ctx.fill();
              ctx.shadowBlur = 0;
              drawPhoto(ctx, p, PAD + 23, y + 3, W - PAD * 2 - 46, PH - 6);
              ctx.font = "13px serif";
              ctx.fillText("💕", PAD + 24, y + PH - 8);
              ctx.fillText("💕", W - PAD - 38, y + PH - 8);
              y += PH + PAD;
            });
            ctx.font = "italic 22px 'Cormorant Garamond',serif";
            ctx.fillStyle = "#e8577a";
            ctx.textAlign = "center";
            ctx.fillText(caption, W / 2, H - 18);
          },
        },
      ];

      let soloFrame = "blush";
      let bFrame = "blush";

      function drawPhoto(ctx, p, x, y, w, h) {
        // p can be a canvas (solo) or a combined canvas (bestie)
        if (p && p.canvas) ctx.drawImage(p.canvas, x, y, w, h);
        else if (p && p.combined) ctx.drawImage(p.combined, x, y, w, h);
        else if (p && p.tagName === "CANVAS") ctx.drawImage(p, x, y, w, h);
      }

      function buildFramePreviews(pickerId, frameVar, setter) {
        const picker = document.getElementById(pickerId);
        picker.innerHTML = "";
        FRAMES.forEach((f) => {
          const wrap = document.createElement("div");
          wrap.className =
            "frame-opt" + (frameVar() === f.id ? " selected" : "");
          wrap.title = f.label;
          const c = document.createElement("canvas");
          c.width = 72;
          c.height = 72;
          f.preview(c);
          const lbl = document.createElement("div");
          lbl.className = "fo-label";
          lbl.innerText = f.label;
          wrap.appendChild(c);
          wrap.appendChild(lbl);
          wrap.onclick = () => {
            setter(f.id);
            picker
              .querySelectorAll(".frame-opt")
              .forEach((o) => o.classList.remove("selected"));
            wrap.classList.add("selected");
          };
          picker.appendChild(wrap);
        });
      }

      /* ════════════════════════════════
   SCREEN MANAGER
════════════════════════════════ */
      function showScreen(name) {
        document.querySelectorAll(".screen").forEach((s) => {
          s.classList.remove("active");
          s.style.display = "none";
        });
        const el = document.getElementById("screen-" + name);
        el.style.display = "flex";
        requestAnimationFrame(() => el.classList.add("active"));
      }

      function goHome(from) {
        if (from === "solo") stopSoloCamera();
        if (from === "bestie-lobby" || from === "bestie-booth") stopBestie();
        showScreen("home");
      }

      /* ════════════════════════════════
   FLOATING HEARTS
════════════════════════════════ */
      setInterval(() => {
        const h = document.createElement("div");
        h.className = "fh";
        h.innerText = ["💖", "🌸", "💕", "✨", "🎀"][
          Math.floor(Math.random() * 5)
        ];
        h.style.cssText = `left:${Math.random() * 92}vw;bottom:0;font-size:${14 + Math.random() * 14}px`;
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 6300);
      }, 1400);

      function doFlash() {
        const f = document.getElementById("flashOl");
        f.classList.add("go");
        setTimeout(() => f.classList.remove("go"), 380);
      }

      function rr(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
        ctx.closePath();
      }

      /* ════════════════════════════════
   SOLO BOOTH
════════════════════════════════ */
      let soloStream = null;
      let soloPhotos = [];

      showScreen("home"); // init

      async function startSoloCamera() {
        try {
          soloStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false,
          });
          document.getElementById("soloVid").srcObject = soloStream;
        } catch (e) {
          alert("📸 Camera access needed!\nOpen via HTTPS or localhost.");
        }
      }

      function stopSoloCamera() {
        if (soloStream) {
          soloStream.getTracks().forEach((t) => t.stop());
          soloStream = null;
        }
        soloPhotos = [];
        document.getElementById("soloThumbs").innerHTML = "";
        document.getElementById("soloStripWrap").style.display = "none";
        document.getElementById("soloStatus").innerText =
          "Take 4 photos to build your strip!";
        document.getElementById("soloFilter").value = "none";
        document.getElementById("soloVid").style.filter = "";
      }

      // Called when solo card clicked
      const origShowScreen = showScreen;
      function showScreen(name) {
        document.querySelectorAll(".screen").forEach((s) => {
          s.classList.remove("active");
          s.style.display = "none";
        });
        const el = document.getElementById("screen-" + name);
        el.style.display = "flex";
        requestAnimationFrame(() => el.classList.add("active"));
        if (name === "solo") startSoloCamera();
      }

      function soloFilterChange() {
        const f = document.getElementById("soloFilter").value;
        document.getElementById("soloVid").style.filter = f === "none" ? "" : f;
      }

      function soloCapture() {
        if (soloPhotos.length >= 4) {
          alert("You already have 4 photos 💖 Delete one to retake!");
          return;
        }
        doFlash();
        const vid = document.getElementById("soloVid");
        const c = document.createElement("canvas");
        c.width = 400;
        c.height = 300;
        const ctx = c.getContext("2d");
        const f = document.getElementById("soloFilter").value;
        if (f !== "none") ctx.filter = f;
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(vid, -400, 0, 400, 300);
        ctx.restore();

        const idx = Date.now();
        soloPhotos.push({ canvas: c, idx });
        addSoloThumb(c, idx);
        updateSoloStatus();
      }

      function addSoloThumb(canvas, idx) {
        const wrap = document.createElement("div");
        wrap.className = "thumb-wrap";
        wrap.dataset.idx = idx;
        const img = document.createElement("img");
        img.src = canvas.toDataURL();
        img.style.aspectRatio = "4/3";
        const del = document.createElement("button");
        del.className = "del-btn";
        del.innerHTML = "✕";
        del.onclick = (e) => {
          e.stopPropagation();
          deleteSoloPhoto(idx);
        };
        wrap.appendChild(img);
        wrap.appendChild(del);
        document.getElementById("soloThumbs").appendChild(wrap);
      }

      function deleteSoloPhoto(idx) {
        soloPhotos = soloPhotos.filter((p) => p.idx !== idx);
        const w = document.querySelector(`.thumb-wrap[data-idx="${idx}"]`);
        if (w) w.remove();
        updateSoloStatus();
      }

      function updateSoloStatus() {
        const n = soloPhotos.length;
        document.getElementById("soloStatus").innerText =
          n >= 4
            ? "Strip ready! ✨ Click Generate Strip 🎞"
            : `Photo ${n} of 4 — ${4 - n} to go 💖`;
      }

      function soloGenerate() {
        if (!soloPhotos.length) {
          alert("Take some photos first 💕");
          return;
        }
        const layout = document.getElementById("soloLayout").value;
        const caption =
          document.getElementById("soloCaption").value || "retro blush 💌";
        const canvas = document.getElementById("soloCanvas");
        const ctx = canvas.getContext("2d");
        const PAD = 14;

        if (layout === "strip") {
          const W = 360,
            PH = 270,
            H = PAD + soloPhotos.length * (PH + PAD) + 56;
          canvas.width = W;
          canvas.height = H;
          ctx.fillStyle = "#fff5f8";
          ctx.fillRect(0, 0, W, H);
          ctx.strokeStyle = "#f2a7c3";
          ctx.lineWidth = 5;
          ctx.strokeRect(3, 3, W - 6, H - 6);
          let y = PAD;
          soloPhotos.forEach((p) => {
            ctx.shadowColor = "rgba(200,80,120,.12)";
            ctx.shadowBlur = 12;
            ctx.fillStyle = "white";
            rr(ctx, PAD, y, W - PAD * 2, PH, 10);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.drawImage(p.canvas, PAD + 3, y + 3, W - PAD * 2 - 6, PH - 6);
            ctx.fillStyle = "#c090a8";
            ctx.font = "10px 'DM Sans',sans-serif";
            ctx.textAlign = "left";
            ctx.fillText(new Date().toLocaleString(), PAD + 8, y + PH - 7);
            y += PH + PAD;
          });
          ctx.font = "italic 20px 'Cormorant Garamond',serif";
          ctx.fillStyle = "#e8577a";
          ctx.textAlign = "center";
          ctx.fillText(caption, W / 2, H - 18);
        } else {
          const CW = 340,
            PH = 130,
            GAP = 10,
            W = CW,
            H = PAD + (PH + GAP) * 2 + 48;
          canvas.width = W;
          canvas.height = H;
          const grd = ctx.createLinearGradient(0, 0, 0, H);
          grd.addColorStop(0, "#fff5f8");
          grd.addColorStop(1, "#fce8f2");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, W, H);
          ctx.strokeStyle = "#f2a7c3";
          ctx.lineWidth = 4;
          ctx.strokeRect(3, 3, W - 6, H - 6);
          ctx.fillStyle = "rgba(242,167,195,.45)";
          for (let i = 0; i < 18; i++) {
            ctx.beginPath();
            ctx.arc(
              Math.random() * W,
              Math.random() * H,
              Math.random() * 2.5 + 0.5,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
          const cellW = (W - PAD * 3) / 2;
          soloPhotos.slice(0, 4).forEach((p, i) => {
            const col = i % 2,
              row = Math.floor(i / 2),
              x = PAD + col * (cellW + PAD),
              y = PAD + row * (PH + GAP);
            ctx.shadowColor = "rgba(200,80,120,.14)";
            ctx.shadowBlur = 10;
            ctx.fillStyle = "white";
            rr(ctx, x, y, cellW, PH, 8);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.drawImage(p.canvas, x + 2, y + 2, cellW - 4, PH - 4);
          });
          ctx.font = "italic 18px 'Cormorant Garamond',serif";
          ctx.fillStyle = "#e8577a";
          ctx.textAlign = "center";
          ctx.fillText(caption, W / 2, H - 16);
        }
        document.getElementById("soloStripWrap").style.display = "block";
        document
          .getElementById("soloCanvas")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      function soloDownload() {
        const c = document.getElementById("soloCanvas");
        if (!c.width) {
          soloGenerate();
          return;
        }
        const a = document.createElement("a");
        a.download = "blushbooth_solo_" + Date.now() + ".png";
        a.href = c.toDataURL("image/png");
        a.click();
      }

      /* ════════════════════════════════
   BESTIE BOOTH — PeerJS
════════════════════════════════ */
      let peer, conn;
      let localStream, remoteStream;
      let bPhotos = [];
      let myName = "You",
        friendName = "Bestie";
      let isHost = false,
        roomCode = "",
        countingDown = false;
      let snapSeq = 0;

      function stopBestie() {
        if (localStream) {
          localStream.getTracks().forEach((t) => t.stop());
          localStream = null;
        }
        if (peer) {
          try {
            peer.destroy();
          } catch (e) {}
          peer = null;
        }
        conn = null;
        bPhotos = [];
        snapSeq = 0;
        countingDown = false;
        isHost = false;
        document.getElementById("bThumbs").innerHTML = "";
        document.getElementById("bStripWrap").style.display = "none";
        document.getElementById("photoStatus").innerText =
          "Take 4 photos to build your strip!";
        document.getElementById("waitingOl").style.display = "flex";
        document.getElementById("shootBtn").disabled = true;
        document.getElementById("lobbyStatus").innerHTML = "";
        document.getElementById("myName").value = "";
        document.getElementById("joinCode").value = "";
      }

      function setStatus(msg, type = "wait") {
        document.getElementById("lobbyStatus").innerHTML =
          `<div class="pill ${type}"><div class="dot ${type !== "ok" ? "pulse" : ""}"></div>${msg}</div>`;
      }

      async function startBestieCamera() {
        try {
          localStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" },
            audio: false,
          });
          document.getElementById("myVid").srcObject = localStream;
          return true;
        } catch (e) {
          alert("📸 Camera access needed!\nOpen via HTTPS or localhost.");
          return false;
        }
      }

      function attachRemote(stream) {
        remoteStream = stream;
        const vid = document.getElementById("friendVid");
        vid.srcObject = stream;
        vid.play().catch(() => {});
        document.getElementById("waitingOl").style.display = "none";
        document.getElementById("friendTag").innerText = friendName + " 🌸";
      }

      function mkPeer(id) {
        peer = new Peer(id, {
          host: "0.peerjs.com",
          port: 443,
          path: "/",
          secure: true,
          debug: 0,
          config: {
            iceServers: [
              { urls: "stun:stun.l.google.com:19302" },
              { urls: "stun:stun1.l.google.com:19302" },
              { urls: "stun:global.stun.twilio.com:3478" },
            ],
          },
        });
        peer.on("error", (e) => {
          console.error(e);
          setStatus("⚠️ " + e.type, "err");
        });
        peer.on("call", (inc) => {
          inc.answer(localStream);
          inc.on("stream", attachRemote);
        });
      }

      async function createRoom() {
        myName = document.getElementById("myName").value.trim() || "You";
        document.getElementById("myTag").innerText = myName + " 💖";
        if (!(await startBestieCamera())) return;
        roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();
        isHost = true;
        mkPeer("bb-h-" + roomCode);
        peer.on("open", () => {
          setStatus("Waiting for bestie…", "wait");
          document.getElementById("lobbyStatus").innerHTML +=
            `<div class="code-box" onclick="copyCode('${roomCode}')">
        <div class="code-val">${roomCode}</div>
        <span class="code-hint">tap to copy 📋</span>
       </div>`;
        });
        peer.on("connection", (c) => {
          conn = c;
          bindData();
          conn.on("open", () => {
            conn.send({ type: "hello", name: myName });
            setStatus("Connected 💖", "ok");
            setTimeout(() => {
              const out = peer.call("bb-g-" + roomCode, localStream);
              out.on("stream", attachRemote);
            }, 600);
            setTimeout(enterBooth, 900);
          });
        });
      }

      function copyCode(code) {
        navigator.clipboard.writeText(code).catch(() => {});
        const h = document.querySelector(".code-hint");
        if (h) {
          h.innerText = "Copied! ✨";
          setTimeout(() => (h.innerText = "tap to copy 📋"), 2000);
        }
      }

      async function joinRoom() {
        myName = document.getElementById("myName").value.trim() || "You";
        document.getElementById("myTag").innerText = myName + " 💖";
        const code = document
          .getElementById("joinCode")
          .value.trim()
          .toUpperCase();
        if (code.length < 4) {
          setStatus("Enter a valid room code!", "err");
          return;
        }
        roomCode = code;
        if (!(await startBestieCamera())) return;
        setStatus("Connecting…", "wait");
        mkPeer("bb-g-" + roomCode);
        peer.on("open", () => {
          conn = peer.connect("bb-h-" + roomCode, { reliable: true });
          bindData();
          conn.on("open", () => {
            conn.send({ type: "hello", name: myName });
            setStatus("Connected 💖", "ok");
            setTimeout(enterBooth, 900);
          });
        });
      }

      function bindData() {
        conn.on("data", (d) => {
          if (d.type === "hello") {
            friendName = d.name || "Bestie";
            document.getElementById("friendTag").innerText = friendName + " 🌸";
            document.getElementById("boothNames").innerText =
              myName + " & " + friendName;
          }
          if (d.type === "filter") {
            document.getElementById("bFilter").value = d.value;
            const v = d.value === "none" ? "" : d.value;
            document.getElementById("myVid").style.filter = v;
            document.getElementById("friendVid").style.filter = v;
          }
          if (d.type === "countdown") {
            if (d.seq !== undefined) snapSeq = d.seq;
            countingDown = true;
            document.getElementById("shootBtn").disabled = true;
            runCountdown(d.num);
          }
          if (d.type === "snap") receiveSnap(d.imgData, d.seq);
          if (d.type === "delete") {
            if (bPhotos[d.seq])
              bPhotos[d.seq] = { mine: null, theirs: null, combined: null };
            snapSeq = d.seq;
            const w = document.querySelector(
              `.thumb-wrap[data-seq="${d.seq}"]`,
            );
            if (w) w.remove();
            updateBStatus();
            if (bCompletedCount() < 4)
              document.getElementById("shootBtn").disabled = false;
          }
        });
        conn.on("close", () => setStatus("Friend disconnected 💔", "err"));
        conn.on("error", console.error);
      }

      function enterBooth() {
        showScreen("bestie-booth");
        document.getElementById("boothNames").innerText =
          myName + " & " + friendName;
        document.getElementById("shootBtn").disabled = false;
      }

      function applyFilter() {
        const f = document.getElementById("bFilter").value;
        const v = f === "none" ? "" : f;
        document.getElementById("myVid").style.filter = v;
        document.getElementById("friendVid").style.filter = v;
        if (conn?.open) conn.send({ type: "filter", value: f });
      }

      /* countdown */
      function startCountdown() {
        if (countingDown || bCompletedCount() >= 4) return;
        countingDown = true;
        document.getElementById("shootBtn").disabled = true;
        syncCountdown(3);
      }
      function syncCountdown(n) {
        if (conn?.open) conn.send({ type: "countdown", num: n, seq: snapSeq });
        runCountdown(n);
      }
      function runCountdown(n) {
        const ov = document.createElement("div");
        ov.className = "cd-overlay";
        const nm = document.createElement("div");
        nm.className = "cd-num";
        nm.innerText = n;
        ov.appendChild(nm);
        document.body.appendChild(ov);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => nm.classList.add("show")),
        );
        setTimeout(() => {
          ov.remove();
          if (n > 1) {
            isHost ? syncCountdown(n - 1) : runCountdown(n - 1);
          } else {
            setTimeout(() => {
              doFlash();
              captureFrame();
            }, 300);
          }
        }, 900);
      }

      /* capture */
      function captureFrame() {
        const vid = document.getElementById("myVid");
        const c = document.createElement("canvas");
        c.width = 400;
        c.height = 300;
        const ctx = c.getContext("2d");
        const f = document.getElementById("bFilter").value;
        if (f !== "none") ctx.filter = f;
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(vid, -400, 0, 400, 300);
        ctx.restore();
        const imgData = c.toDataURL("image/jpeg", 0.85);
        const seq = snapSeq;
        if (conn?.open) conn.send({ type: "snap", imgData, seq });
        if (!bPhotos[seq])
          bPhotos[seq] = { mine: null, theirs: null, combined: null };
        bPhotos[seq].mine = c;
        tryFinalize(seq);
      }

      function receiveSnap(imgData, seq) {
        if (!bPhotos[seq])
          bPhotos[seq] = { mine: null, theirs: null, combined: null };
        const img = new Image();
        img.onload = () => {
          const c = document.createElement("canvas");
          c.width = 400;
          c.height = 300;
          c.getContext("2d").drawImage(img, 0, 0, 400, 300);
          bPhotos[seq].theirs = c;
          tryFinalize(seq);
        };
        img.src = imgData;
      }

      function tryFinalize(seq) {
        const p = bPhotos[seq];
        if (!p?.mine || !p?.theirs) return;
        const combined = buildCombined(p.mine, p.theirs);
        p.combined = combined;
        addBThumb(combined, seq);
        updateBStatus();
        snapSeq = seq + 1;
        countingDown = false;
        if (bCompletedCount() < 4)
          document.getElementById("shootBtn").disabled = false;
      }

      function buildCombined(left, right) {
        const W = 800,
          H = 300,
          c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        const ctx = c.getContext("2d");
        ctx.drawImage(left, 0, 0, W / 2, H);
        ctx.drawImage(right, W / 2, 0, W / 2, H);
        const g = ctx.createLinearGradient(W / 2 - 18, 0, W / 2 + 18, 0);
        g.addColorStop(0, "rgba(253,245,240,0)");
        g.addColorStop(0.45, "rgba(253,245,240,.22)");
        g.addColorStop(0.55, "rgba(253,245,240,.22)");
        g.addColorStop(1, "rgba(253,245,240,0)");
        ctx.fillStyle = g;
        ctx.fillRect(W / 2 - 18, 0, 36, H);
        return c;
      }

      function bCompletedCount() {
        return bPhotos.filter((p) => p && p.combined).length;
      }

      function addBThumb(canvas, seq) {
        const old = document.querySelector(`.thumb-wrap[data-seq="${seq}"]`);
        if (old) old.remove();
        const wrap = document.createElement("div");
        wrap.className = "thumb-wrap";
        wrap.dataset.seq = seq;
        const img = document.createElement("img");
        img.src = canvas.toDataURL();
        img.style.aspectRatio = "16/9";
        const del = document.createElement("button");
        del.className = "del-btn";
        del.innerHTML = "✕";
        del.onclick = (e) => {
          e.stopPropagation();
          deleteBPhoto(seq);
        };
        wrap.appendChild(img);
        wrap.appendChild(del);
        document.getElementById("bThumbs").appendChild(wrap);
      }

      function deleteBPhoto(seq) {
        bPhotos[seq] = { mine: null, theirs: null, combined: null };
        snapSeq = seq;
        const w = document.querySelector(`.thumb-wrap[data-seq="${seq}"]`);
        if (w) w.remove();
        updateBStatus();
        document.getElementById("shootBtn").disabled = false;
        if (conn?.open) conn.send({ type: "delete", seq });
      }

      function updateBStatus() {
        const done = bCompletedCount();
        document.getElementById("photoStatus").innerText =
          done >= 4
            ? "Strip ready! ✨ Click Generate Strip 🎞"
            : `Photo ${done} of 4 taken 💖`;
      }

      function generateStrip() {
        const done = bPhotos.filter((p) => p && p.combined);
        if (!done.length) {
          alert("Take some photos first 💕");
          return;
        }
        const layout = document.getElementById("bLayout").value;
        const caption =
          document.getElementById("bCaption").value ||
          myName + " & " + friendName + " 💌";
        const canvas = document.getElementById("bStrip");
        const ctx = canvas.getContext("2d");
        const PAD = 16,
          PHOTO_W = 760,
          PHOTO_H = Math.round((PHOTO_W * 300) / 800);

        const W = PHOTO_W + PAD * 2,
          H = PAD + done.length * (PHOTO_H + PAD) + 56;
        canvas.width = W;
        canvas.height = H;

        if (layout === "strip") {
          ctx.fillStyle = "#fff5f8";
          ctx.fillRect(0, 0, W, H);
          ctx.strokeStyle = "#f2a7c3";
          ctx.lineWidth = 5;
          ctx.strokeRect(3, 3, W - 6, H - 6);
          let y = PAD;
          done.forEach((p) => {
            ctx.shadowColor = "rgba(200,80,120,.12)";
            ctx.shadowBlur = 14;
            ctx.fillStyle = "white";
            rr(ctx, PAD, y, PHOTO_W, PHOTO_H, 10);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.drawImage(p.combined, PAD + 3, y + 3, PHOTO_W - 6, PHOTO_H - 6);
            ctx.fillStyle = "#c090a8";
            ctx.font = "11px 'DM Sans',sans-serif";
            ctx.textAlign = "left";
            ctx.fillText(
              new Date().toLocaleString(),
              PAD + 10,
              y + PHOTO_H - 8,
            );
            y += PHOTO_H + PAD;
          });
          ctx.font = "italic 24px 'Cormorant Garamond',serif";
          ctx.fillStyle = "#e8577a";
          ctx.textAlign = "center";
          ctx.fillText(caption, W / 2, H - 18);
        } else {
          const grd = ctx.createLinearGradient(0, 0, 0, H);
          grd.addColorStop(0, "#fff5f8");
          grd.addColorStop(1, "#fce8f2");
          ctx.fillStyle = grd;
          ctx.fillRect(0, 0, W, H);
          ctx.fillStyle = "rgba(242,167,195,.4)";
          for (let i = 0; i < 28; i++) {
            ctx.beginPath();
            ctx.arc(
              Math.random() * W,
              Math.random() * H,
              Math.random() * 3 + 1,
              0,
              Math.PI * 2,
            );
            ctx.fill();
          }
          ctx.strokeStyle = "#e8a0bf";
          ctx.lineWidth = 4;
          ctx.strokeRect(3, 3, W - 6, H - 6);
          let y = PAD;
          done.forEach((p) => {
            ctx.shadowColor = "rgba(200,80,120,.15)";
            ctx.shadowBlur = 16;
            ctx.fillStyle = "white";
            rr(ctx, PAD, y, PHOTO_W, PHOTO_H, 12);
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.drawImage(p.combined, PAD + 3, y + 3, PHOTO_W - 6, PHOTO_H - 6);
            y += PHOTO_H + PAD;
          });
          ctx.font = "italic 26px 'Cormorant Garamond',serif";
          ctx.fillStyle = "#e8577a";
          ctx.textAlign = "center";
          ctx.fillText(caption, W / 2, H - 18);
        }
        document.getElementById("bStripWrap").style.display = "block";
        document
          .getElementById("bStrip")
          .scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      function downloadStrip() {
        const c = document.getElementById("bStrip");
        if (!c.width) {
          generateStrip();
          return;
        }
        const a = document.createElement("a");
        a.download = "blushbooth_bestie_" + Date.now() + ".png";
        a.href = c.toDataURL("image/png");
        a.click();
      }
    </script>