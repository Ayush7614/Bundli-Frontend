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