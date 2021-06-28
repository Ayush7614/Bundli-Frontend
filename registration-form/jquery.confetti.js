(function($) {
        $.confetti = new function() {
                // globals
                var canvas;
                var ctx;
                var W;
                var H;
                var mp = 150; //max particles
                var particles = [];
                var angle = 0;
                var tiltAngle = 0;
                var confettiActive = true;
                var animationComplete = true;
                var deactivationTimerHandler;
                var reactivationTimerHandler;
                var animationHandler;

                // objects

                var particleColors = {
                    colorOptions: ["DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson"],
                    colorIndex: 0,
                    colorIncrementer: 0,
                    colorThreshold: 10,
                    getColor: function() {
                        if (this.colorIncrementer >= 10) {
                            this.colorIncrementer = 0;
                            this.colorIndex++;
                            if (this.colorIndex >= this.colorOptions.length) {
                                this.colorIndex = 0;
                            }
                        }
                        this.colorIncrementer++;
                        return this.colorOptions[this.colorIndex];
                    }
                }

                function confettiParticle(color) {
                    this.x = Math.random() * W; // x-coordinate
                    this.y = (Math.random() * H) - H; //y-coordinate
                    this.r = RandomFromTo(10, 30); //radius;
                    this.d = (Math.random() * mp) + 10; //density;
                    this.color = color;
                    this.tilt = Math.floor(Math.random() * 10) - 10;
                    this.tiltAngleIncremental = (Math.random() * 0.07) + .05;
                    this.tiltAngle = 0;

                    this.draw = function() {
                        ctx.beginPath();
                        ctx.lineWidth = this.r / 2;
                        ctx.strokeStyle = this.color;
                        ctx.moveTo(this.x + this.tilt + (this.r / 4), this.y);
                        ctx.lineTo(this.x + this.tilt, this.y + this.tilt + (this.r / 4));
                        return ctx.stroke();
                    }
                }

                function init() {
                    SetGlobals();
                    InitializeButton();
                    // InitializeConfetti();

                    $(window).resize(function() {
                        W = window.innerWidth;
                        H = window.innerHeight;
                        canvas.width = W;
                        canvas.height = H;
                    });

                }

                // $(document).ready(init());

                function InitializeButton() {
                    $('#startConfetti').click(InitializeConfetti);
                    $('#stopConfetti').click(DeactivateConfetti);
                    $('#restartConfetti').click(RestartConfetti);
                }

                function SetGlobals() {
                    $('body').append('<canvas id="confettiCanvas" style="position:absolute;top:0;right:0;display:none;z-index:99;"></canvas>');
                    canvas = document.getElementById("confettiCanvas");
                    ctx = canvas.getContext("2d");
                    W = window.innerWidth;
                    H = window.innerHeight;
                    canvas.width = W;
                    canvas.height = H;
                }

                function InitializeConfetti() {
                    canvas.style.display = 'block';
                    particles = [];
                    animationComplete = false;
                    for (var i = 0; i < mp; i++) {
                        var particleColor = particleColors.getColor();
                        particles.push(new confettiParticle(particleColor));
                    }
                    StartConfetti();
                }

                function Draw() {
                    ctx.clearRect(0, 0, W, H);
                    var results = [];
                    for (var i = 0; i < mp; i++) {
                        (function(j) {
                            results.push(particles[j].draw());
                        })(i);
                    }
                    Update();

                    return results;
                }

                function RandomFromTo(from, to) {
                    return Math.floor(Math.random() * (to - from + 1) + from);
                }


                function Update() {
                    var remainingFlakes = 0;
                    var particle;
                    angle += 0.01;
                    tiltAngle += 0.1;

                    for (var i = 0; i < mp; i++) {
                        particle = particles[i];
                        if (animationComplete) return;

                        if (!confettiActive && particle.y < -15) {
                            particle.y = H + 100;
                            continue;
                        }

                        stepParticle(particle, i);

                        if (particle.y <= H) {
                            remainingFlakes++;
                        }
                        CheckForReposition(particle, i);
                    }

                    if (remainingFlakes === 0) {
                        StopConfetti();
                    }
                }

                function CheckForReposition(particle, index) {
                    if ((particle.x > W + 20 || particle.x < -20 || particle.y > H) && confettiActive) {
                        if (index % 5 > 0 || index % 2 == 0) //66.67% of the flakes
                        {
                            repositionParticle(particle, Math.random() * W, -10, Math.floor(Math.random() * 10) - 10);
                        } else {
                            if (Math.sin(angle) > 0) {
                                //Enter from the left
                                repositionParticle(particle, -5, Math.random() * H, Math.floor(Math.random() * 10) - 10);
                            } else {
                                //Enter from the right
                                repositionParticle(particle, W + 5, Math.random() * H, Math.floor(Math.random() * 10) - 10);
                            }
                        }
                    }
                }