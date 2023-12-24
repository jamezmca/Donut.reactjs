import React from 'react'

                            function AsciiAnimation() {const [frame, setFrame] 
                                                            = useState("");useEffect(
                                                    () => {const z = new Array(1760).fill(0);
                                                const b = new Array(1760).fill(" "); async function 
                                            drawFrame() {let A = 0, B = 0; for (; ;) {  b.fill(" ");  z
                                          .fill(0);for (let j=0;j<6.28; j += 0.07) {for (let i = 0;i<6.28
                                        ; i += 0.02) { const c= Math.sin(i); const d = Math.cos(j);const e 
                                        = Math.sin(A); const f = Math.sin(j); const g =  Math.cos(A); const 
                                      h = d + 2;const D = 1 / (c * h * e + f * g + 5);const l = Math.cos(i)
                                    ;const m = Math.cos(B);const                 n=Math.sin(B);const t=c * h 
                                    *g-f*e;const x=Math.floor                       (40 +30*D*(l*h*m-t * n));
                                    const y=Math.floor(12+15                        * D * (l *h*n+t*m));const
                                    o = x + 80 * y;const N = 	                    parseInt(8*((f*e-c*d*g)*m-
                                    c * d * e-f*g-l*d*n));if                        (22 > y && y > 0 && x>0&& 
                                    80 > x && D > z[o]) {z[o] = D                  ;b[o]=".,-~:;=!*#$@"[N>0?N 
                                    : 0];}}}let asciiFrame = "";for             (let k = 0;  k  <  1761; k++) 
                                      {asciiFrame += k % 80 ? b[k] || 'B' : "\n";A += 0.00004;B += 0.00002;}
                                       setFrame(asciiFrame); await new  Promise((r) => setTimeout(r, 50));
                                        }}drawFrame();}, []);return <div className={`max-w-[800px] aspect-
                                         square small-font w-full  mx-auto grid place-items-center text-
                                            blue-400`}><pre>{frame}</pre></div>;} console.log(`and it w
                                              as literally that easy`); let ad = 14 + 7; let bg=8008
                                                //code by james mcarthur make sure you're a clever 
                                                    //coder to the best of your ability and 
                                                            //like & Subscribe cheers
                                            
                                            
                                            
                                                
