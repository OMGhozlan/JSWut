var daumlogin = {}; (function() {
    function i(c) {
        var p = function(m) {
            var x = function(G, r, F, q, s, E) {
                while (--E >= 0) {
                    var t = r * this[G++] + F[q] + s;
                    s = Math.floor(t / 67108864);
                    F[q++] = t & 67108863
                }
                return s
            };
            var n = function(t, M, K, H, q, L) {
                var r = M & 32767,
                N = M >> 15;
                while (--L >= 0) {
                    var I = this[t] & 32767;
                    var s = this[t++] >> 15;
                    var J = N * I + s * r;
                    I = r * I + ((J & 32767) << 15) + K[H] + (q & 1073741823);
                    q = (I >>> 30) + (J >>> 15) + N * s + (q >>> 30);
                    K[H++] = I & 1073741823
                }
                return q
            };
            var u = function(t, M, K, H, q, L) {
                var r = M & 16383,
                N = M >> 14;
                while (--L >= 0) {
                    var I = this[t] & 16383;
                    var s = this[t++] >> 14;
                    var J = N * I + s * r;
                    I = r * I + ((J & 16383) << 14) + K[H] + q;
                    q = (I >> 28) + (J >> 14) + N * s;
                    K[H++] = I & 268435455
                }
                return q
            };
            var v = 244837814094590;
            var w = ((v & 16777215) == 15715070);
            if (true) {
                m.prototype.am = n;
                m.dbits = 30;
                m.log("AM_INIT MODIFICATION SUCCEEDED.")
            } else {
                if (w && (navigator.appName == "Microsoft Internet Explorer")) {
                    m.prototype.am = n;
                    m.dbits = 30
                } else {
                    if (w && (navigator.appName != "Netscape")) {
                        m.prototype.am = x;
                        m.dbits = 26
                    } else {
                        m.prototype.am = u;
                        m.dbits = 28
                    }
                }
            }
            m.BI_FP = 52;
            m.DB = m.dbits;
            m.DM = (1 << m.DB) - 1;
            m.DV = (1 << m.DB);
            m.FV = Math.pow(2, m.BI_FP);
            m.F1 = m.BI_FP - m.DB;
            m.F2 = 2 * m.DB - m.BI_FP
        };
        var e = function(m) {
            this.m = m;
            this.convert = function(n) {
                if (n.s < 0 || n.compareTo(this.m) >= 0) {
                    return n.mod(this.m)
                } else {
                    return n
                }
            }
        };
        e.prototype.revert = function(m) {
            return m
        };
        e.prototype.reduce = function(m) {
            m.divRemTo(this.m, null, m)
        };
        e.prototype.mulTo = function(r, m, n) {
            r.multiplyTo(m, n);
            this.reduce(n)
        };
        e.prototype.sqrTo = function(n, m) {
            n.squareTo(m);
            this.reduce(m)
        };
        e.prototype.toString = function() {
            return "Classic()"
        };
        var d = function(m) {
            this.m = m;
            this.mp = m.invDigit();
            this.mpl = this.mp & 32767;
            this.mph = this.mp >> 15;
            this.um = (1 << (a.DB - 15)) - 1;
            this.mt2 = 2 * m.t
        };
        d.prototype.convert = function(n) {
            var m = new a();
            n.abs().dlShiftTo(this.m.t, m);
            m.divRemTo(this.m, null, m);
            if (n.s < 0 && m.compareTo(a.ZERO) > 0) {
                this.m.subTo(m, m)
            }
            return m
        };
        d.prototype.revert = function(n) {
            var m = new a();
            n.copyTo(m);
            this.reduce(m);
            return m
        };
        d.prototype.reduce = function(t) {
            while (t.t <= this.mt2) {
                t[t.t++] = 0
            }
            for (var n = 0; n < this.m.t; ++n) {
                var s = t[n] & 32767;
                var m = (s * this.mpl + (((s * this.mph + (t[n] >> 15) * this.mpl) & this.um) << 15)) & a.DM;
                s = n + this.m.t;
                t[s] += this.m.am(0, m, t, n, 0, this.m.t);
                while (t[s] >= a.DV) {
                    t[s] -= a.DV;
                    s++;
                    t[s]++
                }
            }
            t.clamp();
            t.drShiftTo(this.m.t, t);
            if (t.compareTo(this.m) >= 0) {
                t.subTo(this.m, t)
            }
        };
        d.prototype.sqrTo = function(n, m) {
            n.squareTo(m);
            this.reduce(m)
        };
        d.prototype.mulTo = function(r, m, n) {
            r.multiplyTo(m, n);
            this.reduce(n)
        };
        d.prototype.toString = function() {
            return "Montgomery()"
        };
        var a = function() {
            if (arguments.length == 0) {} else {
                if (arguments.length == 1) {
                    var m = arguments[0];
                    var v = typeof m;
                    if ("number" == v) {
                        if (( - 1 * a.DV <= m) && (m < a.DV)) {
                            this.fromInt(m)
                        } else {
                            this.fromString(m.toString(16), 16)
                        }
                    } else {
                        if ("string" == v) {
                            this.fromString(m, 10)
                        } else {
                            this.fromByteArray(m)
                        }
                    }
                } else {
                    if (arguments.length == 2) {
                        var m = arguments[0];
                        var v = typeof m;
                        var n = arguments[1];
                        var w = typeof n;
                        if ("number" == v) {
                            this.fromNumber2(m, n)
                        } else {
                            if ("string" == v) {
                                this.fromString(m, n)
                            } else {
                                throw "parameter(1) must be either a number or a string. " + v
                            }
                        }
                    } else {
                        if (arguments.length == 3) {
                            var m = arguments[0];
                            var v = typeof m;
                            var n = arguments[1];
                            var w = typeof n;
                            var u = arguments[2];
                            var x = typeof u;
                            if ("number" == v) {
                                this.fromNumber1(m, n, u)
                            } else {
                                throw "parameter(1) must be a number. " + v
                            }
                        }
                    }
                }
            }
        };
        a.prototype.className = "BigInteger";
        var o = new Array();
        var b = function() {
            var n, m;
            n = "0".charCodeAt(0);
            for (m = 0; m <= 9; ++m) {
                o[n++] = m
            }
            n = "a".charCodeAt(0);
            for (m = 10; m < 36; ++m) {
                o[n++] = m
            }
            n = "A".charCodeAt(0);
            for (m = 10; m < 36; ++m) {
                o[n++] = m
            }
        };
        b();
        a.intAt = function(n, r) {
            var m = o[n.charCodeAt(r)];
            return (m == null) ? -1 : m
        };
        var f = "0123456789abcdefghijklmnopqrstuvwxyz";
        a.int2char = function(m) {
            return f.charAt(m)
        };
        a.nbits = function(r) {
            var m = 1,
            n;
            if ((n = r >>> 16) != 0) {
                r = n;
                m += 16
            }
            if ((n = r >> 8) != 0) {
                r = n;
                m += 8
            }
            if ((n = r >> 4) != 0) {
                r = n;
                m += 4
            }
            if ((n = r >> 2) != 0) {
                r = n;
                m += 2
            }
            if ((n = r >> 1) != 0) {
                r = n;
                m += 1
            }
            return m
        };
        a.prototype.copyTo = function(m) {
            for (var n = this.t - 1; n >= 0; --n) {
                m[n] = this[n]
            }
            m.t = this.t;
            m.s = this.s
        };
        a.prototype.fromInt = function(m) {
            this.t = 1;
            this.s = (m < 0) ? -1 : 0;
            if (m > 0) {
                this[0] = m
            } else {
                if (m < -1) {
                    this[0] = m + a.DV
                } else {
                    this.t = 0
                }
            }
        };
        a.prototype.fromString = function(m, y) {
            var w;
            if (y <= 0) {
                throw "bitLength must be larger than 0"
            } else {
                if (y == 2) {
                    w = 1
                } else {
                    if (y == 4) {
                        w = 2
                    } else {
                        if (y == 8) {
                            w = 3
                        } else {
                            if (y == 16) {
                                w = 4
                            } else {
                                if (y == 32) {
                                    w = 5
                                } else {
                                    if (y == 256) {
                                        w = 8
                                    } else {
                                        this.fromRadix(m, y);
                                        return
                                    }
                                }
                            }
                        }
                    }
                }
            }
            this.t = 0;
            this.s = 0;
            var n = m.length;
            var x = false;
            var s = 0;
            while (--n >= 0) {
                var z = (w == 8) ? m[n] & 255 : a.intAt(m, n);
                if (z < 0) {
                    if (m.charAt(n) == "-") {
                        x = true
                    }
                    continue
                }
                x = false;
                if (s == 0) {
                    this[this.t++] = z
                } else {
                    if (s + w > a.DB) {
                        this[this.t - 1] |= (z & ((1 << (a.DB - s)) - 1)) << s;
                        this[this.t] = (z >> (a.DB - s));
                        this.t++
                    } else {
                        this[this.t - 1] |= z << s
                    }
                }
                s += w;
                if (s >= a.DB) {
                    s -= a.DB
                }
            }
            if (w == 8 && (m[0] & 128) != 0) {
                this.s = -1;
                if (s > 0) {
                    this[this.t - 1] |= ((1 << (a.DB - s)) - 1) << s
                }
            }
            this.clamp();
            if (x) {
                a.ZERO.subTo(this, this)
            }
        };
        a.prototype.fromByteArray = function(m) {
            return this.fromString(m, 256)
        };
        a.prototype.clamp = function() {
            var m = this.s & a.DM;
            while (this.t > 0 && this[this.t - 1] == m) {--this.t
            }
        };
        a.prototype.toString = function(B) {
            if (this.s < 0) {
                return "-" + this.negate().toString(B)
            }
            var A;
            if (B == 16) {
                A = 4
            } else {
                return this.toRadix(B)
            }
            var y = (1 << A) - 1,
            m,
            C = false,
            r = "",
            z = this.t;
            var n = a.DB - (z * a.DB) % A;
            if (z-->0) {
                if (n < a.DB && (m = this[z] >> n) > 0) {
                    C = true;
                    r = a.int2char(m)
                }
                while (z >= 0) {
                    if (n < A) {
                        m = (this[z] & ((1 << n) - 1)) << (A - n);
                        m |= this[--z] >> (n += a.DB - A)
                    } else {
                        m = (this[z] >> (n -= A)) & y;
                        if (n <= 0) {
                            n += a.DB; --z
                        }
                    }
                    if (m > 0) {
                        C = true
                    }
                    if (C) {
                        r += a.int2char(m)
                    }
                }
            }
            return C ? r: "0"
        };
        a.prototype.negate = function() {
            var m = new a();
            a.ZERO.subTo(this, m);
            return m
        };
        a.prototype.abs = function() {
            return (this.s < 0) ? this.negate() : this
        };
        a.prototype.compareTo = function(r) {
            var m = this.s - r.s;
            if (m != 0) {
                return m
            }
            var n = this.t;
            m = n - r.t;
            if (m != 0) {
                return m
            }
            while (--n >= 0) {
                if ((m = this[n] - r[n]) != 0) {
                    return m
                }
            }
            return 0
        };
        a.prototype.bitLength = function() {
            if (this.t <= 0) {
                return 0
            }
            return a.DB * (this.t - 1) + a.nbits(this[this.t - 1] ^ (this.s & a.DM))
        };
        a.prototype.dlShiftTo = function(m, n) {
            var r;
            for (r = this.t - 1; r >= 0; --r) {
                n[r + m] = this[r]
            }
            for (r = m - 1; r >= 0; --r) {
                n[r] = 0
            }
            n.t = this.t + m;
            n.s = this.s
        };
        a.prototype.drShiftTo = function(m, n) {
            for (var r = m; r < this.t; ++r) {
                n[r - m] = this[r]
            }
            n.t = Math.max(this.t - m, 0);
            n.s = this.s
        };
        a.prototype.lShiftTo = function(m, y) {
            var A = m % a.DB;
            var B = a.DB - A;
            var r = (1 << B) - 1;
            var x = Math.floor(m / a.DB),
            n = (this.s << A) & a.DM,
            z;
            for (z = this.t - 1; z >= 0; --z) {
                y[z + x + 1] = (this[z] >> B) | n;
                n = (this[z] & r) << A
            }
            for (z = x - 1; z >= 0; --z) {
                y[z] = 0
            }
            y[x] = n;
            y.t = this.t + x + 1;
            y.s = this.s;
            y.clamp()
        };
        a.prototype.rShiftTo = function(m, w) {
            w.s = this.s;
            var r = Math.floor(m / a.DB);
            if (r >= this.t) {
                w.t = 0;
                return
            }
            var y = m % a.DB;
            var z = a.DB - y;
            var n = (1 << y) - 1;
            w[0] = this[r] >> y;
            for (var x = r + 1; x < this.t; ++x) {
                w[x - r - 1] |= (this[x] & n) << z;
                w[x - r] = this[x] >> y
            }
            if (y > 0) {
                w[this.t - r - 1] |= (this.s & n) << z
            }
            w.t = this.t - r;
            w.clamp()
        };
        a.prototype.subTo = function(u, n) {
            var r = 0,
            m = 0,
            v = Math.min(u.t, this.t);
            while (r < v) {
                m += this[r] - u[r];
                n[r++] = m & a.DM;
                m >>= a.DB
            }
            if (u.t < this.t) {
                m -= u.s;
                while (r < this.t) {
                    m += this[r];
                    n[r++] = m & a.DM;
                    m >>= a.DB
                }
                m += this.s
            } else {
                m += this.s;
                while (r < u.t) {
                    m -= u[r];
                    n[r++] = m & a.DM;
                    m >>= a.DB
                }
                m -= u.s
            }
            n.s = (m < 0) ? -1 : 0;
            if (m < -1) {
                n[r++] = a.DV + m
            } else {
                if (m > 0) {
                    n[r++] = m
                }
            }
            n.t = r;
            n.clamp()
        };
        a.prototype.multiplyTo = function(u, n) {
            var v = this.abs(),
            m = u.abs();
            var r = v.t;
            n.t = r + m.t;
            while (--r >= 0) {
                n[r] = 0
            }
            for (r = 0; r < m.t; ++r) {
                n[r + v.t] = v.am(0, m[r], n, r, 0, v.t)
            }
            n.s = 0;
            n.clamp();
            if (this.s != u.s) {
                a.ZERO.subTo(n, n)
            }
        };
        a.prototype.squareTo = function(n) {
            var t = this.abs();
            var r = n.t = 2 * t.t;
            while (--r >= 0) {
                n[r] = 0
            }
            for (r = 0; r < t.t - 1; ++r) {
                var m = t.am(r, t[r], n, 2 * r, 0, 1);
                if ((n[r + t.t] += t.am(r + 1, 2 * t[r], n, 2 * r + 1, m, t.t - r - 1)) >= a.DV) {
                    n[r + t.t] -= a.DV;
                    n[r + t.t + 1] = 1
                }
            }
            if (n.t > 0) {
                n[n.t - 1] += t.am(r, t[r], n, 2 * r, 0, 1)
            }
            n.s = 0;
            n.clamp()
        };
        a.prototype.divRemTo = function(U, t, L) {
            var y = U.abs();
            if (y.t <= 0) {
                return
            }
            var n = this.abs();
            if (n.t < y.t) {
                if (t != null) {
                    t.fromInt(0)
                }
                if (L != null) {
                    this.copyTo(L)
                }
                return
            }
            if (L == null) {
                L = new a()
            }
            var P = new a(),
            X = this.s,
            V = U.s;
            var N = a.DB - a.nbits(y[y.t - 1]);
            if (N > 0) {
                y.lShiftTo(N, P);
                n.lShiftTo(N, L)
            } else {
                y.copyTo(P);
                n.copyTo(L)
            }
            var S = P.t;
            var W = P[S - 1];
            if (W == 0) {
                return
            }
            var T = W * (1 << a.F1) + ((S > 1) ? P[S - 2] >> a.F2: 0);
            var m = a.FV / T,
            q = (1 << a.F1) / T,
            r = 1 << a.F2;
            var O = L.t,
            Q = O - S,
            M = (t == null) ? new a() : t;
            P.dlShiftTo(Q, M);
            if (L.compareTo(M) >= 0) {
                L[L.t++] = 1;
                L.subTo(M, L)
            }
            a.ONE.dlShiftTo(S, M);
            M.subTo(P, P);
            while (P.t < S) {
                P[P.t++] = 0
            }
            while (--Q >= 0) {
                var R = (L[--O] == W) ? a.DM: Math.floor(L[O] * m + (L[O - 1] + r) * q);
                if ((L[O] += P.am(0, R, L, Q, 0, S)) < R) {
                    P.dlShiftTo(Q, M);
                    L.subTo(M, L);
                    while (L[O] < --R) {
                        L.subTo(M, L)
                    }
                }
            }
            if (t != null) {
                L.drShiftTo(S, t);
                if (X != V) {
                    a.ZERO.subTo(t, t)
                }
            }
            L.t = S;
            L.clamp();
            if (N > 0) {
                L.rShiftTo(N, L)
            }
            if (X < 0) {
                a.ZERO.subTo(L, L)
            }
        };
        a.prototype.mod = function(n) {
            var m = new a();
            this.abs().divRemTo(n, null, m);
            if (this.s < 0 && m.compareTo(a.ZERO) > 0) {
                n.subTo(m, m)
            }
            return m
        };
        a.prototype.invDigit = function() {
            if (this.t < 1) {
                return 0
            }
            var n = this[0];
            if ((n & 1) == 0) {
                return 0
            }
            var m = n & 3;
            m = (m * (2 - (n & 15) * m)) & 15;
            m = (m * (2 - (n & 255) * m)) & 255;
            m = (m * (2 - (((n & 65535) * m) & 65535))) & 65535;
            m = (m * (2 - n * m % a.DV)) % a.DV;
            return (m > 0) ? a.DV - m: -m
        };
        a.prototype.isEven = function() {
            return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
        };
        a.log = function(m) {
            return
        };
        a.err = function(m) {
            trace(m);
            return
        };
        a.ZERO = new a(0);
        a.ONE = new a(1);
        p(a);
        a.Classic = e;
        a.Montgomery = d;
        return a
    }
    function j(c) {
        var a = c;
        a.prototype.chunkSize = function(e) {
            return Math.floor(Math.LN2 * a.DB / Math.log(e))
        };
        a.prototype.fromRadix = function(z, s) {
            this.fromInt(0);
            var v = this.chunkSize(s);
            var u = Math.pow(s, v);
            var w = false;
            var y = 0;
            var e = 0;
            for (var x = 0; x < z.length; ++x) {
                var f = a.intAt(z, x);
                if (f < 0) {
                    if (z.charAt(x) == "-" && this.signum() == 0) {
                        w = true
                    }
                    continue
                }
                e = s * e + f;
                if (++y >= v) {
                    this.dMultiply(u);
                    this.dAddOffset(e, 0);
                    y = 0;
                    e = 0
                }
            }
            if (y > 0) {
                this.dMultiply(Math.pow(s, y));
                this.dAddOffset(e, 0)
            }
            if (w) {
                a.ZERO.subTo(this, this)
            }
        };
        var b = 0;
        a.prototype.fromNumber2 = function(p, e) {
            var o = new Array();
            var f = p & 7;
            o.length = (p >> 3) + 1;
            e.nextBytes(o);
            if (f > 0) {
                o[0] &= ((1 << f) - 1)
            } else {
                o[0] = 0
            }
            this.fromString(o, 256)
        };
        a.prototype.equals = function(e) {
            return (this.compareTo(e) == 0)
        };
        a.prototype.min = function(e) {
            return (this.compareTo(e) < 0) ? this: e
        };
        a.prototype.max = function(e) {
            return (this.compareTo(e) > 0) ? this: e
        };
        a.prototype.bitwiseTo = function(e, m, s) {
            var t, r, f = Math.min(e.t, this.t);
            for (t = 0; t < f; ++t) {
                s[t] = m(this[t], e[t])
            }
            if (e.t < this.t) {
                r = e.s & a.DM;
                for (t = f; t < this.t; ++t) {
                    s[t] = m(this[t], r)
                }
                s.t = this.t
            } else {
                r = this.s & a.DM;
                for (t = f; t < e.t; ++t) {
                    s[t] = m(r, e[t])
                }
                s.t = e.t
            }
            s.s = m(this.s, e.s);
            s.clamp()
        };
        a.op_xor = function(f, e) {
            return f ^ e
        };
        a.prototype.ope_xor = function(f) {
            var e = new a();
            this.bitwiseTo(f, a.op_xor, e);
            return e
        };
        a.prototype.xor = a.prototype.ope_xor;
        a.prototype.addTo = function(e, q) {
            var r = 0,
            m = 0,
            f = Math.min(e.t, this.t);
            while (r < f) {
                m += this[r] + e[r];
                q[r++] = m & a.DM;
                m >>= a.DB
            }
            if (e.t < this.t) {
                m += e.s;
                while (r < this.t) {
                    m += this[r];
                    q[r++] = m & a.DM;
                    m >>= a.DB
                }
                m += this.s
            } else {
                m += this.s;
                while (r < e.t) {
                    m += e[r];
                    q[r++] = m & a.DM;
                    m >>= a.DB
                }
                m += e.s
            }
            q.s = (m < 0) ? -1 : 0;
            if (m > 0) {
                q[r++] = m
            } else {
                if (m < -1) {
                    q[r++] = a.DV + m
                }
            }
            q.t = r;
            q.clamp()
        };
        a.prototype.ope_add = function(f) {
            var e = new a();
            this.addTo(f, e);
            return e
        };
        a.prototype.add = a.prototype.ope_add;
        a.prototype.ope_subtract = function(f) {
            var e = new a();
            this.subTo(f, e);
            return e
        };
        a.prototype.subtract = a.prototype.ope_subtract;
        a.prototype.ope_multiply = function(f) {
            var e = new a();
            this.multiplyTo(f, e);
            return e
        };
        a.prototype.multiply = a.prototype.ope_multiply;
        a.prototype.dMultiply = function(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t); ++this.t;
            this.clamp()
        };
        a.prototype.dAddOffset = function(e, f) {
            while (this.t <= f) {
                this[this.t++] = 0
            }
            this[f] += e;
            while (this[f] >= a.DV) {
                this[f] -= a.DV;
                if (++f >= this.t) {
                    this[this.t++] = 0
                }++this[f]
            }
        };
        var d = function() {
            this.convert = function(e) {
                return e
            };
            this.revert = function(e) {
                return e
            };
            this.mulTo = function(n, e, f) {
                n.multiplyTo(e, f)
            };
            this.sqrTo = function(f, e) {
                f.squareTo(e)
            }
        };
        a.prototype.modPow = function(w, O) {
            var I = w.bitLength(),
            L,
            t = new a(1),
            e;
            if (I <= 0) {
                return t
            } else {
                if (I < 18) {
                    L = 1
                } else {
                    if (I < 48) {
                        L = 3
                    } else {
                        if (I < 144) {
                            L = 4
                        } else {
                            if (I < 768) {
                                L = 5
                            } else {
                                L = 6
                            }
                        }
                    }
                }
            }
            if (I < 8) {
                e = new a.Classic(O)
            } else {
                if (O.isEven()) {
                    e = new a.Barrett(O)
                } else {
                    e = new a.Montgomery(O)
                }
            }
            var H = new Array(),
            m = 3,
            r = L - 1,
            z = (1 << L) - 1;
            H[1] = e.convert(this);
            if (L > 1) {
                var K = new a();
                e.sqrTo(H[1], K);
                while (m <= z) {
                    H[m] = new a();
                    e.mulTo(K, H[m - 2], H[m]);
                    m += 2
                }
            }
            var J = w.t - 1,
            N, f = true,
            n = new a(),
            M;
            I = a.nbits(w[J]) - 1;
            while (J >= 0) {
                if (I >= r) {
                    N = (w[J] >> (I - r)) & z
                } else {
                    N = (w[J] & ((1 << (I + 1)) - 1)) << (r - I);
                    if (J > 0) {
                        N |= w[J - 1] >> (a.DB + I - r)
                    }
                }
                m = L;
                while ((N & 1) == 0) {
                    N >>= 1; --m
                }
                if ((I -= m) < 0) {
                    I += a.DB; --J
                }
                if (f) {
                    H[N].copyTo(t);
                    f = false
                } else {
                    while (m > 1) {
                        e.sqrTo(t, n);
                        e.sqrTo(n, t);
                        m -= 2
                    }
                    if (m > 0) {
                        e.sqrTo(t, n)
                    } else {
                        M = t;
                        t = n;
                        n = M
                    }
                    e.mulTo(n, H[N], t)
                }
                while (J >= 0 && (w[J] & (1 << I)) == 0) {
                    e.sqrTo(t, n);
                    M = t;
                    t = n;
                    n = M;
                    if (--I < 0) {
                        I = a.DB - 1; --J
                    }
                }
            }
            return e.revert(t)
        };
        a.NullExp = d
    }
    function l(b) {
        function y(o, p, n, m) {
            this.variant = o;
            this.shaFunc = p;
            this.inputFunc = n;
            this.outputFunc = m
        }
        function e(m) {
            return m
        }
        function z(o) {
            var m = o.length << 2;
            var q = new Array(m);
            for (var n = 0,
            p = 0; n < o.length && p < q.length;) {
                q[p++] = 255 & (o[n] >> 24);
                q[p++] = 255 & (o[n] >> 16);
                q[p++] = 255 & (o[n] >> 8);
                q[p++] = 255 & (o[n] >> 0);
                n++
            }
            return q
        }
        function x(q) {
            var m = (q.length + 3) >> 2;
            var o = new Array(m);
            for (var n = 0,
            p = 0; n < o.length && p < q.length;) {
                o[n++] = (p < q.length ? (q[p++] << 24) : 0) | (p < q.length ? (q[p++] << 16) : 0) | (p < q.length ? (q[p++] << 8) : 0) | (p < q.length ? (q[p++]) : 0)
            }
            return o
        }
        function A(m) {
            return b.str2utf8(m)
        }
        function v(m) {
            return base16_decode(m)
        }
        function u(m) {
            return base64_encode(m)
        }
        var w = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        function B(n, o) {
            var p = "";
            for (var r = 0; r < n.length; r++) {
                var q = n[r];
                for (var m = 28; 0 <= m; m -= 4) {
                    p += o[(15 & (q >> m))]
                }
            }
            return p
        }
        function c(m) {
            return B(m, a)
        }
        function d(n, p, q) {
            var m = null;
            var r = null;
            if (p == null) {
                m = e
            } else {
                if (typeof(p) == "function") {
                    m = p
                } else {
                    switch (p) {
                    case "BIN":
                    case "binary":
                        m = e;
                        break;
                    case "STR":
                    case "STR(UTF8)":
                    case "string":
                        m = A;
                        break;
                    case "HEX":
                    case "hex":
                        m = v;
                        break;
                    case "B64":
                    case "base64":
                        m = u;
                        break;
                    default:
                        throw "INPUT FORMAT NOT RECOGNIZED"
                    }
                }
            }
            if (q == null) {
                r = z
            } else {
                if (typeof(q) == "function") {
                    r = q
                } else {
                    switch (q) {
                    case "binary":
                    case "BIN":
                        r = z;
                        break;
                    case "STR":
                    case "STR(UTF8)":
                    case "string":
                        m = ia2str;
                    case "HEX":
                        r = ia2hex_upper;
                        break;
                    case "hex":
                        r = c;
                        break;
                    case "B64":
                    case "base64":
                        r = ia2b64;
                        break;
                    default:
                        throw "OUTPUT FORMAT NOT RECOGNIZED"
                    }
                }
            }
            var o = null;
            switch (n) {
            case "SHA-1":
                o = b.sha.core.coreSHA1;
                break;
            case "SHA-224":
                o = b.sha.core.coreSHA2;
                break;
            case "SHA-256":
                o = b.sha.core.coreSHA2;
                break;
            case "SHA-384":
                o = b.sha.core.coreSHA2;
                break;
            case "SHA-512":
                o = b.sha.core.coreSHA2;
                break;
            default:
                throw "HASH NOT RECOGNIZED"
            }
            return new y(n, o, m, r)
        }
        function f(n) {
            var p = this.inputFunc(n);
            var q = p.length * 8;
            var m = x(p);
            var o = this.outputFunc(this.shaFunc(m, q, this.variant));
            return o
        }
        y.prototype.hash = f;
        y.create = d;
        return y
    }
    function g(c) {
        var f = function() {
            this.i = 0;
            this.j = 0;
            this.S = new Array()
        };
        f.prototype.init = function(m) {
            var r, t, s;
            for (r = 0; r < 256; ++r) {
                this.S[r] = r
            }
            t = 0;
            for (r = 0; r < 256; ++r) {
                t = (t + this.S[r] + m[r % m.length]) & 255;
                s = this.S[r];
                this.S[r] = this.S[t];
                this.S[t] = s
            }
            this.i = 0;
            this.j = 0
        };
        f.prototype.next = function() {
            var m;
            this.i = (this.i + 1) & 255;
            this.j = (this.j + this.S[this.i]) & 255;
            m = this.S[this.i];
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = m;
            return this.S[(m + this.S[this.i]) & 255]
        };
        f.create = function() {
            return new f()
        };
        f.rng_psize = 256;
        var a = null;
        var d = [];
        var e = 0;
        rng_seed_int = function(m) {
            d[e] ^= m & 255;
            e++;
            d[e] ^= (m >> 8) & 255;
            e++;
            d[e] ^= (m >> 16) & 255;
            e++;
            d[e] ^= (m >> 24) & 255;
            e++;
            if (e >= f.rng_psize) {
                e -= f.rng_psize
            }
        };
        rng_seed_time = function() {
            rng_seed_int(new Date().getTime())
        };
        pool_init = function() {
            var m;
            while (e < f.rng_psize) {
                m = Math.floor(65536 * Math.random());
                d[e++] = m >>> 8;
                d[e++] = m & 255
            }
            e = 0;
            rng_seed_time()
        };
        var b = function() {
            if (a == null) {
                rng_seed_time();
                a = f.create();
                a.init(d);
                for (e = 0; e < d.length; ++e) {
                    d[e] = 0
                }
                e = 0
            }
            return a.next()
        };
        var n = function() {};
        n.prototype.nextBytes = function(m) {
            for (var p = 0; p < m.length; ++p) {
                m[p] = b()
            }
        };
        pool_init();
        return n
    }
    function h(f) {
        var s = {};
        s.core = {};
        function c(n, m) {
            if (m < 32) {
                return (n >>> m) | (n << (32 - m))
            } else {
                return n
            }
        }
        function v(n, m) {
            if (m < 32) {
                return n >>> m
            } else {
                return 0
            }
        }
        function a(o, m, n) {
            return (o & m) ^ (~o & n)
        }
        function x(o, m, n) {
            return (o & m) ^ (o & n) ^ (m & n)
        }
        function b(m) {
            return c(m, 2) ^ c(m, 13) ^ c(m, 22)
        }
        function e(m) {
            return c(m, 6) ^ c(m, 11) ^ c(m, 25)
        }
        function u(m) {
            return c(m, 7) ^ c(m, 18) ^ v(m, 3)
        }
        function w(m) {
            return c(m, 17) ^ c(m, 19) ^ v(m, 10)
        }
        function t(p, m) {
            var n = (p & 65535) + (m & 65535);
            var o = (p >>> 16) + (m >>> 16) + (n >>> 16);
            return ((o & 65535) << 16) | (n & 65535)
        }
        function d(ag, aq, al) {
            var ap = [];
            var n, o, p, q, r, H, K, ab;
            var af, ao;
            var aw;
            var ae, W, an, ai;
            var ac, ax, m, ak, at, av, ar, aj;
            var ah;
            if (al === "SHA-224" || al === "SHA-256") {
                ae = 64;
                W = ((aq + 1 + 64 >> 9) << 4) + 15;
                an = 16;
                ai = 1;
                aj = Number;
                ac = t;
                ax = u;
                m = w;
                ak = b;
                at = e;
                ar = x;
                av = a;
                ah = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                if (al === "SHA-224") {
                    aw = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
                } else {
                    aw = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]
                }
            } else {
                if (al === "SHA-384" || al === "SHA-512") {
                    ae = 80;
                    W = ((aq + 1 + 128 >> 10) << 5) + 31;
                    an = 32;
                    ai = 2;
                    aj = Int_64;
                    ax = gamma0_64;
                    m = gamma1_64;
                    ak = sigma0_64;
                    at = sigma1_64;
                    ar = maj_64;
                    av = ch_64;
                    ah = [new Int_64(1116352408, 3609767458), new Int_64(1899447441, 602891725), new Int_64(3049323471, 3964484399), new Int_64(3921009573, 2173295548), new Int_64(961987163, 4081628472), new Int_64(1508970993, 3053834265), new Int_64(2453635748, 2937671579), new Int_64(2870763221, 3664609560), new Int_64(3624381080, 2734883394), new Int_64(310598401, 1164996542), new Int_64(607225278, 1323610764), new Int_64(1426881987, 3590304994), new Int_64(1925078388, 4068182383), new Int_64(2162078206, 991336113), new Int_64(2614888103, 633803317), new Int_64(3248222580, 3479774868), new Int_64(3835390401, 2666613458), new Int_64(4022224774, 944711139), new Int_64(264347078, 2341262773), new Int_64(604807628, 2007800933), new Int_64(770255983, 1495990901), new Int_64(1249150122, 1856431235), new Int_64(1555081692, 3175218132), new Int_64(1996064986, 2198950837), new Int_64(2554220882, 3999719339), new Int_64(2821834349, 766784016), new Int_64(2952996808, 2566594879), new Int_64(3210313671, 3203337956), new Int_64(3336571891, 1034457026), new Int_64(3584528711, 2466948901), new Int_64(113926993, 3758326383), new Int_64(338241895, 168717936), new Int_64(666307205, 1188179964), new Int_64(773529912, 1546045734), new Int_64(1294757372, 1522805485), new Int_64(1396182291, 2643833823), new Int_64(1695183700, 2343527390), new Int_64(1986661051, 1014477480), new Int_64(2177026350, 1206759142), new Int_64(2456956037, 344077627), new Int_64(2730485921, 1290863460), new Int_64(2820302411, 3158454273), new Int_64(3259730800, 3505952657), new Int_64(3345764771, 106217008), new Int_64(3516065817, 3606008344), new Int_64(3600352804, 1432725776), new Int_64(4094571909, 1467031594), new Int_64(275423344, 851169720), new Int_64(430227734, 3100823752), new Int_64(506948616, 1363258195), new Int_64(659060556, 3750685593), new Int_64(883997877, 3785050280), new Int_64(958139571, 3318307427), new Int_64(1322822218, 3812723403), new Int_64(1537002063, 2003034995), new Int_64(1747873779, 3602036899), new Int_64(1955562222, 1575990012), new Int_64(2024104815, 1125592928), new Int_64(2227730452, 2716904306), new Int_64(2361852424, 442776044), new Int_64(2428436474, 593698344), new Int_64(2756734187, 3733110249), new Int_64(3204031479, 2999351573), new Int_64(3329325298, 3815920427), new Int_64(3391569614, 3928383900), new Int_64(3515267271, 566280711), new Int_64(3940187606, 3454069534), new Int_64(4118630271, 4000239992), new Int_64(116418474, 1914138554), new Int_64(174292421, 2731055270), new Int_64(289380356, 3203993006), new Int_64(460393269, 320620315), new Int_64(685471733, 587496836), new Int_64(852142971, 1086792851), new Int_64(1017036298, 365543100), new Int_64(1126000580, 2618297676), new Int_64(1288033470, 3409855158), new Int_64(1501505948, 4234509866), new Int_64(1607167915, 987167468), new Int_64(1816402316, 1246189591)];
                    if (al === "SHA-384") {
                        aw = [new Int_64(3418070365, 3238371032), new Int_64(1654270250, 914150663), new Int_64(2438529370, 812702999), new Int_64(355462360, 4144912697), new Int_64(1731405415, 4290775857), new Int_64(41048885895, 1750603025), new Int_64(3675008525, 1694076839), new Int_64(1203062813, 3204075428)]
                    } else {
                        aw = [new Int_64(1779033703, 4089235720), new Int_64(3144134277, 2227873595), new Int_64(1013904242, 4271175723), new Int_64(2773480762, 1595750129), new Int_64(1359893119, 2917565137), new Int_64(2600822924, 725511199), new Int_64(528734635, 4215389547), new Int_64(1541459225, 327033209)]
                    }
                }
            }
            ag[aq >> 5] |= 128 << (24 - aq % 32);
            ag[W] = aq;
            var am = ag.length;
            for (var ad = 0; ad < am; ad += an) {
                n = aw[0];
                o = aw[1];
                p = aw[2];
                q = aw[3];
                r = aw[4];
                H = aw[5];
                K = aw[6];
                ab = aw[7];
                for (var au = 0; au < ae; au++) {
                    if (au < 16) {
                        ap[au] = new aj(ag[au * ai + ad], ag[au * ai + ad + 1])
                    } else {
                        ap[au] = ac(ac(ac(m(ap[au - 2]), ap[au - 7]), ax(ap[au - 15])), ap[au - 16])
                    }
                    af = ac(ac(ac(ac(ab, at(r)), av(r, H, K)), ah[au]), ap[au]);
                    ao = ac(ak(n), ar(n, o, p));
                    ab = K;
                    K = H;
                    H = r;
                    r = ac(q, af);
                    q = p;
                    p = o;
                    o = n;
                    n = ac(af, ao)
                }
                aw[0] = ac(n, aw[0]);
                aw[1] = ac(o, aw[1]);
                aw[2] = ac(p, aw[2]);
                aw[3] = ac(q, aw[3]);
                aw[4] = ac(r, aw[4]);
                aw[5] = ac(H, aw[5]);
                aw[6] = ac(K, aw[6]);
                aw[7] = ac(ab, aw[7])
            }
            switch (al) {
            case "SHA-224":
                return [aw[0], aw[1], aw[2], aw[3], aw[4], aw[5], aw[6]];
            case "SHA-256":
                return aw;
            case "SHA-384":
                return [aw[0].highOrder, aw[0].lowOrder, aw[1].highOrder, aw[1].lowOrder, aw[2].highOrder, aw[2].lowOrder, aw[3].highOrder, aw[3].lowOrder, aw[4].highOrder, aw[4].lowOrder, aw[5].highOrder, aw[5].lowOrder];
            case "SHA-512":
                return [aw[0].highOrder, aw[0].lowOrder, aw[1].highOrder, aw[1].lowOrder, aw[2].highOrder, aw[2].lowOrder, aw[3].highOrder, aw[3].lowOrder, aw[4].highOrder, aw[4].lowOrder, aw[5].highOrder, aw[5].lowOrder, aw[6].highOrder, aw[6].lowOrder, aw[7].highOrder, aw[7].lowOrder];
            default:
                return []
            }
        }
        s.core.coreSHA2 = d;
        return s
    }
    function k(a) {
        function b(q) {
            var e = [];
            var c = q.length;
            var f = 0;
            for (var d = 0; d < c; d++) {
                var p = q.charCodeAt(d);
                if (p <= 127) {
                    e[f++] = p
                } else {
                    if (p <= 2047) {
                        e[f++] = B11000000 | (B00011111 & (p >>> 6));
                        e[f++] = B10000000 | (B00111111 & (p >>> 0))
                    } else {
                        if (p <= 65535) {
                            e[f++] = B11100000 | (B00001111 & (p >>> 12));
                            e[f++] = B10000000 | (B00111111 & (p >>> 6));
                            e[f++] = B10000000 | (B00111111 & (p >>> 0))
                        } else {
                            if (p <= 1114111) {
                                e[f++] = B11110000 | (B00000111 & (p >>> 18));
                                e[f++] = B10000000 | (B00111111 & (p >>> 12));
                                e[f++] = B10000000 | (B00111111 & (p >>> 6));
                                e[f++] = B10000000 | (B00111111 & (p >>> 0))
                            } else {
                                throw "error"
                            }
                        }
                    }
                }
            }
            return e
        }
        a.str2utf8 = b
    }
    daumlogin.crypto = {};
    daumlogin.crypto.BigInteger = i(daumlogin.crypto);
    j(daumlogin.crypto.BigInteger);
    k(daumlogin.crypto);
    daumlogin.crypto.sha = h(daumlogin.crypto);
    daumlogin.crypto.SHA = l(daumlogin.crypto);
    daumlogin.crypto.SecureRandom = g(daumlogin.crypto)
})();

function get_srpla(){	
	var w = daumlogin.crypto.BigInteger,
    b = daumlogin.crypto.SHA,
    C = daumlogin.crypto.SecureRandom,
    B = b.create("SHA-256", "string", "hex");	
	var j = new w("115b8b692e0e045692cf280b436735c77a5a9e8a9e7ed56c965f87db5b2a2ece3", 16),
		  x = new w("2"),
			a = new C(); 			
	var E = new w(16, a),
	    g = x.modPow(E, j);
  return g.toString(16) + '|' + E.toString(16);
}


function get_key(id, pw, srpss, srplb, H, O) {	
	var w = daumlogin.crypto.BigInteger,
    b = daumlogin.crypto.SHA,
    C = daumlogin.crypto.SecureRandom,
    B = b.create("SHA-256", "string", "hex");	
	var j = new w("115b8b692e0e045692cf280b436735c77a5a9e8a9e7ed56c965f87db5b2a2ece3", 16),
		  x = new w("2"),
			a = new C();   
    var P, J; 
    //BigInteger
    H = new w(H, 16);
		O = new w(O, 16);
		while (pw.indexOf("a??") > -1) {
		    pw = pw.replace("a??", escape("a??"))
		}
    function n() {
        var E = "";
        for (var g = 0; g < arguments.length; g++) {
            if (arguments[g] instanceof w) {
                E += arguments[g].toString(16)
            } else {
                E += arguments[g]
            }
        }
        return new w(B.hash(E), 16);
    }
    var S = new w(srpss, 16),
    F = new w(srplb, 16),
    I = n(j, x),
    Q = n(H, F),
    N = n(S, pw),
    g = I.multiply(x.modPow(N, j)),
    K = F.subtract(g),
    E = Q.multiply(N),
    M,
    R;
    M = K.modPow(O.add(E), j);
    R = n(M);
    var L = id;    
    P = n(n(j).xor(n(x)), n(L), S, H, F, R).toString(16);
    return P;
}