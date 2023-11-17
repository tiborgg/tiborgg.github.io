var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _root, _hasMagic, _uflag, _parts, _parent, _parentIndex, _negs, _filledNegs, _options, _toString, _emptyExt, _fillNegs, fillNegs_fn, _parseAST, parseAST_fn, _partsToRegExp, partsToRegExp_fn, _parseGlob, parseGlob_fn;
const styles$3 = ":host {\n  font-family: Poppins, sans-serif;\n  background-color: #ECEFF1;\n  color: black;\n  font-size: 16px;\n  padding: 16px;\n  height: 100%;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: [heading] min-content [content] 1fr;\n}\n\n#transcripts {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow-y: auto;\n  min-height: 0;\n  grid-row: content;\n}\n\n.transcript {\n  padding: 8px 16px;\n  background-color: #CFD8DC;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: opacity 0.1s;\n}\n.transcript[aria-current=true] {\n  color: white;\n  background-color: #0288D1;\n}\n.transcript:hover {\n  opacity: 0.75;\n}";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1 = window, e$4 = t$1.ShadowRoot && (void 0 === t$1.ShadyCSS || t$1.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$3 = Symbol(), n$5 = /* @__PURE__ */ new WeakMap();
let o$3 = class o {
  constructor(t2, e2, n2) {
    if (this._$cssResult$ = true, n2 !== s$3)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t2, this.t = e2;
  }
  get styleSheet() {
    let t2 = this.o;
    const s2 = this.t;
    if (e$4 && void 0 === t2) {
      const e2 = void 0 !== s2 && 1 === s2.length;
      e2 && (t2 = n$5.get(s2)), void 0 === t2 && ((this.o = t2 = new CSSStyleSheet()).replaceSync(this.cssText), e2 && n$5.set(s2, t2));
    }
    return t2;
  }
  toString() {
    return this.cssText;
  }
};
const r$2 = (t2) => new o$3("string" == typeof t2 ? t2 : t2 + "", void 0, s$3), S$1 = (s2, n2) => {
  e$4 ? s2.adoptedStyleSheets = n2.map((t2) => t2 instanceof CSSStyleSheet ? t2 : t2.styleSheet) : n2.forEach((e2) => {
    const n3 = document.createElement("style"), o3 = t$1.litNonce;
    void 0 !== o3 && n3.setAttribute("nonce", o3), n3.textContent = e2.cssText, s2.appendChild(n3);
  });
}, c$1 = e$4 ? (t2) => t2 : (t2) => t2 instanceof CSSStyleSheet ? ((t3) => {
  let e2 = "";
  for (const s2 of t3.cssRules)
    e2 += s2.cssText;
  return r$2(e2);
})(t2) : t2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s$2;
const e$3 = window, r$1 = e$3.trustedTypes, h$1 = r$1 ? r$1.emptyScript : "", o$2 = e$3.reactiveElementPolyfillSupport, n$4 = { toAttribute(t2, i2) {
  switch (i2) {
    case Boolean:
      t2 = t2 ? h$1 : null;
      break;
    case Object:
    case Array:
      t2 = null == t2 ? t2 : JSON.stringify(t2);
  }
  return t2;
}, fromAttribute(t2, i2) {
  let s2 = t2;
  switch (i2) {
    case Boolean:
      s2 = null !== t2;
      break;
    case Number:
      s2 = null === t2 ? null : Number(t2);
      break;
    case Object:
    case Array:
      try {
        s2 = JSON.parse(t2);
      } catch (t3) {
        s2 = null;
      }
  }
  return s2;
} }, a$1 = (t2, i2) => i2 !== t2 && (i2 == i2 || t2 == t2), l$2 = { attribute: true, type: String, converter: n$4, reflect: false, hasChanged: a$1 }, d$1 = "finalized";
let u$1 = class u extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$El = null, this._$Eu();
  }
  static addInitializer(t2) {
    var i2;
    this.finalize(), (null !== (i2 = this.h) && void 0 !== i2 ? i2 : this.h = []).push(t2);
  }
  static get observedAttributes() {
    this.finalize();
    const t2 = [];
    return this.elementProperties.forEach((i2, s2) => {
      const e2 = this._$Ep(s2, i2);
      void 0 !== e2 && (this._$Ev.set(e2, s2), t2.push(e2));
    }), t2;
  }
  static createProperty(t2, i2 = l$2) {
    if (i2.state && (i2.attribute = false), this.finalize(), this.elementProperties.set(t2, i2), !i2.noAccessor && !this.prototype.hasOwnProperty(t2)) {
      const s2 = "symbol" == typeof t2 ? Symbol() : "__" + t2, e2 = this.getPropertyDescriptor(t2, s2, i2);
      void 0 !== e2 && Object.defineProperty(this.prototype, t2, e2);
    }
  }
  static getPropertyDescriptor(t2, i2, s2) {
    return { get() {
      return this[i2];
    }, set(e2) {
      const r2 = this[t2];
      this[i2] = e2, this.requestUpdate(t2, r2, s2);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t2) {
    return this.elementProperties.get(t2) || l$2;
  }
  static finalize() {
    if (this.hasOwnProperty(d$1))
      return false;
    this[d$1] = true;
    const t2 = Object.getPrototypeOf(this);
    if (t2.finalize(), void 0 !== t2.h && (this.h = [...t2.h]), this.elementProperties = new Map(t2.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t3 = this.properties, i2 = [...Object.getOwnPropertyNames(t3), ...Object.getOwnPropertySymbols(t3)];
      for (const s2 of i2)
        this.createProperty(s2, t3[s2]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i2) {
    const s2 = [];
    if (Array.isArray(i2)) {
      const e2 = new Set(i2.flat(1 / 0).reverse());
      for (const i3 of e2)
        s2.unshift(c$1(i3));
    } else
      void 0 !== i2 && s2.push(c$1(i2));
    return s2;
  }
  static _$Ep(t2, i2) {
    const s2 = i2.attribute;
    return false === s2 ? void 0 : "string" == typeof s2 ? s2 : "string" == typeof t2 ? t2.toLowerCase() : void 0;
  }
  _$Eu() {
    var t2;
    this._$E_ = new Promise((t3) => this.enableUpdating = t3), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), null === (t2 = this.constructor.h) || void 0 === t2 || t2.forEach((t3) => t3(this));
  }
  addController(t2) {
    var i2, s2;
    (null !== (i2 = this._$ES) && void 0 !== i2 ? i2 : this._$ES = []).push(t2), void 0 !== this.renderRoot && this.isConnected && (null === (s2 = t2.hostConnected) || void 0 === s2 || s2.call(t2));
  }
  removeController(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.splice(this._$ES.indexOf(t2) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t2, i2) => {
      this.hasOwnProperty(i2) && (this._$Ei.set(i2, this[i2]), delete this[i2]);
    });
  }
  createRenderRoot() {
    var t2;
    const s2 = null !== (t2 = this.shadowRoot) && void 0 !== t2 ? t2 : this.attachShadow(this.constructor.shadowRootOptions);
    return S$1(s2, this.constructor.elementStyles), s2;
  }
  connectedCallback() {
    var t2;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostConnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  enableUpdating(t2) {
  }
  disconnectedCallback() {
    var t2;
    null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
      var i2;
      return null === (i2 = t3.hostDisconnected) || void 0 === i2 ? void 0 : i2.call(t3);
    });
  }
  attributeChangedCallback(t2, i2, s2) {
    this._$AK(t2, s2);
  }
  _$EO(t2, i2, s2 = l$2) {
    var e2;
    const r2 = this.constructor._$Ep(t2, s2);
    if (void 0 !== r2 && true === s2.reflect) {
      const h2 = (void 0 !== (null === (e2 = s2.converter) || void 0 === e2 ? void 0 : e2.toAttribute) ? s2.converter : n$4).toAttribute(i2, s2.type);
      this._$El = t2, null == h2 ? this.removeAttribute(r2) : this.setAttribute(r2, h2), this._$El = null;
    }
  }
  _$AK(t2, i2) {
    var s2;
    const e2 = this.constructor, r2 = e2._$Ev.get(t2);
    if (void 0 !== r2 && this._$El !== r2) {
      const t3 = e2.getPropertyOptions(r2), h2 = "function" == typeof t3.converter ? { fromAttribute: t3.converter } : void 0 !== (null === (s2 = t3.converter) || void 0 === s2 ? void 0 : s2.fromAttribute) ? t3.converter : n$4;
      this._$El = r2, this[r2] = h2.fromAttribute(i2, t3.type), this._$El = null;
    }
  }
  requestUpdate(t2, i2, s2) {
    let e2 = true;
    void 0 !== t2 && (((s2 = s2 || this.constructor.getPropertyOptions(t2)).hasChanged || a$1)(this[t2], i2) ? (this._$AL.has(t2) || this._$AL.set(t2, i2), true === s2.reflect && this._$El !== t2 && (void 0 === this._$EC && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t2, s2))) : e2 = false), !this.isUpdatePending && e2 && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = true;
    try {
      await this._$E_;
    } catch (t3) {
      Promise.reject(t3);
    }
    const t2 = this.scheduleUpdate();
    return null != t2 && await t2, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t2;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((t3, i3) => this[i3] = t3), this._$Ei = void 0);
    let i2 = false;
    const s2 = this._$AL;
    try {
      i2 = this.shouldUpdate(s2), i2 ? (this.willUpdate(s2), null === (t2 = this._$ES) || void 0 === t2 || t2.forEach((t3) => {
        var i3;
        return null === (i3 = t3.hostUpdate) || void 0 === i3 ? void 0 : i3.call(t3);
      }), this.update(s2)) : this._$Ek();
    } catch (t3) {
      throw i2 = false, this._$Ek(), t3;
    }
    i2 && this._$AE(s2);
  }
  willUpdate(t2) {
  }
  _$AE(t2) {
    var i2;
    null === (i2 = this._$ES) || void 0 === i2 || i2.forEach((t3) => {
      var i3;
      return null === (i3 = t3.hostUpdated) || void 0 === i3 ? void 0 : i3.call(t3);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t2)), this.updated(t2);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t2) {
    return true;
  }
  update(t2) {
    void 0 !== this._$EC && (this._$EC.forEach((t3, i2) => this._$EO(i2, this[i2], t3)), this._$EC = void 0), this._$Ek();
  }
  updated(t2) {
  }
  firstUpdated(t2) {
  }
};
u$1[d$1] = true, u$1.elementProperties = /* @__PURE__ */ new Map(), u$1.elementStyles = [], u$1.shadowRootOptions = { mode: "open" }, null == o$2 || o$2({ ReactiveElement: u$1 }), (null !== (s$2 = e$3.reactiveElementVersions) && void 0 !== s$2 ? s$2 : e$3.reactiveElementVersions = []).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
const i$1 = window, s$1 = i$1.trustedTypes, e$2 = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t2) => t2 }) : void 0, o$1 = "$lit$", n$3 = `lit$${(Math.random() + "").slice(9)}$`, l$1 = "?" + n$3, h = `<${l$1}>`, r = document, u2 = () => r.createComment(""), d = (t2) => null === t2 || "object" != typeof t2 && "function" != typeof t2, c = Array.isArray, v = (t2) => c(t2) || "function" == typeof (null == t2 ? void 0 : t2[Symbol.iterator]), a = "[ 	\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t2) => (i2, ...s2) => ({ _$litType$: t2, strings: i2, values: s2 }), x = w(1), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = /* @__PURE__ */ new WeakMap(), C = r.createTreeWalker(r, 129, null, false);
function P(t2, i2) {
  if (!Array.isArray(t2) || !t2.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return void 0 !== e$2 ? e$2.createHTML(i2) : i2;
}
const V = (t2, i2) => {
  const s2 = t2.length - 1, e2 = [];
  let l2, r2 = 2 === i2 ? "<svg>" : "", u3 = f;
  for (let i3 = 0; i3 < s2; i3++) {
    const s3 = t2[i3];
    let d2, c2, v2 = -1, a2 = 0;
    for (; a2 < s3.length && (u3.lastIndex = a2, c2 = u3.exec(s3), null !== c2); )
      a2 = u3.lastIndex, u3 === f ? "!--" === c2[1] ? u3 = _ : void 0 !== c2[1] ? u3 = m : void 0 !== c2[2] ? (y.test(c2[2]) && (l2 = RegExp("</" + c2[2], "g")), u3 = p) : void 0 !== c2[3] && (u3 = p) : u3 === p ? ">" === c2[0] ? (u3 = null != l2 ? l2 : f, v2 = -1) : void 0 === c2[1] ? v2 = -2 : (v2 = u3.lastIndex - c2[2].length, d2 = c2[1], u3 = void 0 === c2[3] ? p : '"' === c2[3] ? $ : g) : u3 === $ || u3 === g ? u3 = p : u3 === _ || u3 === m ? u3 = f : (u3 = p, l2 = void 0);
    const w2 = u3 === p && t2[i3 + 1].startsWith("/>") ? " " : "";
    r2 += u3 === f ? s3 + h : v2 >= 0 ? (e2.push(d2), s3.slice(0, v2) + o$1 + s3.slice(v2) + n$3 + w2) : s3 + n$3 + (-2 === v2 ? (e2.push(void 0), i3) : w2);
  }
  return [P(t2, r2 + (t2[s2] || "<?>") + (2 === i2 ? "</svg>" : "")), e2];
};
class N {
  constructor({ strings: t2, _$litType$: i2 }, e2) {
    let h2;
    this.parts = [];
    let r2 = 0, d2 = 0;
    const c2 = t2.length - 1, v2 = this.parts, [a2, f2] = V(t2, i2);
    if (this.el = N.createElement(a2, e2), C.currentNode = this.el.content, 2 === i2) {
      const t3 = this.el.content, i3 = t3.firstChild;
      i3.remove(), t3.append(...i3.childNodes);
    }
    for (; null !== (h2 = C.nextNode()) && v2.length < c2; ) {
      if (1 === h2.nodeType) {
        if (h2.hasAttributes()) {
          const t3 = [];
          for (const i3 of h2.getAttributeNames())
            if (i3.endsWith(o$1) || i3.startsWith(n$3)) {
              const s2 = f2[d2++];
              if (t3.push(i3), void 0 !== s2) {
                const t4 = h2.getAttribute(s2.toLowerCase() + o$1).split(n$3), i4 = /([.?@])?(.*)/.exec(s2);
                v2.push({ type: 1, index: r2, name: i4[2], strings: t4, ctor: "." === i4[1] ? H : "?" === i4[1] ? L : "@" === i4[1] ? z : k });
              } else
                v2.push({ type: 6, index: r2 });
            }
          for (const i3 of t3)
            h2.removeAttribute(i3);
        }
        if (y.test(h2.tagName)) {
          const t3 = h2.textContent.split(n$3), i3 = t3.length - 1;
          if (i3 > 0) {
            h2.textContent = s$1 ? s$1.emptyScript : "";
            for (let s2 = 0; s2 < i3; s2++)
              h2.append(t3[s2], u2()), C.nextNode(), v2.push({ type: 2, index: ++r2 });
            h2.append(t3[i3], u2());
          }
        }
      } else if (8 === h2.nodeType)
        if (h2.data === l$1)
          v2.push({ type: 2, index: r2 });
        else {
          let t3 = -1;
          for (; -1 !== (t3 = h2.data.indexOf(n$3, t3 + 1)); )
            v2.push({ type: 7, index: r2 }), t3 += n$3.length - 1;
        }
      r2++;
    }
  }
  static createElement(t2, i2) {
    const s2 = r.createElement("template");
    return s2.innerHTML = t2, s2;
  }
}
function S(t2, i2, s2 = t2, e2) {
  var o3, n2, l2, h2;
  if (i2 === T)
    return i2;
  let r2 = void 0 !== e2 ? null === (o3 = s2._$Co) || void 0 === o3 ? void 0 : o3[e2] : s2._$Cl;
  const u3 = d(i2) ? void 0 : i2._$litDirective$;
  return (null == r2 ? void 0 : r2.constructor) !== u3 && (null === (n2 = null == r2 ? void 0 : r2._$AO) || void 0 === n2 || n2.call(r2, false), void 0 === u3 ? r2 = void 0 : (r2 = new u3(t2), r2._$AT(t2, s2, e2)), void 0 !== e2 ? (null !== (l2 = (h2 = s2)._$Co) && void 0 !== l2 ? l2 : h2._$Co = [])[e2] = r2 : s2._$Cl = r2), void 0 !== r2 && (i2 = S(t2, r2._$AS(t2, i2.values), r2, e2)), i2;
}
class M {
  constructor(t2, i2) {
    this._$AV = [], this._$AN = void 0, this._$AD = t2, this._$AM = i2;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t2) {
    var i2;
    const { el: { content: s2 }, parts: e2 } = this._$AD, o3 = (null !== (i2 = null == t2 ? void 0 : t2.creationScope) && void 0 !== i2 ? i2 : r).importNode(s2, true);
    C.currentNode = o3;
    let n2 = C.nextNode(), l2 = 0, h2 = 0, u3 = e2[0];
    for (; void 0 !== u3; ) {
      if (l2 === u3.index) {
        let i3;
        2 === u3.type ? i3 = new R(n2, n2.nextSibling, this, t2) : 1 === u3.type ? i3 = new u3.ctor(n2, u3.name, u3.strings, this, t2) : 6 === u3.type && (i3 = new Z(n2, this, t2)), this._$AV.push(i3), u3 = e2[++h2];
      }
      l2 !== (null == u3 ? void 0 : u3.index) && (n2 = C.nextNode(), l2++);
    }
    return C.currentNode = r, o3;
  }
  v(t2) {
    let i2 = 0;
    for (const s2 of this._$AV)
      void 0 !== s2 && (void 0 !== s2.strings ? (s2._$AI(t2, s2, i2), i2 += s2.strings.length - 2) : s2._$AI(t2[i2])), i2++;
  }
}
class R {
  constructor(t2, i2, s2, e2) {
    var o3;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t2, this._$AB = i2, this._$AM = s2, this.options = e2, this._$Cp = null === (o3 = null == e2 ? void 0 : e2.isConnected) || void 0 === o3 || o3;
  }
  get _$AU() {
    var t2, i2;
    return null !== (i2 = null === (t2 = this._$AM) || void 0 === t2 ? void 0 : t2._$AU) && void 0 !== i2 ? i2 : this._$Cp;
  }
  get parentNode() {
    let t2 = this._$AA.parentNode;
    const i2 = this._$AM;
    return void 0 !== i2 && 11 === (null == t2 ? void 0 : t2.nodeType) && (t2 = i2.parentNode), t2;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t2, i2 = this) {
    t2 = S(this, t2, i2), d(t2) ? t2 === A || null == t2 || "" === t2 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t2 !== this._$AH && t2 !== T && this._(t2) : void 0 !== t2._$litType$ ? this.g(t2) : void 0 !== t2.nodeType ? this.$(t2) : v(t2) ? this.T(t2) : this._(t2);
  }
  k(t2) {
    return this._$AA.parentNode.insertBefore(t2, this._$AB);
  }
  $(t2) {
    this._$AH !== t2 && (this._$AR(), this._$AH = this.k(t2));
  }
  _(t2) {
    this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t2 : this.$(r.createTextNode(t2)), this._$AH = t2;
  }
  g(t2) {
    var i2;
    const { values: s2, _$litType$: e2 } = t2, o3 = "number" == typeof e2 ? this._$AC(t2) : (void 0 === e2.el && (e2.el = N.createElement(P(e2.h, e2.h[0]), this.options)), e2);
    if ((null === (i2 = this._$AH) || void 0 === i2 ? void 0 : i2._$AD) === o3)
      this._$AH.v(s2);
    else {
      const t3 = new M(o3, this), i3 = t3.u(this.options);
      t3.v(s2), this.$(i3), this._$AH = t3;
    }
  }
  _$AC(t2) {
    let i2 = E.get(t2.strings);
    return void 0 === i2 && E.set(t2.strings, i2 = new N(t2)), i2;
  }
  T(t2) {
    c(this._$AH) || (this._$AH = [], this._$AR());
    const i2 = this._$AH;
    let s2, e2 = 0;
    for (const o3 of t2)
      e2 === i2.length ? i2.push(s2 = new R(this.k(u2()), this.k(u2()), this, this.options)) : s2 = i2[e2], s2._$AI(o3), e2++;
    e2 < i2.length && (this._$AR(s2 && s2._$AB.nextSibling, e2), i2.length = e2);
  }
  _$AR(t2 = this._$AA.nextSibling, i2) {
    var s2;
    for (null === (s2 = this._$AP) || void 0 === s2 || s2.call(this, false, true, i2); t2 && t2 !== this._$AB; ) {
      const i3 = t2.nextSibling;
      t2.remove(), t2 = i3;
    }
  }
  setConnected(t2) {
    var i2;
    void 0 === this._$AM && (this._$Cp = t2, null === (i2 = this._$AP) || void 0 === i2 || i2.call(this, t2));
  }
}
class k {
  constructor(t2, i2, s2, e2, o3) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t2, this.name = i2, this._$AM = e2, this.options = o3, s2.length > 2 || "" !== s2[0] || "" !== s2[1] ? (this._$AH = Array(s2.length - 1).fill(new String()), this.strings = s2) : this._$AH = A;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2, i2 = this, s2, e2) {
    const o3 = this.strings;
    let n2 = false;
    if (void 0 === o3)
      t2 = S(this, t2, i2, 0), n2 = !d(t2) || t2 !== this._$AH && t2 !== T, n2 && (this._$AH = t2);
    else {
      const e3 = t2;
      let l2, h2;
      for (t2 = o3[0], l2 = 0; l2 < o3.length - 1; l2++)
        h2 = S(this, e3[s2 + l2], i2, l2), h2 === T && (h2 = this._$AH[l2]), n2 || (n2 = !d(h2) || h2 !== this._$AH[l2]), h2 === A ? t2 = A : t2 !== A && (t2 += (null != h2 ? h2 : "") + o3[l2 + 1]), this._$AH[l2] = h2;
    }
    n2 && !e2 && this.j(t2);
  }
  j(t2) {
    t2 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t2 ? t2 : "");
  }
}
class H extends k {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t2) {
    this.element[this.name] = t2 === A ? void 0 : t2;
  }
}
const I = s$1 ? s$1.emptyScript : "";
class L extends k {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t2) {
    t2 && t2 !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
  }
}
class z extends k {
  constructor(t2, i2, s2, e2, o3) {
    super(t2, i2, s2, e2, o3), this.type = 5;
  }
  _$AI(t2, i2 = this) {
    var s2;
    if ((t2 = null !== (s2 = S(this, t2, i2, 0)) && void 0 !== s2 ? s2 : A) === T)
      return;
    const e2 = this._$AH, o3 = t2 === A && e2 !== A || t2.capture !== e2.capture || t2.once !== e2.once || t2.passive !== e2.passive, n2 = t2 !== A && (e2 === A || o3);
    o3 && this.element.removeEventListener(this.name, this, e2), n2 && this.element.addEventListener(this.name, this, t2), this._$AH = t2;
  }
  handleEvent(t2) {
    var i2, s2;
    "function" == typeof this._$AH ? this._$AH.call(null !== (s2 = null === (i2 = this.options) || void 0 === i2 ? void 0 : i2.host) && void 0 !== s2 ? s2 : this.element, t2) : this._$AH.handleEvent(t2);
  }
}
class Z {
  constructor(t2, i2, s2) {
    this.element = t2, this.type = 6, this._$AN = void 0, this._$AM = i2, this.options = s2;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t2) {
    S(this, t2);
  }
}
const B = i$1.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t = i$1.litHtmlVersions) && void 0 !== t ? t : i$1.litHtmlVersions = []).push("2.8.0");
const D = (t2, i2, s2) => {
  var e2, o3;
  const n2 = null !== (e2 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== e2 ? e2 : i2;
  let l2 = n2._$litPart$;
  if (void 0 === l2) {
    const t3 = null !== (o3 = null == s2 ? void 0 : s2.renderBefore) && void 0 !== o3 ? o3 : null;
    n2._$litPart$ = l2 = new R(i2.insertBefore(u2(), t3), t3, void 0, null != s2 ? s2 : {});
  }
  return l2._$AI(t2), l2;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o2;
class s extends u$1 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t2, e2;
    const i2 = super.createRenderRoot();
    return null !== (t2 = (e2 = this.renderOptions).renderBefore) && void 0 !== t2 || (e2.renderBefore = i2.firstChild), i2;
  }
  update(t2) {
    const i2 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t2), this._$Do = D(i2, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t2;
    super.connectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(true);
  }
  disconnectedCallback() {
    var t2;
    super.disconnectedCallback(), null === (t2 = this._$Do) || void 0 === t2 || t2.setConnected(false);
  }
  render() {
    return T;
  }
}
s.finalized = true, s._$litElement$ = true, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, { LitElement: s });
const n$2 = globalThis.litElementPolyfillSupport;
null == n$2 || n$2({ LitElement: s });
(null !== (o2 = globalThis.litElementVersions) && void 0 !== o2 ? o2 : globalThis.litElementVersions = []).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$1 = (e2) => (n2) => "function" == typeof n2 ? ((e3, n3) => (customElements.define(e3, n3), n3))(e2, n2) : ((e3, n3) => {
  const { kind: t2, elements: s2 } = n3;
  return { kind: t2, elements: s2, finisher(n4) {
    customElements.define(e3, n4);
  } };
})(e2, n2);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i = (i2, e2) => "method" === e2.kind && e2.descriptor && !("value" in e2.descriptor) ? { ...e2, finisher(n2) {
  n2.createProperty(e2.key, i2);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e2.key, initializer() {
  "function" == typeof e2.initializer && (this[e2.key] = e2.initializer.call(this));
}, finisher(n2) {
  n2.createProperty(e2.key, i2);
} }, e = (i2, e2, n2) => {
  e2.constructor.createProperty(n2, i2);
};
function n$1(n2) {
  return (t2, o3) => void 0 !== o3 ? e(n2, t2, o3) : i(n2, t2);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? (o3, n2) => o3.assignedElements(n2) : (o3, n2) => o3.assignedNodes(n2).filter((o4) => o4.nodeType === Node.ELEMENT_NODE);
function die(error) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  throw new Error(typeof error === "number" ? "[MobX] minified error nr: " + error + (args.length ? " " + args.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + error);
}
var mockGlobal = {};
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return mockGlobal;
}
var assign$1 = Object.assign;
var getDescriptor = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var objectPrototype = Object.prototype;
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
var hasProxy = typeof Proxy !== "undefined";
var plainObjectString = /* @__PURE__ */ Object.toString();
function assertProxies() {
  if (!hasProxy) {
    die("Proxy not available");
  }
}
function once(func) {
  var invoked = false;
  return function() {
    if (invoked) {
      return;
    }
    invoked = true;
    return func.apply(this, arguments);
  };
}
var noop = function noop2() {
};
function isFunction(fn) {
  return typeof fn === "function";
}
function isStringish(value) {
  var t2 = typeof value;
  switch (t2) {
    case "string":
    case "symbol":
    case "number":
      return true;
  }
  return false;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto == null) {
    return true;
  }
  var protoConstructor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof protoConstructor === "function" && protoConstructor.toString() === plainObjectString;
}
function isGenerator(obj) {
  var constructor = obj == null ? void 0 : obj.constructor;
  if (!constructor) {
    return false;
  }
  if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName) {
    return true;
  }
  return false;
}
function addHiddenProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value
  });
}
function addHiddenFinalProp(object2, propName, value) {
  defineProperty(object2, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value
  });
}
function createInstanceofPredicate(name, theClass) {
  var propName = "isMobX" + name;
  theClass.prototype[propName] = true;
  return function(x2) {
    return isObject(x2) && x2[propName] === true;
  };
}
function isES6Map(thing) {
  return thing instanceof Map;
}
function isES6Set(thing) {
  return thing instanceof Set;
}
var hasGetOwnPropertySymbols = typeof Object.getOwnPropertySymbols !== "undefined";
function getPlainObjectKeys(object2) {
  var keys = Object.keys(object2);
  if (!hasGetOwnPropertySymbols) {
    return keys;
  }
  var symbols = Object.getOwnPropertySymbols(object2);
  if (!symbols.length) {
    return keys;
  }
  return [].concat(keys, symbols.filter(function(s2) {
    return objectPrototype.propertyIsEnumerable.call(object2, s2);
  }));
}
var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : hasGetOwnPropertySymbols ? function(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function toPrimitive(value) {
  return value === null ? null : typeof value === "object" ? "" + value : value;
}
function hasProp(target, prop) {
  return objectPrototype.hasOwnProperty.call(target, prop);
}
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
  var res = {};
  ownKeys(target).forEach(function(key) {
    res[key] = getDescriptor(target, key);
  });
  return res;
};
function _defineProperties$1(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o3, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o4, p3) {
    o4.__proto__ = p3;
    return o4;
  };
  return _setPrototypeOf(o3, p2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _unsupportedIterableToArray$1(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray$1(o3, minLen);
  var n2 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n2 === "Object" && o3.constructor)
    n2 = o3.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o3);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray$1(o3, minLen);
}
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
    arr2[i2] = arr[i2];
  return arr2;
}
function _createForOfIteratorHelperLoose$1(o3, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
  if (it)
    return (it = it.call(o3)).next.bind(it);
  if (Array.isArray(o3) || (it = _unsupportedIterableToArray$1(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
    if (it)
      o3 = it;
    var i2 = 0;
    return function() {
      if (i2 >= o3.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o3[i2++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
var storedAnnotationsSymbol = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function createDecoratorAnnotation(annotation) {
  function decorator(target, property) {
    if (is20223Decorator(property)) {
      return annotation.decorate_20223_(target, property);
    } else {
      storeAnnotation(target, property, annotation);
    }
  }
  return Object.assign(decorator, annotation);
}
function storeAnnotation(prototype2, key, annotation) {
  if (!hasProp(prototype2, storedAnnotationsSymbol)) {
    addHiddenProp(prototype2, storedAnnotationsSymbol, _extends({}, prototype2[storedAnnotationsSymbol]));
  }
  if (!isOverride(annotation)) {
    prototype2[storedAnnotationsSymbol][key] = annotation;
  }
}
function collectStoredAnnotations(target) {
  if (!hasProp(target, storedAnnotationsSymbol)) {
    addHiddenProp(target, storedAnnotationsSymbol, _extends({}, target[storedAnnotationsSymbol]));
  }
  return target[storedAnnotationsSymbol];
}
function is20223Decorator(context) {
  return typeof context == "object" && typeof context["kind"] == "string";
}
var $mobx = /* @__PURE__ */ Symbol("mobx administration");
var Atom = /* @__PURE__ */ function() {
  function Atom2(name_) {
    if (name_ === void 0) {
      name_ = "Atom";
    }
    this.name_ = void 0;
    this.isPendingUnobservation_ = false;
    this.isBeingObserved_ = false;
    this.observers_ = /* @__PURE__ */ new Set();
    this.batchId_ = void 0;
    this.diffValue_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.NOT_TRACKING_;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    this.name_ = name_;
    this.batchId_ = globalState.inBatch ? globalState.batchId : NaN;
  }
  var _proto = Atom2.prototype;
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.reportObserved = function reportObserved$1() {
    return reportObserved(this);
  };
  _proto.reportChanged = function reportChanged() {
    if (!globalState.inBatch || this.batchId_ !== globalState.batchId) {
      globalState.stateVersion = globalState.stateVersion < Number.MAX_SAFE_INTEGER ? globalState.stateVersion + 1 : Number.MIN_SAFE_INTEGER;
      this.batchId_ = NaN;
    }
    startBatch();
    propagateChanged(this);
    endBatch();
  };
  _proto.toString = function toString2() {
    return this.name_;
  };
  return Atom2;
}();
var isAtom = /* @__PURE__ */ createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
  if (onBecomeObservedHandler === void 0) {
    onBecomeObservedHandler = noop;
  }
  if (onBecomeUnobservedHandler === void 0) {
    onBecomeUnobservedHandler = noop;
  }
  var atom = new Atom(name);
  if (onBecomeObservedHandler !== noop) {
    onBecomeObserved(atom, onBecomeObservedHandler);
  }
  if (onBecomeUnobservedHandler !== noop) {
    onBecomeUnobserved(atom, onBecomeUnobservedHandler);
  }
  return atom;
}
function identityComparer(a2, b) {
  return a2 === b;
}
function structuralComparer(a2, b) {
  return deepEqual(a2, b);
}
function shallowComparer(a2, b) {
  return deepEqual(a2, b, 1);
}
function defaultComparer(a2, b) {
  if (Object.is) {
    return Object.is(a2, b);
  }
  return a2 === b ? a2 !== 0 || 1 / a2 === 1 / b : a2 !== a2 && b !== b;
}
var comparer = {
  identity: identityComparer,
  structural: structuralComparer,
  "default": defaultComparer,
  shallow: shallowComparer
};
function deepEnhancer(v2, _2, name) {
  if (isObservable$1(v2)) {
    return v2;
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, {
      name
    });
  }
  if (isPlainObject(v2)) {
    return observable.object(v2, void 0, {
      name
    });
  }
  if (isES6Map(v2)) {
    return observable.map(v2, {
      name
    });
  }
  if (isES6Set(v2)) {
    return observable.set(v2, {
      name
    });
  }
  if (typeof v2 === "function" && !isAction(v2) && !isFlow(v2)) {
    if (isGenerator(v2)) {
      return flow(v2);
    } else {
      return autoAction(name, v2);
    }
  }
  return v2;
}
function shallowEnhancer(v2, _2, name) {
  if (v2 === void 0 || v2 === null) {
    return v2;
  }
  if (isObservableObject(v2) || isObservableArray(v2) || isObservableMap(v2) || isObservableSet(v2)) {
    return v2;
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, {
      name,
      deep: false
    });
  }
  if (isPlainObject(v2)) {
    return observable.object(v2, void 0, {
      name,
      deep: false
    });
  }
  if (isES6Map(v2)) {
    return observable.map(v2, {
      name,
      deep: false
    });
  }
  if (isES6Set(v2)) {
    return observable.set(v2, {
      name,
      deep: false
    });
  }
}
function referenceEnhancer(newValue) {
  return newValue;
}
function refStructEnhancer(v2, oldValue) {
  if (deepEqual(v2, oldValue)) {
    return oldValue;
  }
  return v2;
}
var OVERRIDE = "override";
function isOverride(annotation) {
  return annotation.annotationType_ === OVERRIDE;
}
function createActionAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$1,
    extend_: extend_$1,
    decorate_20223_: decorate_20223_$1
  };
}
function make_$1(adm, key, descriptor, source) {
  var _this$options_;
  if ((_this$options_ = this.options_) != null && _this$options_.bound) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
  }
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if (isAction(descriptor.value)) {
    return 1;
  }
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor, false);
  defineProperty(source, key, actionDescriptor);
  return 2;
}
function extend_$1(adm, key, descriptor, proxyTrap) {
  var actionDescriptor = createActionDescriptor(adm, this, key, descriptor);
  return adm.defineProperty_(key, actionDescriptor, proxyTrap);
}
function decorate_20223_$1(mthd, context) {
  var kind = context.kind, name = context.name, addInitializer = context.addInitializer;
  var ann = this;
  var _createAction = function _createAction2(m2) {
    var _ann$options_$name, _ann$options_, _ann$options_$autoAct, _ann$options_2;
    return createAction((_ann$options_$name = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.name) != null ? _ann$options_$name : name.toString(), m2, (_ann$options_$autoAct = (_ann$options_2 = ann.options_) == null ? void 0 : _ann$options_2.autoAction) != null ? _ann$options_$autoAct : false);
  };
  if (kind == "field") {
    addInitializer(function() {
      storeAnnotation(this, name, ann);
    });
    return;
  }
  if (kind == "method") {
    var _this$options_2;
    if (!isAction(mthd)) {
      mthd = _createAction(mthd);
    }
    if ((_this$options_2 = this.options_) != null && _this$options_2.bound) {
      addInitializer(function() {
        var self2 = this;
        var bound = self2[name].bind(self2);
        bound.isMobxAction = true;
        self2[name] = bound;
      });
    }
    return mthd;
  }
  die("Cannot apply '" + ann.annotationType_ + "' to '" + String(name) + "' (kind: " + kind + "):" + ("\n'" + ann.annotationType_ + "' can only be used on properties with a function value."));
}
function assertActionDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createActionDescriptor(adm, annotation, key, descriptor, safeDescriptors) {
  var _annotation$options_, _annotation$options_$, _annotation$options_2, _annotation$options_$2, _annotation$options_3, _annotation$options_4, _adm$proxy_2;
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertActionDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if ((_annotation$options_ = annotation.options_) != null && _annotation$options_.bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return {
    value: createAction(
      (_annotation$options_$ = (_annotation$options_2 = annotation.options_) == null ? void 0 : _annotation$options_2.name) != null ? _annotation$options_$ : key.toString(),
      value,
      (_annotation$options_$2 = (_annotation$options_3 = annotation.options_) == null ? void 0 : _annotation$options_3.autoAction) != null ? _annotation$options_$2 : false,
      // https://github.com/mobxjs/mobx/discussions/3140
      (_annotation$options_4 = annotation.options_) != null && _annotation$options_4.bound ? (_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
function createFlowAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$2,
    extend_: extend_$2,
    decorate_20223_: decorate_20223_$2
  };
}
function make_$2(adm, key, descriptor, source) {
  var _this$options_;
  if (source === adm.target_) {
    return this.extend_(adm, key, descriptor, false) === null ? 0 : 2;
  }
  if ((_this$options_ = this.options_) != null && _this$options_.bound && (!hasProp(adm.target_, key) || !isFlow(adm.target_[key]))) {
    if (this.extend_(adm, key, descriptor, false) === null) {
      return 0;
    }
  }
  if (isFlow(descriptor.value)) {
    return 1;
  }
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, false, false);
  defineProperty(source, key, flowDescriptor);
  return 2;
}
function extend_$2(adm, key, descriptor, proxyTrap) {
  var _this$options_2;
  var flowDescriptor = createFlowDescriptor(adm, this, key, descriptor, (_this$options_2 = this.options_) == null ? void 0 : _this$options_2.bound);
  return adm.defineProperty_(key, flowDescriptor, proxyTrap);
}
function decorate_20223_$2(mthd, context) {
  var _this$options_3;
  var name = context.name, addInitializer = context.addInitializer;
  if (!isFlow(mthd)) {
    mthd = flow(mthd);
  }
  if ((_this$options_3 = this.options_) != null && _this$options_3.bound) {
    addInitializer(function() {
      var self2 = this;
      var bound = self2[name].bind(self2);
      bound.isMobXFlow = true;
      self2[name] = bound;
    });
  }
  return mthd;
}
function assertFlowDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.value;
}
function createFlowDescriptor(adm, annotation, key, descriptor, bound, safeDescriptors) {
  if (safeDescriptors === void 0) {
    safeDescriptors = globalState.safeDescriptors;
  }
  assertFlowDescriptor(adm, annotation, key, descriptor);
  var value = descriptor.value;
  if (!isFlow(value)) {
    value = flow(value);
  }
  if (bound) {
    var _adm$proxy_;
    value = value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
    value.isMobXFlow = true;
  }
  return {
    value,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: safeDescriptors ? adm.isPlainObject_ : true,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: false,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: safeDescriptors ? false : true
  };
}
function createComputedAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$3,
    extend_: extend_$3,
    decorate_20223_: decorate_20223_$3
  };
}
function make_$3(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$3(adm, key, descriptor, proxyTrap) {
  assertComputedDescriptor(adm, this, key, descriptor);
  return adm.defineComputedProperty_(key, _extends({}, this.options_, {
    get: descriptor.get,
    set: descriptor.set
  }), proxyTrap);
}
function decorate_20223_$3(get3, context) {
  var ann = this;
  var key = context.name, addInitializer = context.addInitializer;
  addInitializer(function() {
    var adm = asObservableObject(this)[$mobx];
    var options = _extends({}, ann.options_, {
      get: get3,
      context: this
    });
    options.name || (options.name = "ObservableObject." + key.toString());
    adm.values_.set(key, new ComputedValue(options));
  });
  return function() {
    return this[$mobx].getObservablePropValue_(key);
  };
}
function assertComputedDescriptor(adm, _ref, key, _ref2) {
  _ref.annotationType_;
  _ref2.get;
}
function createObservableAnnotation(name, options) {
  return {
    annotationType_: name,
    options_: options,
    make_: make_$4,
    extend_: extend_$4,
    decorate_20223_: decorate_20223_$4
  };
}
function make_$4(adm, key, descriptor) {
  return this.extend_(adm, key, descriptor, false) === null ? 0 : 1;
}
function extend_$4(adm, key, descriptor, proxyTrap) {
  var _this$options_$enhanc, _this$options_;
  assertObservableDescriptor(adm, this);
  return adm.defineObservableProperty_(key, descriptor.value, (_this$options_$enhanc = (_this$options_ = this.options_) == null ? void 0 : _this$options_.enhancer) != null ? _this$options_$enhanc : deepEnhancer, proxyTrap);
}
function decorate_20223_$4(desc, context) {
  var ann = this;
  var kind = context.kind, name = context.name;
  var initializedObjects = /* @__PURE__ */ new WeakSet();
  function initializeObservable(target, value) {
    var _ann$options_$enhance, _ann$options_;
    var adm = asObservableObject(target)[$mobx];
    var observable2 = new ObservableValue(value, (_ann$options_$enhance = (_ann$options_ = ann.options_) == null ? void 0 : _ann$options_.enhancer) != null ? _ann$options_$enhance : deepEnhancer, "ObservableObject." + name.toString(), false);
    adm.values_.set(name, observable2);
    initializedObjects.add(target);
  }
  if (kind == "accessor") {
    return {
      get: function get3() {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, desc.get.call(this));
        }
        return this[$mobx].getObservablePropValue_(name);
      },
      set: function set4(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return this[$mobx].setObservablePropValue_(name, value);
      },
      init: function init(value) {
        if (!initializedObjects.has(this)) {
          initializeObservable(this, value);
        }
        return value;
      }
    };
  }
  return;
}
function assertObservableDescriptor(adm, _ref, key, descriptor) {
  _ref.annotationType_;
}
var AUTO = "true";
var autoAnnotation = /* @__PURE__ */ createAutoAnnotation();
function createAutoAnnotation(options) {
  return {
    annotationType_: AUTO,
    options_: options,
    make_: make_$5,
    extend_: extend_$5,
    decorate_20223_: decorate_20223_$5
  };
}
function make_$5(adm, key, descriptor, source) {
  var _this$options_3, _this$options_4;
  if (descriptor.get) {
    return computed.make_(adm, key, descriptor, source);
  }
  if (descriptor.set) {
    var set4 = createAction(key.toString(), descriptor.set);
    if (source === adm.target_) {
      return adm.defineProperty_(key, {
        configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
        set: set4
      }) === null ? 0 : 2;
    }
    defineProperty(source, key, {
      configurable: true,
      set: set4
    });
    return 2;
  }
  if (source !== adm.target_ && typeof descriptor.value === "function") {
    var _this$options_2;
    if (isGenerator(descriptor.value)) {
      var _this$options_;
      var flowAnnotation2 = (_this$options_ = this.options_) != null && _this$options_.autoBind ? flow.bound : flow;
      return flowAnnotation2.make_(adm, key, descriptor, source);
    }
    var actionAnnotation2 = (_this$options_2 = this.options_) != null && _this$options_2.autoBind ? autoAction.bound : autoAction;
    return actionAnnotation2.make_(adm, key, descriptor, source);
  }
  var observableAnnotation2 = ((_this$options_3 = this.options_) == null ? void 0 : _this$options_3.deep) === false ? observable.ref : observable;
  if (typeof descriptor.value === "function" && (_this$options_4 = this.options_) != null && _this$options_4.autoBind) {
    var _adm$proxy_;
    descriptor.value = descriptor.value.bind((_adm$proxy_ = adm.proxy_) != null ? _adm$proxy_ : adm.target_);
  }
  return observableAnnotation2.make_(adm, key, descriptor, source);
}
function extend_$5(adm, key, descriptor, proxyTrap) {
  var _this$options_5, _this$options_6;
  if (descriptor.get) {
    return computed.extend_(adm, key, descriptor, proxyTrap);
  }
  if (descriptor.set) {
    return adm.defineProperty_(key, {
      configurable: globalState.safeDescriptors ? adm.isPlainObject_ : true,
      set: createAction(key.toString(), descriptor.set)
    }, proxyTrap);
  }
  if (typeof descriptor.value === "function" && (_this$options_5 = this.options_) != null && _this$options_5.autoBind) {
    var _adm$proxy_2;
    descriptor.value = descriptor.value.bind((_adm$proxy_2 = adm.proxy_) != null ? _adm$proxy_2 : adm.target_);
  }
  var observableAnnotation2 = ((_this$options_6 = this.options_) == null ? void 0 : _this$options_6.deep) === false ? observable.ref : observable;
  return observableAnnotation2.extend_(adm, key, descriptor, proxyTrap);
}
function decorate_20223_$5(desc, context) {
  die("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var OBSERVABLE = "observable";
var OBSERVABLE_REF = "observable.ref";
var OBSERVABLE_SHALLOW = "observable.shallow";
var OBSERVABLE_STRUCT = "observable.struct";
var defaultCreateObservableOptions = {
  deep: true,
  name: void 0,
  defaultDecorator: void 0,
  proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function asCreateObservableOptions(thing) {
  return thing || defaultCreateObservableOptions;
}
var observableAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE);
var observableRefAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_REF, {
  enhancer: referenceEnhancer
});
var observableShallowAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_SHALLOW, {
  enhancer: shallowEnhancer
});
var observableStructAnnotation = /* @__PURE__ */ createObservableAnnotation(OBSERVABLE_STRUCT, {
  enhancer: refStructEnhancer
});
var observableDecoratorAnnotation = /* @__PURE__ */ createDecoratorAnnotation(observableAnnotation);
function getEnhancerFromOptions(options) {
  return options.deep === true ? deepEnhancer : options.deep === false ? referenceEnhancer : getEnhancerFromAnnotation(options.defaultDecorator);
}
function getAnnotationFromOptions(options) {
  var _options$defaultDecor;
  return options ? (_options$defaultDecor = options.defaultDecorator) != null ? _options$defaultDecor : createAutoAnnotation(options) : void 0;
}
function getEnhancerFromAnnotation(annotation) {
  var _annotation$options_$, _annotation$options_;
  return !annotation ? deepEnhancer : (_annotation$options_$ = (_annotation$options_ = annotation.options_) == null ? void 0 : _annotation$options_.enhancer) != null ? _annotation$options_$ : deepEnhancer;
}
function createObservable(v2, arg2, arg3) {
  if (is20223Decorator(arg2)) {
    return observableAnnotation.decorate_20223_(v2, arg2);
  }
  if (isStringish(arg2)) {
    storeAnnotation(v2, arg2, observableAnnotation);
    return;
  }
  if (isObservable$1(v2)) {
    return v2;
  }
  if (isPlainObject(v2)) {
    return observable.object(v2, arg2, arg3);
  }
  if (Array.isArray(v2)) {
    return observable.array(v2, arg2);
  }
  if (isES6Map(v2)) {
    return observable.map(v2, arg2);
  }
  if (isES6Set(v2)) {
    return observable.set(v2, arg2);
  }
  if (typeof v2 === "object" && v2 !== null) {
    return v2;
  }
  return observable.box(v2, arg2);
}
assign$1(createObservable, observableDecoratorAnnotation);
var observableFactories = {
  box: function box(value, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableValue(value, getEnhancerFromOptions(o3), o3.name, true, o3.equals);
  },
  array: function array(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return (globalState.useProxies === false || o3.proxy === false ? createLegacyArray : createObservableArray)(initialValues, getEnhancerFromOptions(o3), o3.name);
  },
  map: function map(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableMap(initialValues, getEnhancerFromOptions(o3), o3.name);
  },
  set: function set(initialValues, options) {
    var o3 = asCreateObservableOptions(options);
    return new ObservableSet(initialValues, getEnhancerFromOptions(o3), o3.name);
  },
  object: function object(props, decorators, options) {
    return initObservable(function() {
      return extendObservable(globalState.useProxies === false || (options == null ? void 0 : options.proxy) === false ? asObservableObject({}, options) : asDynamicObservableObject({}, options), props, decorators);
    });
  },
  ref: /* @__PURE__ */ createDecoratorAnnotation(observableRefAnnotation),
  shallow: /* @__PURE__ */ createDecoratorAnnotation(observableShallowAnnotation),
  deep: observableDecoratorAnnotation,
  struct: /* @__PURE__ */ createDecoratorAnnotation(observableStructAnnotation)
};
var observable = /* @__PURE__ */ assign$1(createObservable, observableFactories);
var COMPUTED = "computed";
var COMPUTED_STRUCT = "computed.struct";
var computedAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED);
var computedStructAnnotation = /* @__PURE__ */ createComputedAnnotation(COMPUTED_STRUCT, {
  equals: comparer.structural
});
var computed = function computed2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return computedAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, computedAnnotation);
  }
  if (isPlainObject(arg1)) {
    return createDecoratorAnnotation(createComputedAnnotation(COMPUTED, arg1));
  }
  var opts = isPlainObject(arg2) ? arg2 : {};
  opts.get = arg1;
  opts.name || (opts.name = arg1.name || "");
  return new ComputedValue(opts);
};
Object.assign(computed, computedAnnotation);
computed.struct = /* @__PURE__ */ createDecoratorAnnotation(computedStructAnnotation);
var _getDescriptor$config, _getDescriptor;
var currentActionId = 0;
var nextActionId = 1;
var isFunctionNameConfigurable = (_getDescriptor$config = (_getDescriptor = /* @__PURE__ */ getDescriptor(function() {
}, "name")) == null ? void 0 : _getDescriptor.configurable) != null ? _getDescriptor$config : false;
var tmpNameDescriptor = {
  value: "action",
  configurable: true,
  writable: false,
  enumerable: false
};
function createAction(actionName, fn, autoAction2, ref) {
  if (autoAction2 === void 0) {
    autoAction2 = false;
  }
  function res() {
    return executeAction(actionName, autoAction2, fn, ref || this, arguments);
  }
  res.isMobxAction = true;
  if (isFunctionNameConfigurable) {
    tmpNameDescriptor.value = actionName;
    defineProperty(res, "name", tmpNameDescriptor);
  }
  return res;
}
function executeAction(actionName, canRunAsDerivation, fn, scope, args) {
  var runInfo = _startAction(actionName, canRunAsDerivation);
  try {
    return fn.apply(scope, args);
  } catch (err) {
    runInfo.error_ = err;
    throw err;
  } finally {
    _endAction(runInfo);
  }
}
function _startAction(actionName, canRunAsDerivation, scope, args) {
  var notifySpy_ = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
  var startTime_ = 0;
  var prevDerivation_ = globalState.trackingDerivation;
  var runAsAction = !canRunAsDerivation || !prevDerivation_;
  startBatch();
  var prevAllowStateChanges_ = globalState.allowStateChanges;
  if (runAsAction) {
    untrackedStart();
    prevAllowStateChanges_ = allowStateChangesStart(true);
  }
  var prevAllowStateReads_ = allowStateReadsStart(true);
  var runInfo = {
    runAsAction_: runAsAction,
    prevDerivation_,
    prevAllowStateChanges_,
    prevAllowStateReads_,
    notifySpy_,
    startTime_,
    actionId_: nextActionId++,
    parentActionId_: currentActionId
  };
  currentActionId = runInfo.actionId_;
  return runInfo;
}
function _endAction(runInfo) {
  if (currentActionId !== runInfo.actionId_) {
    die(30);
  }
  currentActionId = runInfo.parentActionId_;
  if (runInfo.error_ !== void 0) {
    globalState.suppressReactionErrors = true;
  }
  allowStateChangesEnd(runInfo.prevAllowStateChanges_);
  allowStateReadsEnd(runInfo.prevAllowStateReads_);
  endBatch();
  if (runInfo.runAsAction_) {
    untrackedEnd(runInfo.prevDerivation_);
  }
  globalState.suppressReactionErrors = false;
}
function allowStateChangesStart(allowStateChanges) {
  var prev = globalState.allowStateChanges;
  globalState.allowStateChanges = allowStateChanges;
  return prev;
}
function allowStateChangesEnd(prev) {
  globalState.allowStateChanges = prev;
}
var _Symbol$toPrimitive;
_Symbol$toPrimitive = Symbol.toPrimitive;
var ObservableValue = /* @__PURE__ */ function(_Atom) {
  _inheritsLoose(ObservableValue2, _Atom);
  function ObservableValue2(value, enhancer, name_, notifySpy, equals) {
    var _this;
    if (name_ === void 0) {
      name_ = "ObservableValue";
    }
    if (equals === void 0) {
      equals = comparer["default"];
    }
    _this = _Atom.call(this, name_) || this;
    _this.enhancer = void 0;
    _this.name_ = void 0;
    _this.equals = void 0;
    _this.hasUnreportedChange_ = false;
    _this.interceptors_ = void 0;
    _this.changeListeners_ = void 0;
    _this.value_ = void 0;
    _this.dehancer = void 0;
    _this.enhancer = enhancer;
    _this.name_ = name_;
    _this.equals = equals;
    _this.value_ = enhancer(value, void 0, name_);
    return _this;
  }
  var _proto = ObservableValue2.prototype;
  _proto.dehanceValue = function dehanceValue(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.set = function set4(newValue) {
    this.value_;
    newValue = this.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      this.setNewValue_(newValue);
    }
  };
  _proto.prepareNewValue_ = function prepareNewValue_(newValue) {
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this,
        type: UPDATE,
        newValue
      });
      if (!change) {
        return globalState.UNCHANGED;
      }
      newValue = change.newValue;
    }
    newValue = this.enhancer(newValue, this.value_, this.name_);
    return this.equals(this.value_, newValue) ? globalState.UNCHANGED : newValue;
  };
  _proto.setNewValue_ = function setNewValue_(newValue) {
    var oldValue = this.value_;
    this.value_ = newValue;
    this.reportChanged();
    if (hasListeners(this)) {
      notifyListeners(this, {
        type: UPDATE,
        object: this,
        newValue,
        oldValue
      });
    }
  };
  _proto.get = function get3() {
    this.reportObserved();
    return this.dehanceValue(this.value_);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately) {
      listener({
        observableKind: "value",
        debugObjectName: this.name_,
        object: this,
        type: UPDATE,
        newValue: this.value_,
        oldValue: void 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.raw = function raw() {
    return this.value_;
  };
  _proto.toJSON = function toJSON2() {
    return this.get();
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.value_ + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive] = function() {
    return this.valueOf();
  };
  return ObservableValue2;
}(Atom);
var _Symbol$toPrimitive$1;
_Symbol$toPrimitive$1 = Symbol.toPrimitive;
var ComputedValue = /* @__PURE__ */ function() {
  function ComputedValue2(options) {
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.observing_ = [];
    this.newObserving_ = null;
    this.isBeingObserved_ = false;
    this.isPendingUnobservation_ = false;
    this.observers_ = /* @__PURE__ */ new Set();
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.lastAccessedBy_ = 0;
    this.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    this.unboundDepsCount_ = 0;
    this.value_ = new CaughtException(null);
    this.name_ = void 0;
    this.triggeredBy_ = void 0;
    this.isComputing_ = false;
    this.isRunningSetter_ = false;
    this.derivation = void 0;
    this.setter_ = void 0;
    this.isTracing_ = TraceMode.NONE;
    this.scope_ = void 0;
    this.equals_ = void 0;
    this.requiresReaction_ = void 0;
    this.keepAlive_ = void 0;
    this.onBOL = void 0;
    this.onBUOL = void 0;
    if (!options.get) {
      die(31);
    }
    this.derivation = options.get;
    this.name_ = options.name || "ComputedValue";
    if (options.set) {
      this.setter_ = createAction("ComputedValue-setter", options.set);
    }
    this.equals_ = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer["default"]);
    this.scope_ = options.context;
    this.requiresReaction_ = options.requiresReaction;
    this.keepAlive_ = !!options.keepAlive;
  }
  var _proto = ComputedValue2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    propagateMaybeChanged(this);
  };
  _proto.onBO = function onBO() {
    if (this.onBOL) {
      this.onBOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.onBUO = function onBUO() {
    if (this.onBUOL) {
      this.onBUOL.forEach(function(listener) {
        return listener();
      });
    }
  };
  _proto.get = function get3() {
    if (this.isComputing_) {
      die(32, this.name_, this.derivation);
    }
    if (globalState.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_) {
      if (shouldCompute(this)) {
        this.warnAboutUntrackedRead_();
        startBatch();
        this.value_ = this.computeValue_(false);
        endBatch();
      }
    } else {
      reportObserved(this);
      if (shouldCompute(this)) {
        var prevTrackingContext = globalState.trackingContext;
        if (this.keepAlive_ && !prevTrackingContext) {
          globalState.trackingContext = this;
        }
        if (this.trackAndCompute()) {
          propagateChangeConfirmed(this);
        }
        globalState.trackingContext = prevTrackingContext;
      }
    }
    var result = this.value_;
    if (isCaughtException(result)) {
      throw result.cause;
    }
    return result;
  };
  _proto.set = function set4(value) {
    if (this.setter_) {
      if (this.isRunningSetter_) {
        die(33, this.name_);
      }
      this.isRunningSetter_ = true;
      try {
        this.setter_.call(this.scope_, value);
      } finally {
        this.isRunningSetter_ = false;
      }
    } else {
      die(34, this.name_);
    }
  };
  _proto.trackAndCompute = function trackAndCompute() {
    var oldValue = this.value_;
    var wasSuspended = (
      /* see #1208 */
      this.dependenciesState_ === IDerivationState_.NOT_TRACKING_
    );
    var newValue = this.computeValue_(true);
    var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals_(oldValue, newValue);
    if (changed) {
      this.value_ = newValue;
    }
    return changed;
  };
  _proto.computeValue_ = function computeValue_(track) {
    this.isComputing_ = true;
    var prev = allowStateChangesStart(false);
    var res;
    if (track) {
      res = trackDerivedFunction(this, this.derivation, this.scope_);
    } else {
      if (globalState.disableErrorBoundaries === true) {
        res = this.derivation.call(this.scope_);
      } else {
        try {
          res = this.derivation.call(this.scope_);
        } catch (e2) {
          res = new CaughtException(e2);
        }
      }
    }
    allowStateChangesEnd(prev);
    this.isComputing_ = false;
    return res;
  };
  _proto.suspend_ = function suspend_() {
    if (!this.keepAlive_) {
      clearObserving(this);
      this.value_ = void 0;
    }
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    var _this = this;
    var firstTime = true;
    var prevValue = void 0;
    return autorun(function() {
      var newValue = _this.get();
      if (!firstTime || fireImmediately) {
        var prevU = untrackedStart();
        listener({
          observableKind: "computed",
          debugObjectName: _this.name_,
          type: UPDATE,
          object: _this,
          newValue,
          oldValue: prevValue
        });
        untrackedEnd(prevU);
      }
      firstTime = false;
      prevValue = newValue;
    });
  };
  _proto.warnAboutUntrackedRead_ = function warnAboutUntrackedRead_() {
    {
      return;
    }
  };
  _proto.toString = function toString2() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  };
  _proto.valueOf = function valueOf() {
    return toPrimitive(this.get());
  };
  _proto[_Symbol$toPrimitive$1] = function() {
    return this.valueOf();
  };
  return ComputedValue2;
}();
var isComputedValue = /* @__PURE__ */ createInstanceofPredicate("ComputedValue", ComputedValue);
var IDerivationState_;
(function(IDerivationState_2) {
  IDerivationState_2[IDerivationState_2["NOT_TRACKING_"] = -1] = "NOT_TRACKING_";
  IDerivationState_2[IDerivationState_2["UP_TO_DATE_"] = 0] = "UP_TO_DATE_";
  IDerivationState_2[IDerivationState_2["POSSIBLY_STALE_"] = 1] = "POSSIBLY_STALE_";
  IDerivationState_2[IDerivationState_2["STALE_"] = 2] = "STALE_";
})(IDerivationState_ || (IDerivationState_ = {}));
var TraceMode;
(function(TraceMode2) {
  TraceMode2[TraceMode2["NONE"] = 0] = "NONE";
  TraceMode2[TraceMode2["LOG"] = 1] = "LOG";
  TraceMode2[TraceMode2["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = function CaughtException2(cause) {
  this.cause = void 0;
  this.cause = cause;
};
function isCaughtException(e2) {
  return e2 instanceof CaughtException;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState_) {
    case IDerivationState_.UP_TO_DATE_:
      return false;
    case IDerivationState_.NOT_TRACKING_:
    case IDerivationState_.STALE_:
      return true;
    case IDerivationState_.POSSIBLY_STALE_: {
      var prevAllowStateReads = allowStateReadsStart(true);
      var prevUntracked = untrackedStart();
      var obs = derivation.observing_, l2 = obs.length;
      for (var i2 = 0; i2 < l2; i2++) {
        var obj = obs[i2];
        if (isComputedValue(obj)) {
          if (globalState.disableErrorBoundaries) {
            obj.get();
          } else {
            try {
              obj.get();
            } catch (e2) {
              untrackedEnd(prevUntracked);
              allowStateReadsEnd(prevAllowStateReads);
              return true;
            }
          }
          if (derivation.dependenciesState_ === IDerivationState_.STALE_) {
            untrackedEnd(prevUntracked);
            allowStateReadsEnd(prevAllowStateReads);
            return true;
          }
        }
      }
      changeDependenciesStateTo0(derivation);
      untrackedEnd(prevUntracked);
      allowStateReadsEnd(prevAllowStateReads);
      return false;
    }
  }
}
function checkIfStateModificationsAreAllowed(atom) {
  {
    return;
  }
}
function trackDerivedFunction(derivation, f2, context) {
  var prevAllowStateReads = allowStateReadsStart(true);
  changeDependenciesStateTo0(derivation);
  derivation.newObserving_ = new Array(derivation.observing_.length + 100);
  derivation.unboundDepsCount_ = 0;
  derivation.runId_ = ++globalState.runId;
  var prevTracking = globalState.trackingDerivation;
  globalState.trackingDerivation = derivation;
  globalState.inBatch++;
  var result;
  if (globalState.disableErrorBoundaries === true) {
    result = f2.call(context);
  } else {
    try {
      result = f2.call(context);
    } catch (e2) {
      result = new CaughtException(e2);
    }
  }
  globalState.inBatch--;
  globalState.trackingDerivation = prevTracking;
  bindDependencies(derivation);
  allowStateReadsEnd(prevAllowStateReads);
  return result;
}
function bindDependencies(derivation) {
  var prevObserving = derivation.observing_;
  var observing = derivation.observing_ = derivation.newObserving_;
  var lowestNewObservingDerivationState = IDerivationState_.UP_TO_DATE_;
  var i0 = 0, l2 = derivation.unboundDepsCount_;
  for (var i2 = 0; i2 < l2; i2++) {
    var dep2 = observing[i2];
    if (dep2.diffValue_ === 0) {
      dep2.diffValue_ = 1;
      if (i0 !== i2) {
        observing[i0] = dep2;
      }
      i0++;
    }
    if (dep2.dependenciesState_ > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep2.dependenciesState_;
    }
  }
  observing.length = i0;
  derivation.newObserving_ = null;
  l2 = prevObserving.length;
  while (l2--) {
    var _dep = prevObserving[l2];
    if (_dep.diffValue_ === 0) {
      removeObserver(_dep, derivation);
    }
    _dep.diffValue_ = 0;
  }
  while (i0--) {
    var _dep2 = observing[i0];
    if (_dep2.diffValue_ === 1) {
      _dep2.diffValue_ = 0;
      addObserver(_dep2, derivation);
    }
  }
  if (lowestNewObservingDerivationState !== IDerivationState_.UP_TO_DATE_) {
    derivation.dependenciesState_ = lowestNewObservingDerivationState;
    derivation.onBecomeStale_();
  }
}
function clearObserving(derivation) {
  var obs = derivation.observing_;
  derivation.observing_ = [];
  var i2 = obs.length;
  while (i2--) {
    removeObserver(obs[i2], derivation);
  }
  derivation.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
}
function untracked(action2) {
  var prev = untrackedStart();
  try {
    return action2();
  } finally {
    untrackedEnd(prev);
  }
}
function untrackedStart() {
  var prev = globalState.trackingDerivation;
  globalState.trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
  var prev = globalState.allowStateReads;
  globalState.allowStateReads = allowStateReads;
  return prev;
}
function allowStateReadsEnd(prev) {
  globalState.allowStateReads = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
    return;
  }
  derivation.dependenciesState_ = IDerivationState_.UP_TO_DATE_;
  var obs = derivation.observing_;
  var i2 = obs.length;
  while (i2--) {
    obs[i2].lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
  }
}
var MobXGlobals = function MobXGlobals2() {
  this.version = 6;
  this.UNCHANGED = {};
  this.trackingDerivation = null;
  this.trackingContext = null;
  this.runId = 0;
  this.mobxGuid = 0;
  this.inBatch = 0;
  this.batchId = Number.MIN_SAFE_INTEGER;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.allowStateChanges = false;
  this.allowStateReads = true;
  this.enforceActions = true;
  this.spyListeners = [];
  this.globalReactionErrorHandlers = [];
  this.computedRequiresReaction = false;
  this.reactionRequiresObservable = false;
  this.observableRequiresReaction = false;
  this.disableErrorBoundaries = false;
  this.suppressReactionErrors = false;
  this.useProxies = true;
  this.verifyProxies = false;
  this.safeDescriptors = true;
  this.stateVersion = Number.MIN_SAFE_INTEGER;
};
var canMergeGlobalState = true;
var globalState = /* @__PURE__ */ function() {
  var global2 = /* @__PURE__ */ getGlobal();
  if (global2.__mobxInstanceCount > 0 && !global2.__mobxGlobals) {
    canMergeGlobalState = false;
  }
  if (global2.__mobxGlobals && global2.__mobxGlobals.version !== new MobXGlobals().version) {
    canMergeGlobalState = false;
  }
  if (!canMergeGlobalState) {
    setTimeout(function() {
      {
        die(35);
      }
    }, 1);
    return new MobXGlobals();
  } else if (global2.__mobxGlobals) {
    global2.__mobxInstanceCount += 1;
    if (!global2.__mobxGlobals.UNCHANGED) {
      global2.__mobxGlobals.UNCHANGED = {};
    }
    return global2.__mobxGlobals;
  } else {
    global2.__mobxInstanceCount = 1;
    return global2.__mobxGlobals = /* @__PURE__ */ new MobXGlobals();
  }
}();
function addObserver(observable2, node) {
  observable2.observers_.add(node);
  if (observable2.lowestObserverState_ > node.dependenciesState_) {
    observable2.lowestObserverState_ = node.dependenciesState_;
  }
}
function removeObserver(observable2, node) {
  observable2.observers_["delete"](node);
  if (observable2.observers_.size === 0) {
    queueForUnobservation(observable2);
  }
}
function queueForUnobservation(observable2) {
  if (observable2.isPendingUnobservation_ === false) {
    observable2.isPendingUnobservation_ = true;
    globalState.pendingUnobservations.push(observable2);
  }
}
function startBatch() {
  if (globalState.inBatch === 0) {
    globalState.batchId = globalState.batchId < Number.MAX_SAFE_INTEGER ? globalState.batchId + 1 : Number.MIN_SAFE_INTEGER;
  }
  globalState.inBatch++;
}
function endBatch() {
  if (--globalState.inBatch === 0) {
    runReactions();
    var list = globalState.pendingUnobservations;
    for (var i2 = 0; i2 < list.length; i2++) {
      var observable2 = list[i2];
      observable2.isPendingUnobservation_ = false;
      if (observable2.observers_.size === 0) {
        if (observable2.isBeingObserved_) {
          observable2.isBeingObserved_ = false;
          observable2.onBUO();
        }
        if (observable2 instanceof ComputedValue) {
          observable2.suspend_();
        }
      }
    }
    globalState.pendingUnobservations = [];
  }
}
function reportObserved(observable2) {
  var derivation = globalState.trackingDerivation;
  if (derivation !== null) {
    if (derivation.runId_ !== observable2.lastAccessedBy_) {
      observable2.lastAccessedBy_ = derivation.runId_;
      derivation.newObserving_[derivation.unboundDepsCount_++] = observable2;
      if (!observable2.isBeingObserved_ && globalState.trackingContext) {
        observable2.isBeingObserved_ = true;
        observable2.onBO();
      }
    }
    return observable2.isBeingObserved_;
  } else if (observable2.observers_.size === 0 && globalState.inBatch > 0) {
    queueForUnobservation(observable2);
  }
  return false;
}
function propagateChanged(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d2.onBecomeStale_();
    }
    d2.dependenciesState_ = IDerivationState_.STALE_;
  });
}
function propagateChangeConfirmed(observable2) {
  if (observable2.lowestObserverState_ === IDerivationState_.STALE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.POSSIBLY_STALE_) {
      d2.dependenciesState_ = IDerivationState_.STALE_;
    } else if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      observable2.lowestObserverState_ = IDerivationState_.UP_TO_DATE_;
    }
  });
}
function propagateMaybeChanged(observable2) {
  if (observable2.lowestObserverState_ !== IDerivationState_.UP_TO_DATE_) {
    return;
  }
  observable2.lowestObserverState_ = IDerivationState_.POSSIBLY_STALE_;
  observable2.observers_.forEach(function(d2) {
    if (d2.dependenciesState_ === IDerivationState_.UP_TO_DATE_) {
      d2.dependenciesState_ = IDerivationState_.POSSIBLY_STALE_;
      d2.onBecomeStale_();
    }
  });
}
var Reaction = /* @__PURE__ */ function() {
  function Reaction2(name_, onInvalidate_, errorHandler_, requiresObservable_) {
    if (name_ === void 0) {
      name_ = "Reaction";
    }
    this.name_ = void 0;
    this.onInvalidate_ = void 0;
    this.errorHandler_ = void 0;
    this.requiresObservable_ = void 0;
    this.observing_ = [];
    this.newObserving_ = [];
    this.dependenciesState_ = IDerivationState_.NOT_TRACKING_;
    this.diffValue_ = 0;
    this.runId_ = 0;
    this.unboundDepsCount_ = 0;
    this.isDisposed_ = false;
    this.isScheduled_ = false;
    this.isTrackPending_ = false;
    this.isRunning_ = false;
    this.isTracing_ = TraceMode.NONE;
    this.name_ = name_;
    this.onInvalidate_ = onInvalidate_;
    this.errorHandler_ = errorHandler_;
    this.requiresObservable_ = requiresObservable_;
  }
  var _proto = Reaction2.prototype;
  _proto.onBecomeStale_ = function onBecomeStale_() {
    this.schedule_();
  };
  _proto.schedule_ = function schedule_() {
    if (!this.isScheduled_) {
      this.isScheduled_ = true;
      globalState.pendingReactions.push(this);
      runReactions();
    }
  };
  _proto.isScheduled = function isScheduled() {
    return this.isScheduled_;
  };
  _proto.runReaction_ = function runReaction_() {
    if (!this.isDisposed_) {
      startBatch();
      this.isScheduled_ = false;
      var prev = globalState.trackingContext;
      globalState.trackingContext = this;
      if (shouldCompute(this)) {
        this.isTrackPending_ = true;
        try {
          this.onInvalidate_();
          if ({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" && this.isTrackPending_ && isSpyEnabled())
            ;
        } catch (e2) {
          this.reportExceptionInDerivation_(e2);
        }
      }
      globalState.trackingContext = prev;
      endBatch();
    }
  };
  _proto.track = function track(fn) {
    if (this.isDisposed_) {
      return;
    }
    startBatch();
    this.isRunning_ = true;
    var prevReaction = globalState.trackingContext;
    globalState.trackingContext = this;
    var result = trackDerivedFunction(this, fn, void 0);
    globalState.trackingContext = prevReaction;
    this.isRunning_ = false;
    this.isTrackPending_ = false;
    if (this.isDisposed_) {
      clearObserving(this);
    }
    if (isCaughtException(result)) {
      this.reportExceptionInDerivation_(result.cause);
    }
    endBatch();
  };
  _proto.reportExceptionInDerivation_ = function reportExceptionInDerivation_(error) {
    var _this = this;
    if (this.errorHandler_) {
      this.errorHandler_(error, this);
      return;
    }
    if (globalState.disableErrorBoundaries) {
      throw error;
    }
    var message = "[mobx] uncaught error in '" + this + "'";
    if (!globalState.suppressReactionErrors) {
      console.error(message, error);
    }
    globalState.globalReactionErrorHandlers.forEach(function(f2) {
      return f2(error, _this);
    });
  };
  _proto.dispose = function dispose() {
    if (!this.isDisposed_) {
      this.isDisposed_ = true;
      if (!this.isRunning_) {
        startBatch();
        clearObserving(this);
        endBatch();
      }
    }
  };
  _proto.getDisposer_ = function getDisposer_(abortSignal) {
    var _this2 = this;
    var dispose = function dispose2() {
      _this2.dispose();
      abortSignal == null ? void 0 : abortSignal.removeEventListener == null ? void 0 : abortSignal.removeEventListener("abort", dispose2);
    };
    abortSignal == null ? void 0 : abortSignal.addEventListener == null ? void 0 : abortSignal.addEventListener("abort", dispose);
    dispose[$mobx] = this;
    return dispose;
  };
  _proto.toString = function toString2() {
    return "Reaction[" + this.name_ + "]";
  };
  _proto.trace = function trace$1(enterBreakPoint) {
  };
  return Reaction2;
}();
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler2(f2) {
  return f2();
};
function runReactions() {
  if (globalState.inBatch > 0 || globalState.isRunningReactions) {
    return;
  }
  reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
  globalState.isRunningReactions = true;
  var allReactions = globalState.pendingReactions;
  var iterations = 0;
  while (allReactions.length > 0) {
    if (++iterations === MAX_REACTION_ITERATIONS) {
      console.error("[mobx] cycle in reaction: " + allReactions[0]);
      allReactions.splice(0);
    }
    var remainingReactions = allReactions.splice(0);
    for (var i2 = 0, l2 = remainingReactions.length; i2 < l2; i2++) {
      remainingReactions[i2].runReaction_();
    }
  }
  globalState.isRunningReactions = false;
}
var isReaction = /* @__PURE__ */ createInstanceofPredicate("Reaction", Reaction);
function isSpyEnabled() {
  return { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
}
function spyReport(event) {
  {
    return;
  }
}
function spyReportStart(event) {
  {
    return;
  }
}
function spyReportEnd(change) {
  {
    return;
  }
}
function spy(listener) {
  {
    console.warn("[mobx.spy] Is a no-op in production builds");
    return function() {
    };
  }
}
var ACTION = "action";
var ACTION_BOUND = "action.bound";
var AUTOACTION = "autoAction";
var AUTOACTION_BOUND = "autoAction.bound";
var DEFAULT_ACTION_NAME = "<unnamed action>";
var actionAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION);
var actionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(ACTION_BOUND, {
  bound: true
});
var autoActionAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION, {
  autoAction: true
});
var autoActionBoundAnnotation = /* @__PURE__ */ createActionAnnotation(AUTOACTION_BOUND, {
  autoAction: true,
  bound: true
});
function createActionFactory(autoAction2) {
  var res = function action2(arg1, arg2) {
    if (isFunction(arg1)) {
      return createAction(arg1.name || DEFAULT_ACTION_NAME, arg1, autoAction2);
    }
    if (isFunction(arg2)) {
      return createAction(arg1, arg2, autoAction2);
    }
    if (is20223Decorator(arg2)) {
      return (autoAction2 ? autoActionAnnotation : actionAnnotation).decorate_20223_(arg1, arg2);
    }
    if (isStringish(arg2)) {
      return storeAnnotation(arg1, arg2, autoAction2 ? autoActionAnnotation : actionAnnotation);
    }
    if (isStringish(arg1)) {
      return createDecoratorAnnotation(createActionAnnotation(autoAction2 ? AUTOACTION : ACTION, {
        name: arg1,
        autoAction: autoAction2
      }));
    }
  };
  return res;
}
var action = /* @__PURE__ */ createActionFactory(false);
Object.assign(action, actionAnnotation);
var autoAction = /* @__PURE__ */ createActionFactory(true);
Object.assign(autoAction, autoActionAnnotation);
action.bound = /* @__PURE__ */ createDecoratorAnnotation(actionBoundAnnotation);
autoAction.bound = /* @__PURE__ */ createDecoratorAnnotation(autoActionBoundAnnotation);
function isAction(thing) {
  return isFunction(thing) && thing.isMobxAction === true;
}
function autorun(view, opts) {
  var _opts$name, _opts, _opts2, _opts2$signal, _opts3;
  if (opts === void 0) {
    opts = EMPTY_OBJECT;
  }
  var name = (_opts$name = (_opts = opts) == null ? void 0 : _opts.name) != null ? _opts$name : "Autorun";
  var runSync = !opts.scheduler && !opts.delay;
  var reaction2;
  if (runSync) {
    reaction2 = new Reaction(name, function() {
      this.track(reactionRunner);
    }, opts.onError, opts.requiresObservable);
  } else {
    var scheduler = createSchedulerFromOptions(opts);
    var isScheduled = false;
    reaction2 = new Reaction(name, function() {
      if (!isScheduled) {
        isScheduled = true;
        scheduler(function() {
          isScheduled = false;
          if (!reaction2.isDisposed_) {
            reaction2.track(reactionRunner);
          }
        });
      }
    }, opts.onError, opts.requiresObservable);
  }
  function reactionRunner() {
    view(reaction2);
  }
  if (!((_opts2 = opts) != null && (_opts2$signal = _opts2.signal) != null && _opts2$signal.aborted)) {
    reaction2.schedule_();
  }
  return reaction2.getDisposer_((_opts3 = opts) == null ? void 0 : _opts3.signal);
}
var run = function run2(f2) {
  return f2();
};
function createSchedulerFromOptions(opts) {
  return opts.scheduler ? opts.scheduler : opts.delay ? function(f2) {
    return setTimeout(f2, opts.delay);
  } : run;
}
var ON_BECOME_OBSERVED = "onBO";
var ON_BECOME_UNOBSERVED = "onBUO";
function onBecomeObserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_OBSERVED, thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
  return interceptHook(ON_BECOME_UNOBSERVED, thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
  var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
  var cb = isFunction(arg3) ? arg3 : arg2;
  var listenersKey = hook + "L";
  if (atom[listenersKey]) {
    atom[listenersKey].add(cb);
  } else {
    atom[listenersKey] = /* @__PURE__ */ new Set([cb]);
  }
  return function() {
    var hookListeners = atom[listenersKey];
    if (hookListeners) {
      hookListeners["delete"](cb);
      if (hookListeners.size === 0) {
        delete atom[listenersKey];
      }
    }
  };
}
function extendObservable(target, properties, annotations, options) {
  var descriptors = getOwnPropertyDescriptors(properties);
  initObservable(function() {
    var adm = asObservableObject(target, options)[$mobx];
    ownKeys(descriptors).forEach(function(key) {
      adm.extend_(
        key,
        descriptors[key],
        // must pass "undefined" for { key: undefined }
        !annotations ? true : key in annotations ? annotations[key] : true
      );
    });
  });
  return target;
}
var generatorId = 0;
function FlowCancellationError() {
  this.message = "FLOW_CANCELLED";
}
FlowCancellationError.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var flowAnnotation = /* @__PURE__ */ createFlowAnnotation("flow");
var flowBoundAnnotation = /* @__PURE__ */ createFlowAnnotation("flow.bound", {
  bound: true
});
var flow = /* @__PURE__ */ Object.assign(function flow2(arg1, arg2) {
  if (is20223Decorator(arg2)) {
    return flowAnnotation.decorate_20223_(arg1, arg2);
  }
  if (isStringish(arg2)) {
    return storeAnnotation(arg1, arg2, flowAnnotation);
  }
  var generator = arg1;
  var name = generator.name || "<unnamed flow>";
  var res = function res2() {
    var ctx = this;
    var args = arguments;
    var runId = ++generatorId;
    var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
    var rejector;
    var pendingPromise = void 0;
    var promise = new Promise(function(resolve, reject) {
      var stepId = 0;
      rejector = reject;
      function onFulfilled(res3) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res3);
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function onRejected(err) {
        pendingPromise = void 0;
        var ret;
        try {
          ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen["throw"]).call(gen, err);
        } catch (e2) {
          return reject(e2);
        }
        next(ret);
      }
      function next(ret) {
        if (isFunction(ret == null ? void 0 : ret.then)) {
          ret.then(next, reject);
          return;
        }
        if (ret.done) {
          return resolve(ret.value);
        }
        pendingPromise = Promise.resolve(ret.value);
        return pendingPromise.then(onFulfilled, onRejected);
      }
      onFulfilled(void 0);
    });
    promise.cancel = action(name + " - runid: " + runId + " - cancel", function() {
      try {
        if (pendingPromise) {
          cancelPromise(pendingPromise);
        }
        var _res = gen["return"](void 0);
        var yieldedPromise = Promise.resolve(_res.value);
        yieldedPromise.then(noop, noop);
        cancelPromise(yieldedPromise);
        rejector(new FlowCancellationError());
      } catch (e2) {
        rejector(e2);
      }
    });
    return promise;
  };
  res.isMobXFlow = true;
  return res;
}, flowAnnotation);
flow.bound = /* @__PURE__ */ createDecoratorAnnotation(flowBoundAnnotation);
function cancelPromise(promise) {
  if (isFunction(promise.cancel)) {
    promise.cancel();
  }
}
function isFlow(fn) {
  return (fn == null ? void 0 : fn.isMobXFlow) === true;
}
function _isObservable(value, property) {
  if (!value) {
    return false;
  }
  if (property !== void 0) {
    if (isObservableObject(value)) {
      return value[$mobx].values_.has(property);
    }
    return false;
  }
  return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable$1(value) {
  return _isObservable(value);
}
function transaction(action2, thisArg) {
  if (thisArg === void 0) {
    thisArg = void 0;
  }
  startBatch();
  try {
    return action2.apply(thisArg);
  } finally {
    endBatch();
  }
}
function getAdm(target) {
  return target[$mobx];
}
var objectProxyTraps = {
  has: function has(target, name) {
    return getAdm(target).has_(name);
  },
  get: function get(target, name) {
    return getAdm(target).get_(name);
  },
  set: function set2(target, name, value) {
    var _getAdm$set_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$set_ = getAdm(target).set_(name, value, true)) != null ? _getAdm$set_ : true;
  },
  deleteProperty: function deleteProperty(target, name) {
    var _getAdm$delete_;
    if (!isStringish(name)) {
      return false;
    }
    return (_getAdm$delete_ = getAdm(target).delete_(name, true)) != null ? _getAdm$delete_ : true;
  },
  defineProperty: function defineProperty2(target, name, descriptor) {
    var _getAdm$definePropert;
    return (_getAdm$definePropert = getAdm(target).defineProperty_(name, descriptor)) != null ? _getAdm$definePropert : true;
  },
  ownKeys: function ownKeys2(target) {
    return getAdm(target).ownKeys_();
  },
  preventExtensions: function preventExtensions(target) {
    die(13);
  }
};
function asDynamicObservableObject(target, options) {
  var _target$$mobx, _target$$mobx$proxy_;
  assertProxies();
  target = asObservableObject(target, options);
  return (_target$$mobx$proxy_ = (_target$$mobx = target[$mobx]).proxy_) != null ? _target$$mobx$proxy_ : _target$$mobx.proxy_ = new Proxy(target, objectProxyTraps);
}
function hasInterceptors(interceptable) {
  return interceptable.interceptors_ !== void 0 && interceptable.interceptors_.length > 0;
}
function registerInterceptor(interceptable, handler) {
  var interceptors = interceptable.interceptors_ || (interceptable.interceptors_ = []);
  interceptors.push(handler);
  return once(function() {
    var idx = interceptors.indexOf(handler);
    if (idx !== -1) {
      interceptors.splice(idx, 1);
    }
  });
}
function interceptChange(interceptable, change) {
  var prevU = untrackedStart();
  try {
    var interceptors = [].concat(interceptable.interceptors_ || []);
    for (var i2 = 0, l2 = interceptors.length; i2 < l2; i2++) {
      change = interceptors[i2](change);
      if (change && !change.type) {
        die(14);
      }
      if (!change) {
        break;
      }
    }
    return change;
  } finally {
    untrackedEnd(prevU);
  }
}
function hasListeners(listenable) {
  return listenable.changeListeners_ !== void 0 && listenable.changeListeners_.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.changeListeners_ || (listenable.changeListeners_ = []);
  listeners.push(handler);
  return once(function() {
    var idx = listeners.indexOf(handler);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = untrackedStart();
  var listeners = listenable.changeListeners_;
  if (!listeners) {
    return;
  }
  listeners = listeners.slice();
  for (var i2 = 0, l2 = listeners.length; i2 < l2; i2++) {
    listeners[i2](change);
  }
  untrackedEnd(prevU);
}
function makeObservable(target, annotations, options) {
  initObservable(function() {
    var _annotations;
    var adm = asObservableObject(target, options)[$mobx];
    if ({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" && annotations && target[storedAnnotationsSymbol])
      ;
    (_annotations = annotations) != null ? _annotations : annotations = collectStoredAnnotations(target);
    ownKeys(annotations).forEach(function(key) {
      return adm.make_(key, annotations[key]);
    });
  });
  return target;
}
var SPLICE = "splice";
var UPDATE = "update";
var MAX_SPLICE_SIZE = 1e4;
var arrayTraps = {
  get: function get2(target, name) {
    var adm = target[$mobx];
    if (name === $mobx) {
      return adm;
    }
    if (name === "length") {
      return adm.getArrayLength_();
    }
    if (typeof name === "string" && !isNaN(name)) {
      return adm.get_(parseInt(name));
    }
    if (hasProp(arrayExtensions, name)) {
      return arrayExtensions[name];
    }
    return target[name];
  },
  set: function set3(target, name, value) {
    var adm = target[$mobx];
    if (name === "length") {
      adm.setArrayLength_(value);
    }
    if (typeof name === "symbol" || isNaN(name)) {
      target[name] = value;
    } else {
      adm.set_(parseInt(name), value);
    }
    return true;
  },
  preventExtensions: function preventExtensions2() {
    die(15);
  }
};
var ObservableArrayAdministration = /* @__PURE__ */ function() {
  function ObservableArrayAdministration2(name, enhancer, owned_, legacyMode_) {
    if (name === void 0) {
      name = "ObservableArray";
    }
    this.owned_ = void 0;
    this.legacyMode_ = void 0;
    this.atom_ = void 0;
    this.values_ = [];
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.enhancer_ = void 0;
    this.dehancer = void 0;
    this.proxy_ = void 0;
    this.lastKnownLength_ = 0;
    this.owned_ = owned_;
    this.legacyMode_ = legacyMode_;
    this.atom_ = new Atom(name);
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, "ObservableArray[..]");
    };
  }
  var _proto = ObservableArrayAdministration2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.dehanceValues_ = function dehanceValues_(values) {
    if (this.dehancer !== void 0 && values.length > 0) {
      return values.map(this.dehancer);
    }
    return values;
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    if (fireImmediately === void 0) {
      fireImmediately = false;
    }
    if (fireImmediately) {
      listener({
        observableKind: "array",
        object: this.proxy_,
        debugObjectName: this.atom_.name_,
        type: "splice",
        index: 0,
        added: this.values_.slice(),
        addedCount: this.values_.length,
        removed: [],
        removedCount: 0
      });
    }
    return registerListener(this, listener);
  };
  _proto.getArrayLength_ = function getArrayLength_() {
    this.atom_.reportObserved();
    return this.values_.length;
  };
  _proto.setArrayLength_ = function setArrayLength_(newLength) {
    if (typeof newLength !== "number" || isNaN(newLength) || newLength < 0) {
      die("Out of range: " + newLength);
    }
    var currentLength = this.values_.length;
    if (newLength === currentLength) {
      return;
    } else if (newLength > currentLength) {
      var newItems = new Array(newLength - currentLength);
      for (var i2 = 0; i2 < newLength - currentLength; i2++) {
        newItems[i2] = void 0;
      }
      this.spliceWithArray_(currentLength, 0, newItems);
    } else {
      this.spliceWithArray_(newLength, currentLength - newLength);
    }
  };
  _proto.updateArrayLength_ = function updateArrayLength_(oldLength, delta) {
    if (oldLength !== this.lastKnownLength_) {
      die(16);
    }
    this.lastKnownLength_ += delta;
    if (this.legacyMode_ && delta > 0) {
      reserveArrayBuffer(oldLength + delta + 1);
    }
  };
  _proto.spliceWithArray_ = function spliceWithArray_(index, deleteCount, newItems) {
    var _this = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    var length = this.values_.length;
    if (index === void 0) {
      index = 0;
    } else if (index > length) {
      index = length;
    } else if (index < 0) {
      index = Math.max(0, length + index);
    }
    if (arguments.length === 1) {
      deleteCount = length - index;
    } else if (deleteCount === void 0 || deleteCount === null) {
      deleteCount = 0;
    } else {
      deleteCount = Math.max(0, Math.min(deleteCount, length - index));
    }
    if (newItems === void 0) {
      newItems = EMPTY_ARRAY;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_,
        type: SPLICE,
        index,
        removedCount: deleteCount,
        added: newItems
      });
      if (!change) {
        return EMPTY_ARRAY;
      }
      deleteCount = change.removedCount;
      newItems = change.added;
    }
    newItems = newItems.length === 0 ? newItems : newItems.map(function(v2) {
      return _this.enhancer_(v2, void 0);
    });
    if (this.legacyMode_ || { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production") {
      var lengthDelta = newItems.length - deleteCount;
      this.updateArrayLength_(length, lengthDelta);
    }
    var res = this.spliceItemsIntoValues_(index, deleteCount, newItems);
    if (deleteCount !== 0 || newItems.length !== 0) {
      this.notifyArraySplice_(index, newItems, res);
    }
    return this.dehanceValues_(res);
  };
  _proto.spliceItemsIntoValues_ = function spliceItemsIntoValues_(index, deleteCount, newItems) {
    if (newItems.length < MAX_SPLICE_SIZE) {
      var _this$values_;
      return (_this$values_ = this.values_).splice.apply(_this$values_, [index, deleteCount].concat(newItems));
    } else {
      var res = this.values_.slice(index, index + deleteCount);
      var oldItems = this.values_.slice(index + deleteCount);
      this.values_.length += newItems.length - deleteCount;
      for (var i2 = 0; i2 < newItems.length; i2++) {
        this.values_[index + i2] = newItems[i2];
      }
      for (var _i = 0; _i < oldItems.length; _i++) {
        this.values_[index + newItems.length + _i] = oldItems[_i];
      }
      return res;
    }
  };
  _proto.notifyArrayChildUpdate_ = function notifyArrayChildUpdate_(index, newValue, oldValue) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      type: UPDATE,
      debugObjectName: this.atom_.name_,
      index,
      newValue,
      oldValue
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.notifyArraySplice_ = function notifyArraySplice_(index, added, removed) {
    var notifySpy = !this.owned_ && isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: SPLICE,
      index,
      removed,
      added,
      removedCount: removed.length,
      addedCount: added.length
    } : null;
    this.atom_.reportChanged();
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get_ = function get_(index) {
    if (this.legacyMode_ && index >= this.values_.length) {
      console.warn("[mobx] Out of bounds read: " + index);
      return void 0;
    }
    this.atom_.reportObserved();
    return this.dehanceValue_(this.values_[index]);
  };
  _proto.set_ = function set_(index, newValue) {
    var values = this.values_;
    if (this.legacyMode_ && index > values.length) {
      die(17, index, values.length);
    }
    if (index < values.length) {
      checkIfStateModificationsAreAllowed(this.atom_);
      var oldValue = values[index];
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          type: UPDATE,
          object: this.proxy_,
          index,
          newValue
        });
        if (!change) {
          return;
        }
        newValue = change.newValue;
      }
      newValue = this.enhancer_(newValue, oldValue);
      var changed = newValue !== oldValue;
      if (changed) {
        values[index] = newValue;
        this.notifyArrayChildUpdate_(index, newValue, oldValue);
      }
    } else {
      var newItems = new Array(index + 1 - values.length);
      for (var i2 = 0; i2 < newItems.length - 1; i2++) {
        newItems[i2] = void 0;
      }
      newItems[newItems.length - 1] = newValue;
      this.spliceWithArray_(values.length, 0, newItems);
    }
  };
  return ObservableArrayAdministration2;
}();
function createObservableArray(initialValues, enhancer, name, owned) {
  if (name === void 0) {
    name = "ObservableArray";
  }
  if (owned === void 0) {
    owned = false;
  }
  assertProxies();
  return initObservable(function() {
    var adm = new ObservableArrayAdministration(name, enhancer, owned, false);
    addHiddenFinalProp(adm.values_, $mobx, adm);
    var proxy = new Proxy(adm.values_, arrayTraps);
    adm.proxy_ = proxy;
    if (initialValues && initialValues.length) {
      adm.spliceWithArray_(0, 0, initialValues);
    }
    return proxy;
  });
}
var arrayExtensions = {
  clear: function clear() {
    return this.splice(0);
  },
  replace: function replace(newItems) {
    var adm = this[$mobx];
    return adm.spliceWithArray_(0, adm.values_.length, newItems);
  },
  // Used by JSON.stringify
  toJSON: function toJSON() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function splice(index, deleteCount) {
    for (var _len = arguments.length, newItems = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      newItems[_key - 2] = arguments[_key];
    }
    var adm = this[$mobx];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return adm.spliceWithArray_(index);
      case 2:
        return adm.spliceWithArray_(index, deleteCount);
    }
    return adm.spliceWithArray_(index, deleteCount, newItems);
  },
  spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
    return this[$mobx].spliceWithArray_(index, deleteCount, newItems);
  },
  push: function push() {
    var adm = this[$mobx];
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    adm.spliceWithArray_(adm.values_.length, 0, items);
    return adm.values_.length;
  },
  pop: function pop() {
    return this.splice(Math.max(this[$mobx].values_.length - 1, 0), 1)[0];
  },
  shift: function shift() {
    return this.splice(0, 1)[0];
  },
  unshift: function unshift() {
    var adm = this[$mobx];
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }
    adm.spliceWithArray_(0, 0, items);
    return adm.values_.length;
  },
  reverse: function reverse() {
    if (globalState.trackingDerivation) {
      die(37, "reverse");
    }
    this.replace(this.slice().reverse());
    return this;
  },
  sort: function sort() {
    if (globalState.trackingDerivation) {
      die(37, "sort");
    }
    var copy = this.slice();
    copy.sort.apply(copy, arguments);
    this.replace(copy);
    return this;
  },
  remove: function remove(value) {
    var adm = this[$mobx];
    var idx = adm.dehanceValues_(adm.values_).indexOf(value);
    if (idx > -1) {
      this.splice(idx, 1);
      return true;
    }
    return false;
  }
};
addArrayExtension("concat", simpleFunc);
addArrayExtension("flat", simpleFunc);
addArrayExtension("includes", simpleFunc);
addArrayExtension("indexOf", simpleFunc);
addArrayExtension("join", simpleFunc);
addArrayExtension("lastIndexOf", simpleFunc);
addArrayExtension("slice", simpleFunc);
addArrayExtension("toString", simpleFunc);
addArrayExtension("toLocaleString", simpleFunc);
addArrayExtension("every", mapLikeFunc);
addArrayExtension("filter", mapLikeFunc);
addArrayExtension("find", mapLikeFunc);
addArrayExtension("findIndex", mapLikeFunc);
addArrayExtension("flatMap", mapLikeFunc);
addArrayExtension("forEach", mapLikeFunc);
addArrayExtension("map", mapLikeFunc);
addArrayExtension("some", mapLikeFunc);
addArrayExtension("reduce", reduceLikeFunc);
addArrayExtension("reduceRight", reduceLikeFunc);
function addArrayExtension(funcName, funcFactory) {
  if (typeof Array.prototype[funcName] === "function") {
    arrayExtensions[funcName] = funcFactory(funcName);
  }
}
function simpleFunc(funcName) {
  return function() {
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
function mapLikeFunc(funcName) {
  return function(callback, thisArg) {
    var _this2 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    return dehancedValues[funcName](function(element, index) {
      return callback.call(thisArg, element, index, _this2);
    });
  };
}
function reduceLikeFunc(funcName) {
  return function() {
    var _this3 = this;
    var adm = this[$mobx];
    adm.atom_.reportObserved();
    var dehancedValues = adm.dehanceValues_(adm.values_);
    var callback = arguments[0];
    arguments[0] = function(accumulator, currentValue, index) {
      return callback(accumulator, currentValue, index, _this3);
    };
    return dehancedValues[funcName].apply(dehancedValues, arguments);
  };
}
var isObservableArrayAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
  return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}
var _Symbol$iterator, _Symbol$toStringTag;
var ObservableMapMarker = {};
var ADD = "add";
var DELETE$1 = "delete";
_Symbol$iterator = Symbol.iterator;
_Symbol$toStringTag = Symbol.toStringTag;
var ObservableMap = /* @__PURE__ */ function() {
  function ObservableMap2(initialData, enhancer_, name_) {
    var _this = this;
    if (enhancer_ === void 0) {
      enhancer_ = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableMap";
    }
    this.enhancer_ = void 0;
    this.name_ = void 0;
    this[$mobx] = ObservableMapMarker;
    this.data_ = void 0;
    this.hasMap_ = void 0;
    this.keysAtom_ = void 0;
    this.interceptors_ = void 0;
    this.changeListeners_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = enhancer_;
    this.name_ = name_;
    if (!isFunction(Map)) {
      die(18);
    }
    initObservable(function() {
      _this.keysAtom_ = createAtom({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" ? _this.name_ + ".keys()" : "ObservableMap.keys()");
      _this.data_ = /* @__PURE__ */ new Map();
      _this.hasMap_ = /* @__PURE__ */ new Map();
      if (initialData) {
        _this.merge(initialData);
      }
    });
  }
  var _proto = ObservableMap2.prototype;
  _proto.has_ = function has_(key) {
    return this.data_.has(key);
  };
  _proto.has = function has2(key) {
    var _this2 = this;
    if (!globalState.trackingDerivation) {
      return this.has_(key);
    }
    var entry = this.hasMap_.get(key);
    if (!entry) {
      var newEntry = entry = new ObservableValue(this.has_(key), referenceEnhancer, "ObservableMap.key?", false);
      this.hasMap_.set(key, newEntry);
      onBecomeUnobserved(newEntry, function() {
        return _this2.hasMap_["delete"](key);
      });
    }
    return entry.get();
  };
  _proto.set = function set4(key, value) {
    var hasKey = this.has_(key);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: hasKey ? UPDATE : ADD,
        object: this,
        newValue: value,
        name: key
      });
      if (!change) {
        return this;
      }
      value = change.newValue;
    }
    if (hasKey) {
      this.updateValue_(key, value);
    } else {
      this.addValue_(key, value);
    }
    return this;
  };
  _proto["delete"] = function _delete(key) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE$1,
        object: this,
        name: key
      });
      if (!change) {
        return false;
      }
    }
    if (this.has_(key)) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: DELETE$1,
        object: this,
        oldValue: this.data_.get(key).value_,
        name: key
      } : null;
      transaction(function() {
        var _this3$hasMap_$get;
        _this3.keysAtom_.reportChanged();
        (_this3$hasMap_$get = _this3.hasMap_.get(key)) == null ? void 0 : _this3$hasMap_$get.setNewValue_(false);
        var observable2 = _this3.data_.get(key);
        observable2.setNewValue_(void 0);
        _this3.data_["delete"](key);
      });
      if (notify) {
        notifyListeners(this, _change);
      }
      return true;
    }
    return false;
  };
  _proto.updateValue_ = function updateValue_(key, newValue) {
    var observable2 = this.data_.get(key);
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notifySpy = isSpyEnabled();
      var notify = hasListeners(this);
      var change = notify || notifySpy ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: UPDATE,
        object: this,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, change);
      }
    }
  };
  _proto.addValue_ = function addValue_(key, newValue) {
    var _this4 = this;
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    transaction(function() {
      var _this4$hasMap_$get;
      var observable2 = new ObservableValue(newValue, _this4.enhancer_, "ObservableMap.key", false);
      _this4.data_.set(key, observable2);
      newValue = observable2.value_;
      (_this4$hasMap_$get = _this4.hasMap_.get(key)) == null ? void 0 : _this4$hasMap_$get.setNewValue_(true);
      _this4.keysAtom_.reportChanged();
    });
    var notifySpy = isSpyEnabled();
    var notify = hasListeners(this);
    var change = notify || notifySpy ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: ADD,
      object: this,
      name: key,
      newValue
    } : null;
    if (notify) {
      notifyListeners(this, change);
    }
  };
  _proto.get = function get3(key) {
    if (this.has(key)) {
      return this.dehanceValue_(this.data_.get(key).get());
    }
    return this.dehanceValue_(void 0);
  };
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.keys = function keys() {
    this.keysAtom_.reportObserved();
    return this.data_.keys();
  };
  _proto.values = function values() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next = keys.next(), done = _keys$next.done, value = _keys$next.value;
        return {
          done,
          value: done ? void 0 : self2.get(value)
        };
      }
    });
  };
  _proto.entries = function entries() {
    var self2 = this;
    var keys = this.keys();
    return makeIterable({
      next: function next() {
        var _keys$next2 = keys.next(), done = _keys$next2.done, value = _keys$next2.value;
        return {
          done,
          value: done ? void 0 : [value, self2.get(value)]
        };
      }
    });
  };
  _proto[_Symbol$iterator] = function() {
    return this.entries();
  };
  _proto.forEach = function forEach2(callback, thisArg) {
    for (var _iterator = _createForOfIteratorHelperLoose$1(this), _step; !(_step = _iterator()).done; ) {
      var _step$value = _step.value, key = _step$value[0], value = _step$value[1];
      callback.call(thisArg, value, key, this);
    }
  };
  _proto.merge = function merge(other) {
    var _this5 = this;
    if (isObservableMap(other)) {
      other = new Map(other);
    }
    transaction(function() {
      if (isPlainObject(other)) {
        getPlainObjectKeys(other).forEach(function(key) {
          return _this5.set(key, other[key]);
        });
      } else if (Array.isArray(other)) {
        other.forEach(function(_ref) {
          var key = _ref[0], value = _ref[1];
          return _this5.set(key, value);
        });
      } else if (isES6Map(other)) {
        if (other.constructor !== Map) {
          die(19, other);
        }
        other.forEach(function(value, key) {
          return _this5.set(key, value);
        });
      } else if (other !== null && other !== void 0) {
        die(20, other);
      }
    });
    return this;
  };
  _proto.clear = function clear2() {
    var _this6 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator2 = _createForOfIteratorHelperLoose$1(_this6.keys()), _step2; !(_step2 = _iterator2()).done; ) {
          var key = _step2.value;
          _this6["delete"](key);
        }
      });
    });
  };
  _proto.replace = function replace2(values) {
    var _this7 = this;
    transaction(function() {
      var replacementMap = convertToMap(values);
      var orderedData = /* @__PURE__ */ new Map();
      var keysReportChangedCalled = false;
      for (var _iterator3 = _createForOfIteratorHelperLoose$1(_this7.data_.keys()), _step3; !(_step3 = _iterator3()).done; ) {
        var key = _step3.value;
        if (!replacementMap.has(key)) {
          var deleted = _this7["delete"](key);
          if (deleted) {
            keysReportChangedCalled = true;
          } else {
            var value = _this7.data_.get(key);
            orderedData.set(key, value);
          }
        }
      }
      for (var _iterator4 = _createForOfIteratorHelperLoose$1(replacementMap.entries()), _step4; !(_step4 = _iterator4()).done; ) {
        var _step4$value = _step4.value, _key = _step4$value[0], _value = _step4$value[1];
        var keyExisted = _this7.data_.has(_key);
        _this7.set(_key, _value);
        if (_this7.data_.has(_key)) {
          var _value2 = _this7.data_.get(_key);
          orderedData.set(_key, _value2);
          if (!keyExisted) {
            keysReportChangedCalled = true;
          }
        }
      }
      if (!keysReportChangedCalled) {
        if (_this7.data_.size !== orderedData.size) {
          _this7.keysAtom_.reportChanged();
        } else {
          var iter1 = _this7.data_.keys();
          var iter2 = orderedData.keys();
          var next1 = iter1.next();
          var next2 = iter2.next();
          while (!next1.done) {
            if (next1.value !== next2.value) {
              _this7.keysAtom_.reportChanged();
              break;
            }
            next1 = iter1.next();
            next2 = iter2.next();
          }
        }
      }
      _this7.data_ = orderedData;
    });
    return this;
  };
  _proto.toString = function toString2() {
    return "[object ObservableMap]";
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _createClass$1(ObservableMap2, [{
    key: "size",
    get: function get3() {
      this.keysAtom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag,
    get: function get3() {
      return "Map";
    }
  }]);
  return ObservableMap2;
}();
var isObservableMap = /* @__PURE__ */ createInstanceofPredicate("ObservableMap", ObservableMap);
function convertToMap(dataStructure) {
  if (isES6Map(dataStructure) || isObservableMap(dataStructure)) {
    return dataStructure;
  } else if (Array.isArray(dataStructure)) {
    return new Map(dataStructure);
  } else if (isPlainObject(dataStructure)) {
    var map2 = /* @__PURE__ */ new Map();
    for (var key in dataStructure) {
      map2.set(key, dataStructure[key]);
    }
    return map2;
  } else {
    return die(21, dataStructure);
  }
}
var _Symbol$iterator$1, _Symbol$toStringTag$1;
var ObservableSetMarker = {};
_Symbol$iterator$1 = Symbol.iterator;
_Symbol$toStringTag$1 = Symbol.toStringTag;
var ObservableSet = /* @__PURE__ */ function() {
  function ObservableSet2(initialData, enhancer, name_) {
    var _this = this;
    if (enhancer === void 0) {
      enhancer = deepEnhancer;
    }
    if (name_ === void 0) {
      name_ = "ObservableSet";
    }
    this.name_ = void 0;
    this[$mobx] = ObservableSetMarker;
    this.data_ = /* @__PURE__ */ new Set();
    this.atom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.dehancer = void 0;
    this.enhancer_ = void 0;
    this.name_ = name_;
    if (!isFunction(Set)) {
      die(22);
    }
    this.enhancer_ = function(newV, oldV) {
      return enhancer(newV, oldV, name_);
    };
    initObservable(function() {
      _this.atom_ = createAtom(_this.name_);
      if (initialData) {
        _this.replace(initialData);
      }
    });
  }
  var _proto = ObservableSet2.prototype;
  _proto.dehanceValue_ = function dehanceValue_(value) {
    if (this.dehancer !== void 0) {
      return this.dehancer(value);
    }
    return value;
  };
  _proto.clear = function clear2() {
    var _this2 = this;
    transaction(function() {
      untracked(function() {
        for (var _iterator = _createForOfIteratorHelperLoose$1(_this2.data_.values()), _step; !(_step = _iterator()).done; ) {
          var value = _step.value;
          _this2["delete"](value);
        }
      });
    });
  };
  _proto.forEach = function forEach2(callbackFn, thisArg) {
    for (var _iterator2 = _createForOfIteratorHelperLoose$1(this), _step2; !(_step2 = _iterator2()).done; ) {
      var value = _step2.value;
      callbackFn.call(thisArg, value, value, this);
    }
  };
  _proto.add = function add(value) {
    var _this3 = this;
    checkIfStateModificationsAreAllowed(this.atom_);
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: ADD,
        object: this,
        newValue: value
      });
      if (!change) {
        return this;
      }
    }
    if (!this.has(value)) {
      transaction(function() {
        _this3.data_.add(_this3.enhancer_(value, void 0));
        _this3.atom_.reportChanged();
      });
      var notifySpy = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
      var notify = hasListeners(this);
      var _change = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: ADD,
        object: this,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return this;
  };
  _proto["delete"] = function _delete(value) {
    var _this4 = this;
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: DELETE$1,
        object: this,
        oldValue: value
      });
      if (!change) {
        return false;
      }
    }
    if (this.has(value)) {
      var notifySpy = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
      var notify = hasListeners(this);
      var _change2 = notify || notifySpy ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: DELETE$1,
        object: this,
        oldValue: value
      } : null;
      transaction(function() {
        _this4.atom_.reportChanged();
        _this4.data_["delete"](value);
      });
      if (notify) {
        notifyListeners(this, _change2);
      }
      return true;
    }
    return false;
  };
  _proto.has = function has2(value) {
    this.atom_.reportObserved();
    return this.data_.has(this.dehanceValue_(value));
  };
  _proto.entries = function entries() {
    var nextIndex = 0;
    var keys = Array.from(this.keys());
    var values = Array.from(this.values());
    return makeIterable({
      next: function next() {
        var index = nextIndex;
        nextIndex += 1;
        return index < values.length ? {
          value: [keys[index], values[index]],
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.keys = function keys() {
    return this.values();
  };
  _proto.values = function values() {
    this.atom_.reportObserved();
    var self2 = this;
    var nextIndex = 0;
    var observableValues = Array.from(this.data_.values());
    return makeIterable({
      next: function next() {
        return nextIndex < observableValues.length ? {
          value: self2.dehanceValue_(observableValues[nextIndex++]),
          done: false
        } : {
          done: true
        };
      }
    });
  };
  _proto.replace = function replace2(other) {
    var _this5 = this;
    if (isObservableSet(other)) {
      other = new Set(other);
    }
    transaction(function() {
      if (Array.isArray(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (isES6Set(other)) {
        _this5.clear();
        other.forEach(function(value) {
          return _this5.add(value);
        });
      } else if (other !== null && other !== void 0) {
        die("Cannot initialize set from " + other);
      }
    });
    return this;
  };
  _proto.observe_ = function observe_(listener, fireImmediately) {
    return registerListener(this, listener);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.toJSON = function toJSON2() {
    return Array.from(this);
  };
  _proto.toString = function toString2() {
    return "[object ObservableSet]";
  };
  _proto[_Symbol$iterator$1] = function() {
    return this.values();
  };
  _createClass$1(ObservableSet2, [{
    key: "size",
    get: function get3() {
      this.atom_.reportObserved();
      return this.data_.size;
    }
  }, {
    key: _Symbol$toStringTag$1,
    get: function get3() {
      return "Set";
    }
  }]);
  return ObservableSet2;
}();
var isObservableSet = /* @__PURE__ */ createInstanceofPredicate("ObservableSet", ObservableSet);
var descriptorCache = /* @__PURE__ */ Object.create(null);
var REMOVE = "remove";
var ObservableObjectAdministration = /* @__PURE__ */ function() {
  function ObservableObjectAdministration2(target_, values_, name_, defaultAnnotation_) {
    if (values_ === void 0) {
      values_ = /* @__PURE__ */ new Map();
    }
    if (defaultAnnotation_ === void 0) {
      defaultAnnotation_ = autoAnnotation;
    }
    this.target_ = void 0;
    this.values_ = void 0;
    this.name_ = void 0;
    this.defaultAnnotation_ = void 0;
    this.keysAtom_ = void 0;
    this.changeListeners_ = void 0;
    this.interceptors_ = void 0;
    this.proxy_ = void 0;
    this.isPlainObject_ = void 0;
    this.appliedAnnotations_ = void 0;
    this.pendingKeys_ = void 0;
    this.target_ = target_;
    this.values_ = values_;
    this.name_ = name_;
    this.defaultAnnotation_ = defaultAnnotation_;
    this.keysAtom_ = new Atom("ObservableObject.keys");
    this.isPlainObject_ = isPlainObject(this.target_);
  }
  var _proto = ObservableObjectAdministration2.prototype;
  _proto.getObservablePropValue_ = function getObservablePropValue_(key) {
    return this.values_.get(key).get();
  };
  _proto.setObservablePropValue_ = function setObservablePropValue_(key, newValue) {
    var observable2 = this.values_.get(key);
    if (observable2 instanceof ComputedValue) {
      observable2.set(newValue);
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        type: UPDATE,
        object: this.proxy_ || this.target_,
        name: key,
        newValue
      });
      if (!change) {
        return null;
      }
      newValue = change.newValue;
    }
    newValue = observable2.prepareNewValue_(newValue);
    if (newValue !== globalState.UNCHANGED) {
      var notify = hasListeners(this);
      var notifySpy = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
      var _change = notify || notifySpy ? {
        type: UPDATE,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: observable2.value_,
        name: key,
        newValue
      } : null;
      observable2.setNewValue_(newValue);
      if (notify) {
        notifyListeners(this, _change);
      }
    }
    return true;
  };
  _proto.get_ = function get_(key) {
    if (globalState.trackingDerivation && !hasProp(this.target_, key)) {
      this.has_(key);
    }
    return this.target_[key];
  };
  _proto.set_ = function set_(key, value, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (hasProp(this.target_, key)) {
      if (this.values_.has(key)) {
        return this.setObservablePropValue_(key, value);
      } else if (proxyTrap) {
        return Reflect.set(this.target_, key, value);
      } else {
        this.target_[key] = value;
        return true;
      }
    } else {
      return this.extend_(key, {
        value,
        enumerable: true,
        writable: true,
        configurable: true
      }, this.defaultAnnotation_, proxyTrap);
    }
  };
  _proto.has_ = function has_(key) {
    if (!globalState.trackingDerivation) {
      return key in this.target_;
    }
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var entry = this.pendingKeys_.get(key);
    if (!entry) {
      entry = new ObservableValue(key in this.target_, referenceEnhancer, "ObservableObject.key?", false);
      this.pendingKeys_.set(key, entry);
    }
    return entry.get();
  };
  _proto.make_ = function make_(key, annotation) {
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return;
    }
    if (!(key in this.target_)) {
      var _this$target_$storedA;
      if ((_this$target_$storedA = this.target_[storedAnnotationsSymbol]) != null && _this$target_$storedA[key]) {
        return;
      } else {
        die(1, annotation.annotationType_, this.name_ + "." + key.toString());
      }
    }
    var source = this.target_;
    while (source && source !== objectPrototype) {
      var descriptor = getDescriptor(source, key);
      if (descriptor) {
        var outcome = annotation.make_(this, key, descriptor, source);
        if (outcome === 0) {
          return;
        }
        if (outcome === 1) {
          break;
        }
      }
      source = Object.getPrototypeOf(source);
    }
    recordAnnotationApplied(this, annotation, key);
  };
  _proto.extend_ = function extend_(key, descriptor, annotation, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    if (annotation === true) {
      annotation = this.defaultAnnotation_;
    }
    if (annotation === false) {
      return this.defineProperty_(key, descriptor, proxyTrap);
    }
    var outcome = annotation.extend_(this, key, descriptor, proxyTrap);
    if (outcome) {
      recordAnnotationApplied(this, annotation, key);
    }
    return outcome;
  };
  _proto.defineProperty_ = function defineProperty_(key, descriptor, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: descriptor.value
        });
        if (!change) {
          return null;
        }
        var newValue = change.newValue;
        if (descriptor.value !== newValue) {
          descriptor = _extends({}, descriptor, {
            value: newValue
          });
        }
      }
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.notifyPropertyAddition_(key, descriptor.value);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineObservableProperty_ = function defineObservableProperty_(key, value, enhancer, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: value
        });
        if (!change) {
          return null;
        }
        value = change.newValue;
      }
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: true,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      var observable2 = new ObservableValue(value, enhancer, { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key", false);
      this.values_.set(key, observable2);
      this.notifyPropertyAddition_(key, observable2.value_);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.defineComputedProperty_ = function defineComputedProperty_(key, options, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    try {
      startBatch();
      var deleteOutcome = this.delete_(key);
      if (!deleteOutcome) {
        return deleteOutcome;
      }
      if (hasInterceptors(this)) {
        var change = interceptChange(this, {
          object: this.proxy_ || this.target_,
          name: key,
          type: ADD,
          newValue: void 0
        });
        if (!change) {
          return null;
        }
      }
      options.name || (options.name = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" ? this.name_ + "." + key.toString() : "ObservableObject.key");
      options.context = this.proxy_ || this.target_;
      var cachedDescriptor = getCachedObservablePropDescriptor(key);
      var descriptor = {
        configurable: globalState.safeDescriptors ? this.isPlainObject_ : true,
        enumerable: false,
        get: cachedDescriptor.get,
        set: cachedDescriptor.set
      };
      if (proxyTrap) {
        if (!Reflect.defineProperty(this.target_, key, descriptor)) {
          return false;
        }
      } else {
        defineProperty(this.target_, key, descriptor);
      }
      this.values_.set(key, new ComputedValue(options));
      this.notifyPropertyAddition_(key, void 0);
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.delete_ = function delete_(key, proxyTrap) {
    if (proxyTrap === void 0) {
      proxyTrap = false;
    }
    checkIfStateModificationsAreAllowed(this.keysAtom_);
    if (!hasProp(this.target_, key)) {
      return true;
    }
    if (hasInterceptors(this)) {
      var change = interceptChange(this, {
        object: this.proxy_ || this.target_,
        name: key,
        type: REMOVE
      });
      if (!change) {
        return null;
      }
    }
    try {
      var _this$pendingKeys_, _this$pendingKeys_$ge;
      startBatch();
      var notify = hasListeners(this);
      var notifySpy = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" && isSpyEnabled();
      var observable2 = this.values_.get(key);
      var value = void 0;
      if (!observable2 && (notify || notifySpy)) {
        var _getDescriptor2;
        value = (_getDescriptor2 = getDescriptor(this.target_, key)) == null ? void 0 : _getDescriptor2.value;
      }
      if (proxyTrap) {
        if (!Reflect.deleteProperty(this.target_, key)) {
          return false;
        }
      } else {
        delete this.target_[key];
      }
      if ({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production")
        ;
      if (observable2) {
        this.values_["delete"](key);
        if (observable2 instanceof ObservableValue) {
          value = observable2.value_;
        }
        propagateChanged(observable2);
      }
      this.keysAtom_.reportChanged();
      (_this$pendingKeys_ = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_$ge = _this$pendingKeys_.get(key)) == null ? void 0 : _this$pendingKeys_$ge.set(key in this.target_);
      if (notify || notifySpy) {
        var _change2 = {
          type: REMOVE,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: value,
          name: key
        };
        if ({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" && notifySpy)
          ;
        if (notify) {
          notifyListeners(this, _change2);
        }
        if ({ "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production" && notifySpy)
          ;
      }
    } finally {
      endBatch();
    }
    return true;
  };
  _proto.observe_ = function observe_(callback, fireImmediately) {
    return registerListener(this, callback);
  };
  _proto.intercept_ = function intercept_(handler) {
    return registerInterceptor(this, handler);
  };
  _proto.notifyPropertyAddition_ = function notifyPropertyAddition_(key, value) {
    var _this$pendingKeys_2, _this$pendingKeys_2$g;
    var notify = hasListeners(this);
    var notifySpy = { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.NODE_ENV !== "production";
    if (notify || notifySpy) {
      var change = notify || notifySpy ? {
        type: ADD,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: key,
        newValue: value
      } : null;
      if (notify) {
        notifyListeners(this, change);
      }
    }
    (_this$pendingKeys_2 = this.pendingKeys_) == null ? void 0 : (_this$pendingKeys_2$g = _this$pendingKeys_2.get(key)) == null ? void 0 : _this$pendingKeys_2$g.set(true);
    this.keysAtom_.reportChanged();
  };
  _proto.ownKeys_ = function ownKeys_() {
    this.keysAtom_.reportObserved();
    return ownKeys(this.target_);
  };
  _proto.keys_ = function keys_() {
    this.keysAtom_.reportObserved();
    return Object.keys(this.target_);
  };
  return ObservableObjectAdministration2;
}();
function asObservableObject(target, options) {
  var _options$name;
  if (hasProp(target, $mobx)) {
    return target;
  }
  var name = (_options$name = options == null ? void 0 : options.name) != null ? _options$name : "ObservableObject";
  var adm = new ObservableObjectAdministration(target, /* @__PURE__ */ new Map(), String(name), getAnnotationFromOptions(options));
  addHiddenProp(target, $mobx, adm);
  return target;
}
var isObservableObjectAdministration = /* @__PURE__ */ createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function getCachedObservablePropDescriptor(key) {
  return descriptorCache[key] || (descriptorCache[key] = {
    get: function get3() {
      return this[$mobx].getObservablePropValue_(key);
    },
    set: function set4(value) {
      return this[$mobx].setObservablePropValue_(key, value);
    }
  });
}
function isObservableObject(thing) {
  if (isObject(thing)) {
    return isObservableObjectAdministration(thing[$mobx]);
  }
  return false;
}
function recordAnnotationApplied(adm, annotation, key) {
  var _adm$target_$storedAn;
  (_adm$target_$storedAn = adm.target_[storedAnnotationsSymbol]) == null ? true : delete _adm$target_$storedAn[key];
}
var ENTRY_0 = /* @__PURE__ */ createArrayEntryDescriptor(0);
var safariPrototypeSetterInheritanceBug = /* @__PURE__ */ function() {
  var v2 = false;
  var p2 = {};
  Object.defineProperty(p2, "0", {
    set: function set4() {
      v2 = true;
    }
  });
  Object.create(p2)["0"] = 1;
  return v2 === false;
}();
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
var StubArray = function StubArray2() {
};
function inherit(ctor, proto) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ctor.prototype, proto);
  } else if (ctor.prototype.__proto__ !== void 0) {
    ctor.prototype.__proto__ = proto;
  } else {
    ctor.prototype = proto;
  }
}
inherit(StubArray, Array.prototype);
var LegacyObservableArray = /* @__PURE__ */ function(_StubArray, _Symbol$toStringTag2, _Symbol$iterator2) {
  _inheritsLoose(LegacyObservableArray2, _StubArray);
  function LegacyObservableArray2(initialValues, enhancer, name, owned) {
    var _this;
    if (name === void 0) {
      name = "ObservableArray";
    }
    if (owned === void 0) {
      owned = false;
    }
    _this = _StubArray.call(this) || this;
    initObservable(function() {
      var adm = new ObservableArrayAdministration(name, enhancer, owned, true);
      adm.proxy_ = _assertThisInitialized(_this);
      addHiddenFinalProp(_assertThisInitialized(_this), $mobx, adm);
      if (initialValues && initialValues.length) {
        _this.spliceWithArray(0, 0, initialValues);
      }
      if (safariPrototypeSetterInheritanceBug) {
        Object.defineProperty(_assertThisInitialized(_this), "0", ENTRY_0);
      }
    });
    return _this;
  }
  var _proto = LegacyObservableArray2.prototype;
  _proto.concat = function concat() {
    this[$mobx].atom_.reportObserved();
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      arrays.map(function(a2) {
        return isObservableArray(a2) ? a2.slice() : a2;
      })
    );
  };
  _proto[_Symbol$iterator2] = function() {
    var self2 = this;
    var nextIndex = 0;
    return makeIterable({
      next: function next() {
        return nextIndex < self2.length ? {
          value: self2[nextIndex++],
          done: false
        } : {
          done: true,
          value: void 0
        };
      }
    });
  };
  _createClass$1(LegacyObservableArray2, [{
    key: "length",
    get: function get3() {
      return this[$mobx].getArrayLength_();
    },
    set: function set4(newLength) {
      this[$mobx].setArrayLength_(newLength);
    }
  }, {
    key: _Symbol$toStringTag2,
    get: function get3() {
      return "Array";
    }
  }]);
  return LegacyObservableArray2;
}(StubArray, Symbol.toStringTag, Symbol.iterator);
Object.entries(arrayExtensions).forEach(function(_ref) {
  var prop = _ref[0], fn = _ref[1];
  if (prop !== "concat") {
    addHiddenProp(LegacyObservableArray.prototype, prop, fn);
  }
});
function createArrayEntryDescriptor(index) {
  return {
    enumerable: false,
    configurable: true,
    get: function get3() {
      return this[$mobx].get_(index);
    },
    set: function set4(value) {
      this[$mobx].set_(index, value);
    }
  };
}
function createArrayBufferItem(index) {
  defineProperty(LegacyObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
  if (max > OBSERVABLE_ARRAY_BUFFER_SIZE) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max + 100; index++) {
      createArrayBufferItem(index);
    }
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
  }
}
reserveArrayBuffer(1e3);
function createLegacyArray(initialValues, enhancer, name) {
  return new LegacyObservableArray(initialValues, enhancer, name);
}
function getAtom(thing, property) {
  if (typeof thing === "object" && thing !== null) {
    if (isObservableArray(thing)) {
      if (property !== void 0) {
        die(23);
      }
      return thing[$mobx].atom_;
    }
    if (isObservableSet(thing)) {
      return thing.atom_;
    }
    if (isObservableMap(thing)) {
      if (property === void 0) {
        return thing.keysAtom_;
      }
      var observable2 = thing.data_.get(property) || thing.hasMap_.get(property);
      if (!observable2) {
        die(25, property, getDebugName(thing));
      }
      return observable2;
    }
    if (isObservableObject(thing)) {
      if (!property) {
        return die(26);
      }
      var _observable = thing[$mobx].values_.get(property);
      if (!_observable) {
        die(27, property, getDebugName(thing));
      }
      return _observable;
    }
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
      return thing;
    }
  } else if (isFunction(thing)) {
    if (isReaction(thing[$mobx])) {
      return thing[$mobx];
    }
  }
  die(28);
}
function getAdministration(thing, property) {
  if (!thing) {
    die(29);
  }
  if (property !== void 0) {
    return getAdministration(getAtom(thing, property));
  }
  if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
    return thing;
  }
  if (isObservableMap(thing) || isObservableSet(thing)) {
    return thing;
  }
  if (thing[$mobx]) {
    return thing[$mobx];
  }
  die(24, thing);
}
function getDebugName(thing, property) {
  var named;
  if (property !== void 0) {
    named = getAtom(thing, property);
  } else if (isAction(thing)) {
    return thing.name;
  } else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) {
    named = getAdministration(thing);
  } else {
    named = getAtom(thing);
  }
  return named.name_;
}
function initObservable(cb) {
  var derivation = untrackedStart();
  var allowStateChanges = allowStateChangesStart(true);
  startBatch();
  try {
    return cb();
  } finally {
    endBatch();
    allowStateChangesEnd(allowStateChanges);
    untrackedEnd(derivation);
  }
}
var toString$2 = objectPrototype.toString;
function deepEqual(a2, b, depth) {
  if (depth === void 0) {
    depth = -1;
  }
  return eq(a2, b, depth);
}
function eq(a2, b, depth, aStack, bStack) {
  if (a2 === b) {
    return a2 !== 0 || 1 / a2 === 1 / b;
  }
  if (a2 == null || b == null) {
    return false;
  }
  if (a2 !== a2) {
    return b !== b;
  }
  var type = typeof a2;
  if (type !== "function" && type !== "object" && typeof b != "object") {
    return false;
  }
  var className = toString$2.call(a2);
  if (className !== toString$2.call(b)) {
    return false;
  }
  switch (className) {
    case "[object RegExp]":
    case "[object String]":
      return "" + a2 === "" + b;
    case "[object Number]":
      if (+a2 !== +a2) {
        return +b !== +b;
      }
      return +a2 === 0 ? 1 / +a2 === 1 / b : +a2 === +b;
    case "[object Date]":
    case "[object Boolean]":
      return +a2 === +b;
    case "[object Symbol]":
      return typeof Symbol !== "undefined" && Symbol.valueOf.call(a2) === Symbol.valueOf.call(b);
    case "[object Map]":
    case "[object Set]":
      if (depth >= 0) {
        depth++;
      }
      break;
  }
  a2 = unwrap(a2);
  b = unwrap(b);
  var areArrays = className === "[object Array]";
  if (!areArrays) {
    if (typeof a2 != "object" || typeof b != "object") {
      return false;
    }
    var aCtor = a2.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor && isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a2 && "constructor" in b) {
      return false;
    }
  }
  if (depth === 0) {
    return false;
  } else if (depth < 0) {
    depth = -1;
  }
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    if (aStack[length] === a2) {
      return bStack[length] === b;
    }
  }
  aStack.push(a2);
  bStack.push(b);
  if (areArrays) {
    length = a2.length;
    if (length !== b.length) {
      return false;
    }
    while (length--) {
      if (!eq(a2[length], b[length], depth - 1, aStack, bStack)) {
        return false;
      }
    }
  } else {
    var keys = Object.keys(a2);
    var key;
    length = keys.length;
    if (Object.keys(b).length !== length) {
      return false;
    }
    while (length--) {
      key = keys[length];
      if (!(hasProp(b, key) && eq(a2[key], b[key], depth - 1, aStack, bStack))) {
        return false;
      }
    }
  }
  aStack.pop();
  bStack.pop();
  return true;
}
function unwrap(a2) {
  if (isObservableArray(a2)) {
    return a2.slice();
  }
  if (isES6Map(a2) || isObservableMap(a2)) {
    return Array.from(a2.entries());
  }
  if (isES6Set(a2) || isObservableSet(a2)) {
    return Array.from(a2.entries());
  }
  return a2;
}
function makeIterable(iterator) {
  iterator[Symbol.iterator] = getSelf;
  return iterator;
}
function getSelf() {
  return this;
}
["Symbol", "Map", "Set"].forEach(function(m2) {
  var g2 = getGlobal();
  if (typeof g2[m2] === "undefined") {
    die("MobX requires global '" + m2 + "' to be available or polyfilled");
  }
});
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
  __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
    spy,
    extras: {
      getDebugName
    },
    $mobx
  });
}
var _a$1;
const reaction = Symbol("LitMobxRenderReaction");
const cachedRequestUpdate = Symbol("LitMobxRequestUpdate");
class ObserverLitElement extends s {
  constructor() {
    super(...arguments);
    this[_a$1] = () => {
      this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    const name = this.constructor.name || this.nodeName;
    this[reaction] = new Reaction(
      `${name}.update()`,
      this[cachedRequestUpdate]
    );
    if (this.hasUpdated)
      this.requestUpdate();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this[reaction]) {
      this[reaction].dispose();
      this[reaction] = void 0;
    }
  }
  update(changedProperties) {
    if (this[reaction]) {
      this[reaction].track(
        super.update.bind(this, changedProperties)
      );
    } else {
      super.update(changedProperties);
    }
  }
}
_a$1 = cachedRequestUpdate;
var ClipType = /* @__PURE__ */ ((ClipType2) => {
  ClipType2["Chapter"] = "Chapter";
  ClipType2["Moment"] = "Moment";
  ClipType2["Paragraph"] = "Paragraph";
  ClipType2["SubTopic"] = "SubTopic";
  ClipType2["Topic"] = "Topic";
  ClipType2["Transcript"] = "Transcript";
  return ClipType2;
})(ClipType || {});
var extendStatics = function(d2, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b2) {
    d3.__proto__ = b2;
  } || function(d3, b2) {
    for (var p2 in b2)
      if (Object.prototype.hasOwnProperty.call(b2, p2))
        d3[p2] = b2[p2];
  };
  return extendStatics(d2, b);
};
function __extends(d2, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d2, b);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
}
function __awaiter(thisArg, _arguments, P2, generator) {
  function adopt(value) {
    return value instanceof P2 ? value : new P2(function(resolve) {
      resolve(value);
    });
  }
  return new (P2 || (P2 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (g2 && (g2 = 0, op[0] && (_2 = 0)), _2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e2 = new Error(message);
  return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
};
var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function(obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;
var InvariantError = (
  /** @class */
  function(_super) {
    __extends(InvariantError2, _super);
    function InvariantError2(message) {
      if (message === void 0) {
        message = genericMessage;
      }
      var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;
      _this.framesToPop = 1;
      _this.name = genericMessage;
      setPrototypeOf(_this, InvariantError2.prototype);
      return _this;
    }
    return InvariantError2;
  }(Error)
);
function invariant$2(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
  return function() {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}
(function(invariant3) {
  invariant3.debug = wrapConsoleMethod("debug");
  invariant3.log = wrapConsoleMethod("log");
  invariant3.warn = wrapConsoleMethod("warn");
  invariant3.error = wrapConsoleMethod("error");
})(invariant$2 || (invariant$2 = {}));
var version = "3.8.7";
function maybe$1(thunk) {
  try {
    return thunk();
  } catch (_a2) {
  }
}
const global$1 = maybe$1(function() {
  return globalThis;
}) || maybe$1(function() {
  return window;
}) || maybe$1(function() {
  return self;
}) || maybe$1(function() {
  return global;
}) || maybe$1(function() {
  return maybe$1.constructor("return this")();
});
var prefixCounts = /* @__PURE__ */ new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}
function stringifyForDisplay(value, space) {
  if (space === void 0) {
    space = 0;
  }
  var undefId = makeUniqueId("stringifyForDisplay");
  return JSON.stringify(value, function(key, value2) {
    return value2 === void 0 ? undefId : value2;
  }, space).split(JSON.stringify(undefId)).join("<undefined>");
}
function wrap$2(fn) {
  return function(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (typeof message === "number") {
      var arg0 = message;
      message = getHandledErrorMsg(arg0);
      if (!message) {
        message = getFallbackErrorMsg(arg0, args);
        args = [];
      }
    }
    fn.apply(void 0, [message].concat(args));
  };
}
var invariant$1 = Object.assign(function invariant(condition, message) {
  var args = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }
  if (!condition) {
    invariant$2(condition, getHandledErrorMsg(message, args) || getFallbackErrorMsg(message, args));
  }
}, {
  debug: wrap$2(invariant$2.debug),
  log: wrap$2(invariant$2.log),
  warn: wrap$2(invariant$2.warn),
  error: wrap$2(invariant$2.error)
});
function newInvariantError(message) {
  var optionalParams = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    optionalParams[_i - 1] = arguments[_i];
  }
  return new InvariantError(getHandledErrorMsg(message, optionalParams) || getFallbackErrorMsg(message, optionalParams));
}
var ApolloErrorMessageHandler = Symbol.for("ApolloErrorMessageHandler_" + version);
function stringify$1(arg) {
  return typeof arg == "string" ? arg : stringifyForDisplay(arg, 2).slice(0, 1e3);
}
function getHandledErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return global$1[ApolloErrorMessageHandler] && global$1[ApolloErrorMessageHandler](message, messageArgs.map(stringify$1));
}
function getFallbackErrorMsg(message, messageArgs) {
  if (messageArgs === void 0) {
    messageArgs = [];
  }
  if (!message)
    return;
  return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
    version,
    message,
    args: messageArgs.map(stringify$1)
  })));
}
function devAssert(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(message);
  }
}
function isObjectLike(value) {
  return typeof value == "object" && value !== null;
}
function invariant2(condition, message) {
  const booleanCondition = Boolean(condition);
  if (!booleanCondition) {
    throw new Error(
      message != null ? message : "Unexpected invariant triggered."
    );
  }
}
const LineRegExp = /\r\n|[\n\r]/g;
function getLocation(source, position) {
  let lastLineStart = 0;
  let line = 1;
  for (const match2 of source.body.matchAll(LineRegExp)) {
    typeof match2.index === "number" || invariant2(false);
    if (match2.index >= position) {
      break;
    }
    lastLineStart = match2.index + match2[0].length;
    line += 1;
  }
  return {
    line,
    column: position + 1 - lastLineStart
  };
}
function printLocation(location) {
  return printSourceLocation(
    location.source,
    getLocation(location.source, location.start)
  );
}
function printSourceLocation(source, sourceLocation) {
  const firstLineColumnOffset = source.locationOffset.column - 1;
  const body = "".padStart(firstLineColumnOffset) + source.body;
  const lineIndex = sourceLocation.line - 1;
  const lineOffset = source.locationOffset.line - 1;
  const lineNum = sourceLocation.line + lineOffset;
  const columnOffset = sourceLocation.line === 1 ? firstLineColumnOffset : 0;
  const columnNum = sourceLocation.column + columnOffset;
  const locationStr = `${source.name}:${lineNum}:${columnNum}
`;
  const lines = body.split(/\r\n|[\n\r]/g);
  const locationLine = lines[lineIndex];
  if (locationLine.length > 120) {
    const subLineIndex = Math.floor(columnNum / 80);
    const subLineColumnNum = columnNum % 80;
    const subLines = [];
    for (let i2 = 0; i2 < locationLine.length; i2 += 80) {
      subLines.push(locationLine.slice(i2, i2 + 80));
    }
    return locationStr + printPrefixedLines([
      [`${lineNum} |`, subLines[0]],
      ...subLines.slice(1, subLineIndex + 1).map((subLine) => ["|", subLine]),
      ["|", "^".padStart(subLineColumnNum)],
      ["|", subLines[subLineIndex + 1]]
    ]);
  }
  return locationStr + printPrefixedLines([
    // Lines specified like this: ["prefix", "string"],
    [`${lineNum - 1} |`, lines[lineIndex - 1]],
    [`${lineNum} |`, locationLine],
    ["|", "^".padStart(columnNum)],
    [`${lineNum + 1} |`, lines[lineIndex + 1]]
  ]);
}
function printPrefixedLines(lines) {
  const existingLines = lines.filter(([_2, line]) => line !== void 0);
  const padLen = Math.max(...existingLines.map(([prefix]) => prefix.length));
  return existingLines.map(([prefix, line]) => prefix.padStart(padLen) + (line ? " " + line : "")).join("\n");
}
function toNormalizedOptions(args) {
  const firstArg = args[0];
  if (firstArg == null || "kind" in firstArg || "length" in firstArg) {
    return {
      nodes: firstArg,
      source: args[1],
      positions: args[2],
      path: args[3],
      originalError: args[4],
      extensions: args[5]
    };
  }
  return firstArg;
}
class GraphQLError extends Error {
  /**
   * An array of `{ line, column }` locations within the source GraphQL document
   * which correspond to this error.
   *
   * Errors during validation often contain multiple locations, for example to
   * point out two things with the same name. Errors during execution include a
   * single location, the field which produced the error.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array describing the JSON-path into the execution response which
   * corresponds to this error. Only included for errors during execution.
   *
   * Enumerable, and appears in the result of JSON.stringify().
   */
  /**
   * An array of GraphQL AST Nodes corresponding to this error.
   */
  /**
   * The source GraphQL document for the first location of this error.
   *
   * Note that if this Error represents more than one node, the source may not
   * represent nodes after the first node.
   */
  /**
   * An array of character offsets within the source GraphQL document
   * which correspond to this error.
   */
  /**
   * The original error thrown from a field resolver during execution.
   */
  /**
   * Extension fields to add to the formatted error.
   */
  /**
   * @deprecated Please use the `GraphQLErrorOptions` constructor overload instead.
   */
  constructor(message, ...rawArgs) {
    var _this$nodes, _nodeLocations$, _ref;
    const { nodes, source, positions, path: path2, originalError, extensions } = toNormalizedOptions(rawArgs);
    super(message);
    this.name = "GraphQLError";
    this.path = path2 !== null && path2 !== void 0 ? path2 : void 0;
    this.originalError = originalError !== null && originalError !== void 0 ? originalError : void 0;
    this.nodes = undefinedIfEmpty(
      Array.isArray(nodes) ? nodes : nodes ? [nodes] : void 0
    );
    const nodeLocations = undefinedIfEmpty(
      (_this$nodes = this.nodes) === null || _this$nodes === void 0 ? void 0 : _this$nodes.map((node) => node.loc).filter((loc) => loc != null)
    );
    this.source = source !== null && source !== void 0 ? source : nodeLocations === null || nodeLocations === void 0 ? void 0 : (_nodeLocations$ = nodeLocations[0]) === null || _nodeLocations$ === void 0 ? void 0 : _nodeLocations$.source;
    this.positions = positions !== null && positions !== void 0 ? positions : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => loc.start);
    this.locations = positions && source ? positions.map((pos) => getLocation(source, pos)) : nodeLocations === null || nodeLocations === void 0 ? void 0 : nodeLocations.map((loc) => getLocation(loc.source, loc.start));
    const originalExtensions = isObjectLike(
      originalError === null || originalError === void 0 ? void 0 : originalError.extensions
    ) ? originalError === null || originalError === void 0 ? void 0 : originalError.extensions : void 0;
    this.extensions = (_ref = extensions !== null && extensions !== void 0 ? extensions : originalExtensions) !== null && _ref !== void 0 ? _ref : /* @__PURE__ */ Object.create(null);
    Object.defineProperties(this, {
      message: {
        writable: true,
        enumerable: true
      },
      name: {
        enumerable: false
      },
      nodes: {
        enumerable: false
      },
      source: {
        enumerable: false
      },
      positions: {
        enumerable: false
      },
      originalError: {
        enumerable: false
      }
    });
    if (originalError !== null && originalError !== void 0 && originalError.stack) {
      Object.defineProperty(this, "stack", {
        value: originalError.stack,
        writable: true,
        configurable: true
      });
    } else if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GraphQLError);
    } else {
      Object.defineProperty(this, "stack", {
        value: Error().stack,
        writable: true,
        configurable: true
      });
    }
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let output = this.message;
    if (this.nodes) {
      for (const node of this.nodes) {
        if (node.loc) {
          output += "\n\n" + printLocation(node.loc);
        }
      }
    } else if (this.source && this.locations) {
      for (const location of this.locations) {
        output += "\n\n" + printSourceLocation(this.source, location);
      }
    }
    return output;
  }
  toJSON() {
    const formattedError = {
      message: this.message
    };
    if (this.locations != null) {
      formattedError.locations = this.locations;
    }
    if (this.path != null) {
      formattedError.path = this.path;
    }
    if (this.extensions != null && Object.keys(this.extensions).length > 0) {
      formattedError.extensions = this.extensions;
    }
    return formattedError;
  }
}
function undefinedIfEmpty(array2) {
  return array2 === void 0 || array2.length === 0 ? void 0 : array2;
}
function syntaxError(source, position, description) {
  return new GraphQLError(`Syntax Error: ${description}`, {
    source,
    positions: [position]
  });
}
class Location {
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The Token at which this Node begins.
   */
  /**
   * The Token at which this Node ends.
   */
  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return {
      start: this.start,
      end: this.end
    };
  }
}
class Token {
  /**
   * The kind of Token.
   */
  /**
   * The character offset at which this Node begins.
   */
  /**
   * The character offset at which this Node ends.
   */
  /**
   * The 1-indexed line number on which this Token appears.
   */
  /**
   * The 1-indexed column number at which this Token begins.
   */
  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */
  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }
}
const QueryDocumentKeys = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
};
const kindValues = new Set(Object.keys(QueryDocumentKeys));
function isNode(maybeNode) {
  const maybeKind = maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === "string" && kindValues.has(maybeKind);
}
var OperationTypeNode;
(function(OperationTypeNode2) {
  OperationTypeNode2["QUERY"] = "query";
  OperationTypeNode2["MUTATION"] = "mutation";
  OperationTypeNode2["SUBSCRIPTION"] = "subscription";
})(OperationTypeNode || (OperationTypeNode = {}));
var DirectiveLocation;
(function(DirectiveLocation2) {
  DirectiveLocation2["QUERY"] = "QUERY";
  DirectiveLocation2["MUTATION"] = "MUTATION";
  DirectiveLocation2["SUBSCRIPTION"] = "SUBSCRIPTION";
  DirectiveLocation2["FIELD"] = "FIELD";
  DirectiveLocation2["FRAGMENT_DEFINITION"] = "FRAGMENT_DEFINITION";
  DirectiveLocation2["FRAGMENT_SPREAD"] = "FRAGMENT_SPREAD";
  DirectiveLocation2["INLINE_FRAGMENT"] = "INLINE_FRAGMENT";
  DirectiveLocation2["VARIABLE_DEFINITION"] = "VARIABLE_DEFINITION";
  DirectiveLocation2["SCHEMA"] = "SCHEMA";
  DirectiveLocation2["SCALAR"] = "SCALAR";
  DirectiveLocation2["OBJECT"] = "OBJECT";
  DirectiveLocation2["FIELD_DEFINITION"] = "FIELD_DEFINITION";
  DirectiveLocation2["ARGUMENT_DEFINITION"] = "ARGUMENT_DEFINITION";
  DirectiveLocation2["INTERFACE"] = "INTERFACE";
  DirectiveLocation2["UNION"] = "UNION";
  DirectiveLocation2["ENUM"] = "ENUM";
  DirectiveLocation2["ENUM_VALUE"] = "ENUM_VALUE";
  DirectiveLocation2["INPUT_OBJECT"] = "INPUT_OBJECT";
  DirectiveLocation2["INPUT_FIELD_DEFINITION"] = "INPUT_FIELD_DEFINITION";
})(DirectiveLocation || (DirectiveLocation = {}));
var Kind;
(function(Kind2) {
  Kind2["NAME"] = "Name";
  Kind2["DOCUMENT"] = "Document";
  Kind2["OPERATION_DEFINITION"] = "OperationDefinition";
  Kind2["VARIABLE_DEFINITION"] = "VariableDefinition";
  Kind2["SELECTION_SET"] = "SelectionSet";
  Kind2["FIELD"] = "Field";
  Kind2["ARGUMENT"] = "Argument";
  Kind2["FRAGMENT_SPREAD"] = "FragmentSpread";
  Kind2["INLINE_FRAGMENT"] = "InlineFragment";
  Kind2["FRAGMENT_DEFINITION"] = "FragmentDefinition";
  Kind2["VARIABLE"] = "Variable";
  Kind2["INT"] = "IntValue";
  Kind2["FLOAT"] = "FloatValue";
  Kind2["STRING"] = "StringValue";
  Kind2["BOOLEAN"] = "BooleanValue";
  Kind2["NULL"] = "NullValue";
  Kind2["ENUM"] = "EnumValue";
  Kind2["LIST"] = "ListValue";
  Kind2["OBJECT"] = "ObjectValue";
  Kind2["OBJECT_FIELD"] = "ObjectField";
  Kind2["DIRECTIVE"] = "Directive";
  Kind2["NAMED_TYPE"] = "NamedType";
  Kind2["LIST_TYPE"] = "ListType";
  Kind2["NON_NULL_TYPE"] = "NonNullType";
  Kind2["SCHEMA_DEFINITION"] = "SchemaDefinition";
  Kind2["OPERATION_TYPE_DEFINITION"] = "OperationTypeDefinition";
  Kind2["SCALAR_TYPE_DEFINITION"] = "ScalarTypeDefinition";
  Kind2["OBJECT_TYPE_DEFINITION"] = "ObjectTypeDefinition";
  Kind2["FIELD_DEFINITION"] = "FieldDefinition";
  Kind2["INPUT_VALUE_DEFINITION"] = "InputValueDefinition";
  Kind2["INTERFACE_TYPE_DEFINITION"] = "InterfaceTypeDefinition";
  Kind2["UNION_TYPE_DEFINITION"] = "UnionTypeDefinition";
  Kind2["ENUM_TYPE_DEFINITION"] = "EnumTypeDefinition";
  Kind2["ENUM_VALUE_DEFINITION"] = "EnumValueDefinition";
  Kind2["INPUT_OBJECT_TYPE_DEFINITION"] = "InputObjectTypeDefinition";
  Kind2["DIRECTIVE_DEFINITION"] = "DirectiveDefinition";
  Kind2["SCHEMA_EXTENSION"] = "SchemaExtension";
  Kind2["SCALAR_TYPE_EXTENSION"] = "ScalarTypeExtension";
  Kind2["OBJECT_TYPE_EXTENSION"] = "ObjectTypeExtension";
  Kind2["INTERFACE_TYPE_EXTENSION"] = "InterfaceTypeExtension";
  Kind2["UNION_TYPE_EXTENSION"] = "UnionTypeExtension";
  Kind2["ENUM_TYPE_EXTENSION"] = "EnumTypeExtension";
  Kind2["INPUT_OBJECT_TYPE_EXTENSION"] = "InputObjectTypeExtension";
})(Kind || (Kind = {}));
function isWhiteSpace(code) {
  return code === 9 || code === 32;
}
function isDigit(code) {
  return code >= 48 && code <= 57;
}
function isLetter(code) {
  return code >= 97 && code <= 122 || // A-Z
  code >= 65 && code <= 90;
}
function isNameStart(code) {
  return isLetter(code) || code === 95;
}
function isNameContinue(code) {
  return isLetter(code) || isDigit(code) || code === 95;
}
function dedentBlockStringLines(lines) {
  var _firstNonEmptyLine2;
  let commonIndent = Number.MAX_SAFE_INTEGER;
  let firstNonEmptyLine = null;
  let lastNonEmptyLine = -1;
  for (let i2 = 0; i2 < lines.length; ++i2) {
    var _firstNonEmptyLine;
    const line = lines[i2];
    const indent2 = leadingWhitespace(line);
    if (indent2 === line.length) {
      continue;
    }
    firstNonEmptyLine = (_firstNonEmptyLine = firstNonEmptyLine) !== null && _firstNonEmptyLine !== void 0 ? _firstNonEmptyLine : i2;
    lastNonEmptyLine = i2;
    if (i2 !== 0 && indent2 < commonIndent) {
      commonIndent = indent2;
    }
  }
  return lines.map((line, i2) => i2 === 0 ? line : line.slice(commonIndent)).slice(
    (_firstNonEmptyLine2 = firstNonEmptyLine) !== null && _firstNonEmptyLine2 !== void 0 ? _firstNonEmptyLine2 : 0,
    lastNonEmptyLine + 1
  );
}
function leadingWhitespace(str) {
  let i2 = 0;
  while (i2 < str.length && isWhiteSpace(str.charCodeAt(i2))) {
    ++i2;
  }
  return i2;
}
function printBlockString(value, options) {
  const escapedValue = value.replace(/"""/g, '\\"""');
  const lines = escapedValue.split(/\r\n|[\n\r]/g);
  const isSingleLine = lines.length === 1;
  const forceLeadingNewLine = lines.length > 1 && lines.slice(1).every((line) => line.length === 0 || isWhiteSpace(line.charCodeAt(0)));
  const hasTrailingTripleQuotes = escapedValue.endsWith('\\"""');
  const hasTrailingQuote = value.endsWith('"') && !hasTrailingTripleQuotes;
  const hasTrailingSlash = value.endsWith("\\");
  const forceTrailingNewline = hasTrailingQuote || hasTrailingSlash;
  const printAsMultipleLines = !(options !== null && options !== void 0 && options.minimize) && // add leading and trailing new lines only if it improves readability
  (!isSingleLine || value.length > 70 || forceTrailingNewline || forceLeadingNewLine || hasTrailingTripleQuotes);
  let result = "";
  const skipLeadingNewLine = isSingleLine && isWhiteSpace(value.charCodeAt(0));
  if (printAsMultipleLines && !skipLeadingNewLine || forceLeadingNewLine) {
    result += "\n";
  }
  result += escapedValue;
  if (printAsMultipleLines || forceTrailingNewline) {
    result += "\n";
  }
  return '"""' + result + '"""';
}
var TokenKind;
(function(TokenKind2) {
  TokenKind2["SOF"] = "<SOF>";
  TokenKind2["EOF"] = "<EOF>";
  TokenKind2["BANG"] = "!";
  TokenKind2["DOLLAR"] = "$";
  TokenKind2["AMP"] = "&";
  TokenKind2["PAREN_L"] = "(";
  TokenKind2["PAREN_R"] = ")";
  TokenKind2["SPREAD"] = "...";
  TokenKind2["COLON"] = ":";
  TokenKind2["EQUALS"] = "=";
  TokenKind2["AT"] = "@";
  TokenKind2["BRACKET_L"] = "[";
  TokenKind2["BRACKET_R"] = "]";
  TokenKind2["BRACE_L"] = "{";
  TokenKind2["PIPE"] = "|";
  TokenKind2["BRACE_R"] = "}";
  TokenKind2["NAME"] = "Name";
  TokenKind2["INT"] = "Int";
  TokenKind2["FLOAT"] = "Float";
  TokenKind2["STRING"] = "String";
  TokenKind2["BLOCK_STRING"] = "BlockString";
  TokenKind2["COMMENT"] = "Comment";
})(TokenKind || (TokenKind = {}));
class Lexer {
  /**
   * The previously focused non-ignored token.
   */
  /**
   * The currently focused non-ignored token.
   */
  /**
   * The (1-indexed) line containing the current token.
   */
  /**
   * The character offset at which the current line begins.
   */
  constructor(source) {
    const startOfFileToken = new Token(TokenKind.SOF, 0, 0, 0, 0);
    this.source = source;
    this.lastToken = startOfFileToken;
    this.token = startOfFileToken;
    this.line = 1;
    this.lineStart = 0;
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  /**
   * Advances the token stream to the next non-ignored token.
   */
  advance() {
    this.lastToken = this.token;
    const token = this.token = this.lookahead();
    return token;
  }
  /**
   * Looks ahead and returns the next non-ignored token, but does not change
   * the state of Lexer.
   */
  lookahead() {
    let token = this.token;
    if (token.kind !== TokenKind.EOF) {
      do {
        if (token.next) {
          token = token.next;
        } else {
          const nextToken = readNextToken(this, token.end);
          token.next = nextToken;
          nextToken.prev = token;
          token = nextToken;
        }
      } while (token.kind === TokenKind.COMMENT);
    }
    return token;
  }
}
function isPunctuatorTokenKind(kind) {
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
function isUnicodeScalarValue(code) {
  return code >= 0 && code <= 55295 || code >= 57344 && code <= 1114111;
}
function isSupplementaryCodePoint(body, location) {
  return isLeadingSurrogate(body.charCodeAt(location)) && isTrailingSurrogate(body.charCodeAt(location + 1));
}
function isLeadingSurrogate(code) {
  return code >= 55296 && code <= 56319;
}
function isTrailingSurrogate(code) {
  return code >= 56320 && code <= 57343;
}
function printCodePointAt(lexer, location) {
  const code = lexer.source.body.codePointAt(location);
  if (code === void 0) {
    return TokenKind.EOF;
  } else if (code >= 32 && code <= 126) {
    const char = String.fromCodePoint(code);
    return char === '"' ? `'"'` : `"${char}"`;
  }
  return "U+" + code.toString(16).toUpperCase().padStart(4, "0");
}
function createToken(lexer, kind, start, end, value) {
  const line = lexer.line;
  const col = 1 + start - lexer.lineStart;
  return new Token(kind, start, end, line, col, value);
}
function readNextToken(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    switch (code) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++position;
        continue;
      case 10:
        ++position;
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 13:
        if (body.charCodeAt(position + 1) === 10) {
          position += 2;
        } else {
          ++position;
        }
        ++lexer.line;
        lexer.lineStart = position;
        continue;
      case 35:
        return readComment(lexer, position);
      case 33:
        return createToken(lexer, TokenKind.BANG, position, position + 1);
      case 36:
        return createToken(lexer, TokenKind.DOLLAR, position, position + 1);
      case 38:
        return createToken(lexer, TokenKind.AMP, position, position + 1);
      case 40:
        return createToken(lexer, TokenKind.PAREN_L, position, position + 1);
      case 41:
        return createToken(lexer, TokenKind.PAREN_R, position, position + 1);
      case 46:
        if (body.charCodeAt(position + 1) === 46 && body.charCodeAt(position + 2) === 46) {
          return createToken(lexer, TokenKind.SPREAD, position, position + 3);
        }
        break;
      case 58:
        return createToken(lexer, TokenKind.COLON, position, position + 1);
      case 61:
        return createToken(lexer, TokenKind.EQUALS, position, position + 1);
      case 64:
        return createToken(lexer, TokenKind.AT, position, position + 1);
      case 91:
        return createToken(lexer, TokenKind.BRACKET_L, position, position + 1);
      case 93:
        return createToken(lexer, TokenKind.BRACKET_R, position, position + 1);
      case 123:
        return createToken(lexer, TokenKind.BRACE_L, position, position + 1);
      case 124:
        return createToken(lexer, TokenKind.PIPE, position, position + 1);
      case 125:
        return createToken(lexer, TokenKind.BRACE_R, position, position + 1);
      case 34:
        if (body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
          return readBlockString(lexer, position);
        }
        return readString(lexer, position);
    }
    if (isDigit(code) || code === 45) {
      return readNumber(lexer, position, code);
    }
    if (isNameStart(code)) {
      return readName(lexer, position);
    }
    throw syntaxError(
      lexer.source,
      position,
      code === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : isUnicodeScalarValue(code) || isSupplementaryCodePoint(body, position) ? `Unexpected character: ${printCodePointAt(lexer, position)}.` : `Invalid character: ${printCodePointAt(lexer, position)}.`
    );
  }
  return createToken(lexer, TokenKind.EOF, bodyLength, bodyLength);
}
function readComment(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.COMMENT,
    start,
    position,
    body.slice(start + 1, position)
  );
}
function readNumber(lexer, start, firstCode) {
  const body = lexer.source.body;
  let position = start;
  let code = firstCode;
  let isFloat = false;
  if (code === 45) {
    code = body.charCodeAt(++position);
  }
  if (code === 48) {
    code = body.charCodeAt(++position);
    if (isDigit(code)) {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid number, unexpected digit after 0: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  } else {
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46) {
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 69 || code === 101) {
    isFloat = true;
    code = body.charCodeAt(++position);
    if (code === 43 || code === 45) {
      code = body.charCodeAt(++position);
    }
    position = readDigits(lexer, position, code);
    code = body.charCodeAt(position);
  }
  if (code === 46 || isNameStart(code)) {
    throw syntaxError(
      lexer.source,
      position,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        position
      )}.`
    );
  }
  return createToken(
    lexer,
    isFloat ? TokenKind.FLOAT : TokenKind.INT,
    start,
    position,
    body.slice(start, position)
  );
}
function readDigits(lexer, start, firstCode) {
  if (!isDigit(firstCode)) {
    throw syntaxError(
      lexer.source,
      start,
      `Invalid number, expected digit but got: ${printCodePointAt(
        lexer,
        start
      )}.`
    );
  }
  const body = lexer.source.body;
  let position = start + 1;
  while (isDigit(body.charCodeAt(position))) {
    ++position;
  }
  return position;
}
function readString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  let chunkStart = position;
  let value = "";
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return createToken(lexer, TokenKind.STRING, start, position + 1, value);
    }
    if (code === 92) {
      value += body.slice(chunkStart, position);
      const escape2 = body.charCodeAt(position + 1) === 117 ? body.charCodeAt(position + 2) === 123 ? readEscapedUnicodeVariableWidth(lexer, position) : readEscapedUnicodeFixedWidth(lexer, position) : readEscapedCharacter(lexer, position);
      value += escape2.value;
      position += escape2.size;
      chunkStart = position;
      continue;
    }
    if (code === 10 || code === 13) {
      break;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readEscapedUnicodeVariableWidth(lexer, position) {
  const body = lexer.source.body;
  let point = 0;
  let size = 3;
  while (size < 12) {
    const code = body.charCodeAt(position + size++);
    if (code === 125) {
      if (size < 5 || !isUnicodeScalarValue(point)) {
        break;
      }
      return {
        value: String.fromCodePoint(point),
        size
      };
    }
    point = point << 4 | readHexDigit(code);
    if (point < 0) {
      break;
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(
      position,
      position + size
    )}".`
  );
}
function readEscapedUnicodeFixedWidth(lexer, position) {
  const body = lexer.source.body;
  const code = read16BitHexCode(body, position + 2);
  if (isUnicodeScalarValue(code)) {
    return {
      value: String.fromCodePoint(code),
      size: 6
    };
  }
  if (isLeadingSurrogate(code)) {
    if (body.charCodeAt(position + 6) === 92 && body.charCodeAt(position + 7) === 117) {
      const trailingCode = read16BitHexCode(body, position + 8);
      if (isTrailingSurrogate(trailingCode)) {
        return {
          value: String.fromCodePoint(code, trailingCode),
          size: 12
        };
      }
    }
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid Unicode escape sequence: "${body.slice(position, position + 6)}".`
  );
}
function read16BitHexCode(body, position) {
  return readHexDigit(body.charCodeAt(position)) << 12 | readHexDigit(body.charCodeAt(position + 1)) << 8 | readHexDigit(body.charCodeAt(position + 2)) << 4 | readHexDigit(body.charCodeAt(position + 3));
}
function readHexDigit(code) {
  return code >= 48 && code <= 57 ? code - 48 : code >= 65 && code <= 70 ? code - 55 : code >= 97 && code <= 102 ? code - 87 : -1;
}
function readEscapedCharacter(lexer, position) {
  const body = lexer.source.body;
  const code = body.charCodeAt(position + 1);
  switch (code) {
    case 34:
      return {
        value: '"',
        size: 2
      };
    case 92:
      return {
        value: "\\",
        size: 2
      };
    case 47:
      return {
        value: "/",
        size: 2
      };
    case 98:
      return {
        value: "\b",
        size: 2
      };
    case 102:
      return {
        value: "\f",
        size: 2
      };
    case 110:
      return {
        value: "\n",
        size: 2
      };
    case 114:
      return {
        value: "\r",
        size: 2
      };
    case 116:
      return {
        value: "	",
        size: 2
      };
  }
  throw syntaxError(
    lexer.source,
    position,
    `Invalid character escape sequence: "${body.slice(
      position,
      position + 2
    )}".`
  );
}
function readBlockString(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let lineStart = lexer.lineStart;
  let position = start + 3;
  let chunkStart = position;
  let currentLine = "";
  const blockLines = [];
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      const token = createToken(
        lexer,
        TokenKind.BLOCK_STRING,
        start,
        position + 3,
        // Return a string of the lines joined with U+000A.
        dedentBlockStringLines(blockLines).join("\n")
      );
      lexer.line += blockLines.length - 1;
      lexer.lineStart = lineStart;
      return token;
    }
    if (code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      currentLine += body.slice(chunkStart, position);
      chunkStart = position + 1;
      position += 4;
      continue;
    }
    if (code === 10 || code === 13) {
      currentLine += body.slice(chunkStart, position);
      blockLines.push(currentLine);
      if (code === 13 && body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }
      currentLine = "";
      chunkStart = position;
      lineStart = position;
      continue;
    }
    if (isUnicodeScalarValue(code)) {
      ++position;
    } else if (isSupplementaryCodePoint(body, position)) {
      position += 2;
    } else {
      throw syntaxError(
        lexer.source,
        position,
        `Invalid character within String: ${printCodePointAt(
          lexer,
          position
        )}.`
      );
    }
  }
  throw syntaxError(lexer.source, position, "Unterminated string.");
}
function readName(lexer, start) {
  const body = lexer.source.body;
  const bodyLength = body.length;
  let position = start + 1;
  while (position < bodyLength) {
    const code = body.charCodeAt(position);
    if (isNameContinue(code)) {
      ++position;
    } else {
      break;
    }
  }
  return createToken(
    lexer,
    TokenKind.NAME,
    start,
    position,
    body.slice(start, position)
  );
}
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
function inspect(value) {
  return formatValue(value, []);
}
function formatValue(value, seenValues) {
  switch (typeof value) {
    case "string":
      return JSON.stringify(value);
    case "function":
      return value.name ? `[function ${value.name}]` : "[function]";
    case "object":
      return formatObjectValue(value, seenValues);
    default:
      return String(value);
  }
}
function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return "null";
  }
  if (previouslySeenValues.includes(value)) {
    return "[Circular]";
  }
  const seenValues = [...previouslySeenValues, value];
  if (isJSONable(value)) {
    const jsonValue = value.toJSON();
    if (jsonValue !== value) {
      return typeof jsonValue === "string" ? jsonValue : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }
  return formatObject(value, seenValues);
}
function isJSONable(value) {
  return typeof value.toJSON === "function";
}
function formatObject(object2, seenValues) {
  const entries = Object.entries(object2);
  if (entries.length === 0) {
    return "{}";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[" + getObjectTag(object2) + "]";
  }
  const properties = entries.map(
    ([key, value]) => key + ": " + formatValue(value, seenValues)
  );
  return "{ " + properties.join(", ") + " }";
}
function formatArray(array2, seenValues) {
  if (array2.length === 0) {
    return "[]";
  }
  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return "[Array]";
  }
  const len = Math.min(MAX_ARRAY_LENGTH, array2.length);
  const remaining = array2.length - len;
  const items = [];
  for (let i2 = 0; i2 < len; ++i2) {
    items.push(formatValue(array2[i2], seenValues));
  }
  if (remaining === 1) {
    items.push("... 1 more item");
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }
  return "[" + items.join(", ") + "]";
}
function getObjectTag(object2) {
  const tag = Object.prototype.toString.call(object2).replace(/^\[object /, "").replace(/]$/, "");
  if (tag === "Object" && typeof object2.constructor === "function") {
    const name = object2.constructor.name;
    if (typeof name === "string" && name !== "") {
      return name;
    }
  }
  return tag;
}
const instanceOf = (
  /* c8 ignore next 6 */
  // FIXME: https://github.com/graphql/graphql-js/issues/2317
  globalThis.process && globalThis.process.env.NODE_ENV === "production" ? function instanceOf2(value, constructor) {
    return value instanceof constructor;
  } : function instanceOf3(value, constructor) {
    if (value instanceof constructor) {
      return true;
    }
    if (typeof value === "object" && value !== null) {
      var _value$constructor;
      const className = constructor.prototype[Symbol.toStringTag];
      const valueClassName = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in value ? value[Symbol.toStringTag] : (_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor.name
      );
      if (className === valueClassName) {
        const stringifiedValue = inspect(value);
        throw new Error(`Cannot use ${className} "${stringifiedValue}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
      }
    }
    return false;
  }
);
class Source {
  constructor(body, name = "GraphQL request", locationOffset = {
    line: 1,
    column: 1
  }) {
    typeof body === "string" || devAssert(false, `Body must be a string. Received: ${inspect(body)}.`);
    this.body = body;
    this.name = name;
    this.locationOffset = locationOffset;
    this.locationOffset.line > 0 || devAssert(
      false,
      "line in locationOffset is 1-indexed and must be positive."
    );
    this.locationOffset.column > 0 || devAssert(
      false,
      "column in locationOffset is 1-indexed and must be positive."
    );
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function isSource(source) {
  return instanceOf(source, Source);
}
function parse(source, options) {
  const parser = new Parser(source, options);
  return parser.parseDocument();
}
class Parser {
  constructor(source, options = {}) {
    const sourceObj = isSource(source) ? source : new Source(source);
    this._lexer = new Lexer(sourceObj);
    this._options = options;
    this._tokenCounter = 0;
  }
  /**
   * Converts a name lex token into a name parse node.
   */
  parseName() {
    const token = this.expectToken(TokenKind.NAME);
    return this.node(token, {
      kind: Kind.NAME,
      value: token.value
    });
  }
  // Implements the parsing rules in the Document section.
  /**
   * Document : Definition+
   */
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: Kind.DOCUMENT,
      definitions: this.many(
        TokenKind.SOF,
        this.parseDefinition,
        TokenKind.EOF
      )
    });
  }
  /**
   * Definition :
   *   - ExecutableDefinition
   *   - TypeSystemDefinition
   *   - TypeSystemExtension
   *
   * ExecutableDefinition :
   *   - OperationDefinition
   *   - FragmentDefinition
   *
   * TypeSystemDefinition :
   *   - SchemaDefinition
   *   - TypeDefinition
   *   - DirectiveDefinition
   *
   * TypeDefinition :
   *   - ScalarTypeDefinition
   *   - ObjectTypeDefinition
   *   - InterfaceTypeDefinition
   *   - UnionTypeDefinition
   *   - EnumTypeDefinition
   *   - InputObjectTypeDefinition
   */
  parseDefinition() {
    if (this.peek(TokenKind.BRACE_L)) {
      return this.parseOperationDefinition();
    }
    const hasDescription = this.peekDescription();
    const keywordToken = hasDescription ? this._lexer.lookahead() : this._lexer.token;
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (hasDescription) {
        throw syntaxError(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      }
      switch (keywordToken.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  // Implements the parsing rules in the Operations section.
  /**
   * OperationDefinition :
   *  - SelectionSet
   *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
   */
  parseOperationDefinition() {
    const start = this._lexer.token;
    if (this.peek(TokenKind.BRACE_L)) {
      return this.node(start, {
        kind: Kind.OPERATION_DEFINITION,
        operation: OperationTypeNode.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet()
      });
    }
    const operation = this.parseOperationType();
    let name;
    if (this.peek(TokenKind.NAME)) {
      name = this.parseName();
    }
    return this.node(start, {
      kind: Kind.OPERATION_DEFINITION,
      operation,
      name,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * OperationType : one of query mutation subscription
   */
  parseOperationType() {
    const operationToken = this.expectToken(TokenKind.NAME);
    switch (operationToken.value) {
      case "query":
        return OperationTypeNode.QUERY;
      case "mutation":
        return OperationTypeNode.MUTATION;
      case "subscription":
        return OperationTypeNode.SUBSCRIPTION;
    }
    throw this.unexpected(operationToken);
  }
  /**
   * VariableDefinitions : ( VariableDefinition+ )
   */
  parseVariableDefinitions() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseVariableDefinition,
      TokenKind.PAREN_R
    );
  }
  /**
   * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
   */
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: Kind.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(TokenKind.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(TokenKind.EQUALS) ? this.parseConstValueLiteral() : void 0,
      directives: this.parseConstDirectives()
    });
  }
  /**
   * Variable : $ Name
   */
  parseVariable() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.DOLLAR);
    return this.node(start, {
      kind: Kind.VARIABLE,
      name: this.parseName()
    });
  }
  /**
   * ```
   * SelectionSet : { Selection+ }
   * ```
   */
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: Kind.SELECTION_SET,
      selections: this.many(
        TokenKind.BRACE_L,
        this.parseSelection,
        TokenKind.BRACE_R
      )
    });
  }
  /**
   * Selection :
   *   - Field
   *   - FragmentSpread
   *   - InlineFragment
   */
  parseSelection() {
    return this.peek(TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
  }
  /**
   * Field : Alias? Name Arguments? Directives? SelectionSet?
   *
   * Alias : Name :
   */
  parseField() {
    const start = this._lexer.token;
    const nameOrAlias = this.parseName();
    let alias;
    let name;
    if (this.expectOptionalToken(TokenKind.COLON)) {
      alias = nameOrAlias;
      name = this.parseName();
    } else {
      name = nameOrAlias;
    }
    return this.node(start, {
      kind: Kind.FIELD,
      alias,
      name,
      arguments: this.parseArguments(false),
      directives: this.parseDirectives(false),
      selectionSet: this.peek(TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0
    });
  }
  /**
   * Arguments[Const] : ( Argument[?Const]+ )
   */
  parseArguments(isConst) {
    const item = isConst ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(TokenKind.PAREN_L, item, TokenKind.PAREN_R);
  }
  /**
   * Argument[Const] : Name : Value[?Const]
   */
  parseArgument(isConst = false) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.ARGUMENT,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  parseConstArgument() {
    return this.parseArgument(true);
  }
  // Implements the parsing rules in the Fragments section.
  /**
   * Corresponds to both FragmentSpread and InlineFragment in the spec.
   *
   * FragmentSpread : ... FragmentName Directives?
   *
   * InlineFragment : ... TypeCondition? Directives? SelectionSet
   */
  parseFragment() {
    const start = this._lexer.token;
    this.expectToken(TokenKind.SPREAD);
    const hasTypeCondition = this.expectOptionalKeyword("on");
    if (!hasTypeCondition && this.peek(TokenKind.NAME)) {
      return this.node(start, {
        kind: Kind.FRAGMENT_SPREAD,
        name: this.parseFragmentName(),
        directives: this.parseDirectives(false)
      });
    }
    return this.node(start, {
      kind: Kind.INLINE_FRAGMENT,
      typeCondition: hasTypeCondition ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentDefinition :
   *   - fragment FragmentName on TypeCondition Directives? SelectionSet
   *
   * TypeCondition : NamedType
   */
  parseFragmentDefinition() {
    const start = this._lexer.token;
    this.expectKeyword("fragment");
    if (this._options.allowLegacyFragmentVariables === true) {
      return this.node(start, {
        kind: Kind.FRAGMENT_DEFINITION,
        name: this.parseFragmentName(),
        variableDefinitions: this.parseVariableDefinitions(),
        typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
        directives: this.parseDirectives(false),
        selectionSet: this.parseSelectionSet()
      });
    }
    return this.node(start, {
      kind: Kind.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(false),
      selectionSet: this.parseSelectionSet()
    });
  }
  /**
   * FragmentName : Name but not `on`
   */
  parseFragmentName() {
    if (this._lexer.token.value === "on") {
      throw this.unexpected();
    }
    return this.parseName();
  }
  // Implements the parsing rules in the Values section.
  /**
   * Value[Const] :
   *   - [~Const] Variable
   *   - IntValue
   *   - FloatValue
   *   - StringValue
   *   - BooleanValue
   *   - NullValue
   *   - EnumValue
   *   - ListValue[?Const]
   *   - ObjectValue[?Const]
   *
   * BooleanValue : one of `true` `false`
   *
   * NullValue : `null`
   *
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseValueLiteral(isConst) {
    const token = this._lexer.token;
    switch (token.kind) {
      case TokenKind.BRACKET_L:
        return this.parseList(isConst);
      case TokenKind.BRACE_L:
        return this.parseObject(isConst);
      case TokenKind.INT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.INT,
          value: token.value
        });
      case TokenKind.FLOAT:
        this.advanceLexer();
        return this.node(token, {
          kind: Kind.FLOAT,
          value: token.value
        });
      case TokenKind.STRING:
      case TokenKind.BLOCK_STRING:
        return this.parseStringLiteral();
      case TokenKind.NAME:
        this.advanceLexer();
        switch (token.value) {
          case "true":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: true
            });
          case "false":
            return this.node(token, {
              kind: Kind.BOOLEAN,
              value: false
            });
          case "null":
            return this.node(token, {
              kind: Kind.NULL
            });
          default:
            return this.node(token, {
              kind: Kind.ENUM,
              value: token.value
            });
        }
      case TokenKind.DOLLAR:
        if (isConst) {
          this.expectToken(TokenKind.DOLLAR);
          if (this._lexer.token.kind === TokenKind.NAME) {
            const varName = this._lexer.token.value;
            throw syntaxError(
              this._lexer.source,
              token.start,
              `Unexpected variable "$${varName}" in constant value.`
            );
          } else {
            throw this.unexpected(token);
          }
        }
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(true);
  }
  parseStringLiteral() {
    const token = this._lexer.token;
    this.advanceLexer();
    return this.node(token, {
      kind: Kind.STRING,
      value: token.value,
      block: token.kind === TokenKind.BLOCK_STRING
    });
  }
  /**
   * ListValue[Const] :
   *   - [ ]
   *   - [ Value[?Const]+ ]
   */
  parseList(isConst) {
    const item = () => this.parseValueLiteral(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.LIST,
      values: this.any(TokenKind.BRACKET_L, item, TokenKind.BRACKET_R)
    });
  }
  /**
   * ```
   * ObjectValue[Const] :
   *   - { }
   *   - { ObjectField[?Const]+ }
   * ```
   */
  parseObject(isConst) {
    const item = () => this.parseObjectField(isConst);
    return this.node(this._lexer.token, {
      kind: Kind.OBJECT,
      fields: this.any(TokenKind.BRACE_L, item, TokenKind.BRACE_R)
    });
  }
  /**
   * ObjectField[Const] : Name : Value[?Const]
   */
  parseObjectField(isConst) {
    const start = this._lexer.token;
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    return this.node(start, {
      kind: Kind.OBJECT_FIELD,
      name,
      value: this.parseValueLiteral(isConst)
    });
  }
  // Implements the parsing rules in the Directives section.
  /**
   * Directives[Const] : Directive[?Const]+
   */
  parseDirectives(isConst) {
    const directives = [];
    while (this.peek(TokenKind.AT)) {
      directives.push(this.parseDirective(isConst));
    }
    return directives;
  }
  parseConstDirectives() {
    return this.parseDirectives(true);
  }
  /**
   * ```
   * Directive[Const] : @ Name Arguments[?Const]?
   * ```
   */
  parseDirective(isConst) {
    const start = this._lexer.token;
    this.expectToken(TokenKind.AT);
    return this.node(start, {
      kind: Kind.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(isConst)
    });
  }
  // Implements the parsing rules in the Types section.
  /**
   * Type :
   *   - NamedType
   *   - ListType
   *   - NonNullType
   */
  parseTypeReference() {
    const start = this._lexer.token;
    let type;
    if (this.expectOptionalToken(TokenKind.BRACKET_L)) {
      const innerType = this.parseTypeReference();
      this.expectToken(TokenKind.BRACKET_R);
      type = this.node(start, {
        kind: Kind.LIST_TYPE,
        type: innerType
      });
    } else {
      type = this.parseNamedType();
    }
    if (this.expectOptionalToken(TokenKind.BANG)) {
      return this.node(start, {
        kind: Kind.NON_NULL_TYPE,
        type
      });
    }
    return type;
  }
  /**
   * NamedType : Name
   */
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: Kind.NAMED_TYPE,
      name: this.parseName()
    });
  }
  // Implements the parsing rules in the Type Definition section.
  peekDescription() {
    return this.peek(TokenKind.STRING) || this.peek(TokenKind.BLOCK_STRING);
  }
  /**
   * Description : StringValue
   */
  parseDescription() {
    if (this.peekDescription()) {
      return this.parseStringLiteral();
    }
  }
  /**
   * ```
   * SchemaDefinition : Description? schema Directives[Const]? { OperationTypeDefinition+ }
   * ```
   */
  parseSchemaDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.many(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    return this.node(start, {
      kind: Kind.SCHEMA_DEFINITION,
      description,
      directives,
      operationTypes
    });
  }
  /**
   * OperationTypeDefinition : OperationType : NamedType
   */
  parseOperationTypeDefinition() {
    const start = this._lexer.token;
    const operation = this.parseOperationType();
    this.expectToken(TokenKind.COLON);
    const type = this.parseNamedType();
    return this.node(start, {
      kind: Kind.OPERATION_TYPE_DEFINITION,
      operation,
      type
    });
  }
  /**
   * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
   */
  parseScalarTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * ObjectTypeDefinition :
   *   Description?
   *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
   */
  parseObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * ImplementsInterfaces :
   *   - implements `&`? NamedType
   *   - ImplementsInterfaces & NamedType
   */
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements") ? this.delimitedMany(TokenKind.AMP, this.parseNamedType) : [];
  }
  /**
   * ```
   * FieldsDefinition : { FieldDefinition+ }
   * ```
   */
  parseFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseFieldDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * FieldDefinition :
   *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
   */
  parseFieldDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.FIELD_DEFINITION,
      description,
      name,
      arguments: args,
      type,
      directives
    });
  }
  /**
   * ArgumentsDefinition : ( InputValueDefinition+ )
   */
  parseArgumentDefs() {
    return this.optionalMany(
      TokenKind.PAREN_L,
      this.parseInputValueDef,
      TokenKind.PAREN_R
    );
  }
  /**
   * InputValueDefinition :
   *   - Description? Name : Type DefaultValue? Directives[Const]?
   */
  parseInputValueDef() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseName();
    this.expectToken(TokenKind.COLON);
    const type = this.parseTypeReference();
    let defaultValue;
    if (this.expectOptionalToken(TokenKind.EQUALS)) {
      defaultValue = this.parseConstValueLiteral();
    }
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.INPUT_VALUE_DEFINITION,
      description,
      name,
      type,
      defaultValue,
      directives
    });
  }
  /**
   * InterfaceTypeDefinition :
   *   - Description? interface Name Directives[Const]? FieldsDefinition?
   */
  parseInterfaceTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_DEFINITION,
      description,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeDefinition :
   *   - Description? union Name Directives[Const]? UnionMemberTypes?
   */
  parseUnionTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types2 = this.parseUnionMemberTypes();
    return this.node(start, {
      kind: Kind.UNION_TYPE_DEFINITION,
      description,
      name,
      directives,
      types: types2
    });
  }
  /**
   * UnionMemberTypes :
   *   - = `|`? NamedType
   *   - UnionMemberTypes | NamedType
   */
  parseUnionMemberTypes() {
    return this.expectOptionalToken(TokenKind.EQUALS) ? this.delimitedMany(TokenKind.PIPE, this.parseNamedType) : [];
  }
  /**
   * EnumTypeDefinition :
   *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
   */
  parseEnumTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    return this.node(start, {
      kind: Kind.ENUM_TYPE_DEFINITION,
      description,
      name,
      directives,
      values
    });
  }
  /**
   * ```
   * EnumValuesDefinition : { EnumValueDefinition+ }
   * ```
   */
  parseEnumValuesDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseEnumValueDefinition,
      TokenKind.BRACE_R
    );
  }
  /**
   * EnumValueDefinition : Description? EnumValue Directives[Const]?
   */
  parseEnumValueDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    const name = this.parseEnumValueName();
    const directives = this.parseConstDirectives();
    return this.node(start, {
      kind: Kind.ENUM_VALUE_DEFINITION,
      description,
      name,
      directives
    });
  }
  /**
   * EnumValue : Name but not `true`, `false` or `null`
   */
  parseEnumValueName() {
    if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") {
      throw syntaxError(
        this._lexer.source,
        this._lexer.token.start,
        `${getTokenDesc(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    }
    return this.parseName();
  }
  /**
   * InputObjectTypeDefinition :
   *   - Description? input Name Directives[Const]? InputFieldsDefinition?
   */
  parseInputObjectTypeDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
      description,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * InputFieldsDefinition : { InputValueDefinition+ }
   * ```
   */
  parseInputFieldsDefinition() {
    return this.optionalMany(
      TokenKind.BRACE_L,
      this.parseInputValueDef,
      TokenKind.BRACE_R
    );
  }
  /**
   * TypeSystemExtension :
   *   - SchemaExtension
   *   - TypeExtension
   *
   * TypeExtension :
   *   - ScalarTypeExtension
   *   - ObjectTypeExtension
   *   - InterfaceTypeExtension
   *   - UnionTypeExtension
   *   - EnumTypeExtension
   *   - InputObjectTypeDefinition
   */
  parseTypeSystemExtension() {
    const keywordToken = this._lexer.lookahead();
    if (keywordToken.kind === TokenKind.NAME) {
      switch (keywordToken.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    }
    throw this.unexpected(keywordToken);
  }
  /**
   * ```
   * SchemaExtension :
   *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
   *  - extend schema Directives[Const]
   * ```
   */
  parseSchemaExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("schema");
    const directives = this.parseConstDirectives();
    const operationTypes = this.optionalMany(
      TokenKind.BRACE_L,
      this.parseOperationTypeDefinition,
      TokenKind.BRACE_R
    );
    if (directives.length === 0 && operationTypes.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCHEMA_EXTENSION,
      directives,
      operationTypes
    });
  }
  /**
   * ScalarTypeExtension :
   *   - extend scalar Name Directives[Const]
   */
  parseScalarTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("scalar");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    if (directives.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.SCALAR_TYPE_EXTENSION,
      name,
      directives
    });
  }
  /**
   * ObjectTypeExtension :
   *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend type Name ImplementsInterfaces? Directives[Const]
   *  - extend type Name ImplementsInterfaces
   */
  parseObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("type");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.OBJECT_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * InterfaceTypeExtension :
   *  - extend interface Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
   *  - extend interface Name ImplementsInterfaces? Directives[Const]
   *  - extend interface Name ImplementsInterfaces
   */
  parseInterfaceTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("interface");
    const name = this.parseName();
    const interfaces = this.parseImplementsInterfaces();
    const directives = this.parseConstDirectives();
    const fields = this.parseFieldsDefinition();
    if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INTERFACE_TYPE_EXTENSION,
      name,
      interfaces,
      directives,
      fields
    });
  }
  /**
   * UnionTypeExtension :
   *   - extend union Name Directives[Const]? UnionMemberTypes
   *   - extend union Name Directives[Const]
   */
  parseUnionTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("union");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const types2 = this.parseUnionMemberTypes();
    if (directives.length === 0 && types2.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.UNION_TYPE_EXTENSION,
      name,
      directives,
      types: types2
    });
  }
  /**
   * EnumTypeExtension :
   *   - extend enum Name Directives[Const]? EnumValuesDefinition
   *   - extend enum Name Directives[Const]
   */
  parseEnumTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("enum");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const values = this.parseEnumValuesDefinition();
    if (directives.length === 0 && values.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.ENUM_TYPE_EXTENSION,
      name,
      directives,
      values
    });
  }
  /**
   * InputObjectTypeExtension :
   *   - extend input Name Directives[Const]? InputFieldsDefinition
   *   - extend input Name Directives[Const]
   */
  parseInputObjectTypeExtension() {
    const start = this._lexer.token;
    this.expectKeyword("extend");
    this.expectKeyword("input");
    const name = this.parseName();
    const directives = this.parseConstDirectives();
    const fields = this.parseInputFieldsDefinition();
    if (directives.length === 0 && fields.length === 0) {
      throw this.unexpected();
    }
    return this.node(start, {
      kind: Kind.INPUT_OBJECT_TYPE_EXTENSION,
      name,
      directives,
      fields
    });
  }
  /**
   * ```
   * DirectiveDefinition :
   *   - Description? directive @ Name ArgumentsDefinition? `repeatable`? on DirectiveLocations
   * ```
   */
  parseDirectiveDefinition() {
    const start = this._lexer.token;
    const description = this.parseDescription();
    this.expectKeyword("directive");
    this.expectToken(TokenKind.AT);
    const name = this.parseName();
    const args = this.parseArgumentDefs();
    const repeatable = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const locations = this.parseDirectiveLocations();
    return this.node(start, {
      kind: Kind.DIRECTIVE_DEFINITION,
      description,
      name,
      arguments: args,
      repeatable,
      locations
    });
  }
  /**
   * DirectiveLocations :
   *   - `|`? DirectiveLocation
   *   - DirectiveLocations | DirectiveLocation
   */
  parseDirectiveLocations() {
    return this.delimitedMany(TokenKind.PIPE, this.parseDirectiveLocation);
  }
  /*
   * DirectiveLocation :
   *   - ExecutableDirectiveLocation
   *   - TypeSystemDirectiveLocation
   *
   * ExecutableDirectiveLocation : one of
   *   `QUERY`
   *   `MUTATION`
   *   `SUBSCRIPTION`
   *   `FIELD`
   *   `FRAGMENT_DEFINITION`
   *   `FRAGMENT_SPREAD`
   *   `INLINE_FRAGMENT`
   *
   * TypeSystemDirectiveLocation : one of
   *   `SCHEMA`
   *   `SCALAR`
   *   `OBJECT`
   *   `FIELD_DEFINITION`
   *   `ARGUMENT_DEFINITION`
   *   `INTERFACE`
   *   `UNION`
   *   `ENUM`
   *   `ENUM_VALUE`
   *   `INPUT_OBJECT`
   *   `INPUT_FIELD_DEFINITION`
   */
  parseDirectiveLocation() {
    const start = this._lexer.token;
    const name = this.parseName();
    if (Object.prototype.hasOwnProperty.call(DirectiveLocation, name.value)) {
      return name;
    }
    throw this.unexpected(start);
  }
  // Core parsing utility functions
  /**
   * Returns a node that, if configured to do so, sets a "loc" field as a
   * location object, used to identify the place in the source that created a
   * given parsed object.
   */
  node(startToken, node) {
    if (this._options.noLocation !== true) {
      node.loc = new Location(
        startToken,
        this._lexer.lastToken,
        this._lexer.source
      );
    }
    return node;
  }
  /**
   * Determines if the next token is of a given kind
   */
  peek(kind) {
    return this._lexer.token.kind === kind;
  }
  /**
   * If the next token is of the given kind, return that token after advancing the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return token;
    }
    throw syntaxError(
      this._lexer.source,
      token.start,
      `Expected ${getTokenKindDesc(kind)}, found ${getTokenDesc(token)}.`
    );
  }
  /**
   * If the next token is of the given kind, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalToken(kind) {
    const token = this._lexer.token;
    if (token.kind === kind) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * If the next token is a given keyword, advance the lexer.
   * Otherwise, do not change the parser state and throw an error.
   */
  expectKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
    } else {
      throw syntaxError(
        this._lexer.source,
        token.start,
        `Expected "${value}", found ${getTokenDesc(token)}.`
      );
    }
  }
  /**
   * If the next token is a given keyword, return "true" after advancing the lexer.
   * Otherwise, do not change the parser state and return "false".
   */
  expectOptionalKeyword(value) {
    const token = this._lexer.token;
    if (token.kind === TokenKind.NAME && token.value === value) {
      this.advanceLexer();
      return true;
    }
    return false;
  }
  /**
   * Helper function for creating an error when an unexpected lexed token is encountered.
   */
  unexpected(atToken) {
    const token = atToken !== null && atToken !== void 0 ? atToken : this._lexer.token;
    return syntaxError(
      this._lexer.source,
      token.start,
      `Unexpected ${getTokenDesc(token)}.`
    );
  }
  /**
   * Returns a possibly empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  any(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    while (!this.expectOptionalToken(closeKind)) {
      nodes.push(parseFn.call(this));
    }
    return nodes;
  }
  /**
   * Returns a list of parse nodes, determined by the parseFn.
   * It can be empty only if open token is missing otherwise it will always return non-empty list
   * that begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  optionalMany(openKind, parseFn, closeKind) {
    if (this.expectOptionalToken(openKind)) {
      const nodes = [];
      do {
        nodes.push(parseFn.call(this));
      } while (!this.expectOptionalToken(closeKind));
      return nodes;
    }
    return [];
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list begins with a lex token of openKind and ends with a lex token of closeKind.
   * Advances the parser to the next lex token after the closing token.
   */
  many(openKind, parseFn, closeKind) {
    this.expectToken(openKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (!this.expectOptionalToken(closeKind));
    return nodes;
  }
  /**
   * Returns a non-empty list of parse nodes, determined by the parseFn.
   * This list may begin with a lex token of delimiterKind followed by items separated by lex tokens of tokenKind.
   * Advances the parser to the next lex token after last item in the list.
   */
  delimitedMany(delimiterKind, parseFn) {
    this.expectOptionalToken(delimiterKind);
    const nodes = [];
    do {
      nodes.push(parseFn.call(this));
    } while (this.expectOptionalToken(delimiterKind));
    return nodes;
  }
  advanceLexer() {
    const { maxTokens } = this._options;
    const token = this._lexer.advance();
    if (maxTokens !== void 0 && token.kind !== TokenKind.EOF) {
      ++this._tokenCounter;
      if (this._tokenCounter > maxTokens) {
        throw syntaxError(
          this._lexer.source,
          token.start,
          `Document contains more that ${maxTokens} tokens. Parsing aborted.`
        );
      }
    }
  }
}
function getTokenDesc(token) {
  const value = token.value;
  return getTokenKindDesc(token.kind) + (value != null ? ` "${value}"` : "");
}
function getTokenKindDesc(kind) {
  return isPunctuatorTokenKind(kind) ? `"${kind}"` : kind;
}
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
}
const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
}
const escapeSequences = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
];
const BREAK = Object.freeze({});
function visit(root2, visitor, visitorKeys = QueryDocumentKeys) {
  const enterLeaveMap = /* @__PURE__ */ new Map();
  for (const kind of Object.values(Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  let stack = void 0;
  let inArray = Array.isArray(root2);
  let keys = [root2];
  let index = -1;
  let edits = [];
  let node = root2;
  let key = void 0;
  let parent = void 0;
  const path2 = [];
  const ancestors = [];
  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;
    if (isLeaving) {
      key = ancestors.length === 0 ? void 0 : path2[path2.length - 1];
      node = parent;
      parent = ancestors.pop();
      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;
          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;
            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node)
          );
          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }
      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else if (parent) {
      key = inArray ? index : keys[index];
      node = parent[key];
      if (node === null || node === void 0) {
        continue;
      }
      path2.push(key);
    }
    let result;
    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;
      isNode(node) || devAssert(false, `Invalid AST Node: ${inspect(node)}.`);
      const visitFn = isLeaving ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get === void 0 ? void 0 : _enterLeaveMap$get.leave : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null || _enterLeaveMap$get2 === void 0 ? void 0 : _enterLeaveMap$get2.enter;
      result = visitFn === null || visitFn === void 0 ? void 0 : visitFn.call(visitor, node, key, parent, path2, ancestors);
      if (result === BREAK) {
        break;
      }
      if (result === false) {
        if (!isLeaving) {
          path2.pop();
          continue;
        }
      } else if (result !== void 0) {
        edits.push([key, result]);
        if (!isLeaving) {
          if (isNode(result)) {
            node = result;
          } else {
            path2.pop();
            continue;
          }
        }
      }
    }
    if (result === void 0 && isEdited) {
      edits.push([key, node]);
    }
    if (isLeaving) {
      path2.pop();
    } else {
      var _node$kind;
      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack
      };
      inArray = Array.isArray(node);
      keys = inArray ? node : (_node$kind = visitorKeys[node.kind]) !== null && _node$kind !== void 0 ? _node$kind : [];
      index = -1;
      edits = [];
      if (parent) {
        ancestors.push(parent);
      }
      parent = node;
    }
  } while (stack !== void 0);
  if (edits.length !== 0) {
    return edits[edits.length - 1][1];
  }
  return root2;
}
function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];
  if (typeof kindVisitor === "object") {
    return kindVisitor;
  } else if (typeof kindVisitor === "function") {
    return {
      enter: kindVisitor,
      leave: void 0
    };
  }
  return {
    enter: visitor.enter,
    leave: visitor.leave
  };
}
function print$1(ast) {
  return visit(ast, printDocASTReducer);
}
const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value
  },
  Variable: {
    leave: (node) => "$" + node.name
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, "\n\n")
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap$1("(", join(node.variableDefinitions, ", "), ")");
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, " ")
        ],
        " "
      );
      return (prefix === "query" ? "" : prefix + " ") + node.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) => variable + ": " + type + wrap$1(" = ", defaultValue) + wrap$1(" ", join(directives, " "))
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections)
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap$1("", alias, ": ") + name;
      let argsLine = prefix + wrap$1("(", join(args, ", "), ")");
      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap$1("(\n", indent(join(args, "\n")), "\n)");
      }
      return join([argsLine, join(directives, " "), selectionSet], " ");
    }
  },
  Argument: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) => "..." + name + wrap$1(" ", join(directives, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) => join(
      [
        "...",
        wrap$1("on ", typeCondition),
        join(directives, " "),
        selectionSet
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name, typeCondition, variableDefinitions, directives, selectionSet }) => (
      // or removed in the future.
      `fragment ${name}${wrap$1("(", join(variableDefinitions, ", "), ")")} on ${typeCondition} ${wrap$1("", join(directives, " "), " ")}` + selectionSet
    )
  },
  // Value
  IntValue: {
    leave: ({ value }) => value
  },
  FloatValue: {
    leave: ({ value }) => value
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) => isBlockString ? printBlockString(value) : printString(value)
  },
  BooleanValue: {
    leave: ({ value }) => value ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value }) => value
  },
  ListValue: {
    leave: ({ values }) => "[" + join(values, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields }) => "{" + join(fields, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name, value }) => name + ": " + value
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) => "@" + name + wrap$1("(", join(args, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name }) => name
  },
  ListType: {
    leave: ({ type }) => "[" + type + "]"
  },
  NonNullType: {
    leave: ({ type }) => type + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) => wrap$1("", description, "\n") + join(["schema", join(directives, " "), block(operationTypes)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ": " + type
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) => wrap$1("", description, "\n") + join(["scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap$1("", description, "\n") + join(
      [
        "type",
        name,
        wrap$1("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) => wrap$1("", description, "\n") + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + ": " + type + wrap$1(" ", join(directives, " "))
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) => wrap$1("", description, "\n") + join(
      [name + ": " + type, wrap$1("= ", defaultValue), join(directives, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) => wrap$1("", description, "\n") + join(
      [
        "interface",
        name,
        wrap$1("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types: types2 }) => wrap$1("", description, "\n") + join(
      ["union", name, join(directives, " "), wrap$1("= ", join(types2, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) => wrap$1("", description, "\n") + join(["enum", name, join(directives, " "), block(values)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) => wrap$1("", description, "\n") + join([name, join(directives, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) => wrap$1("", description, "\n") + join(["input", name, join(directives, " "), block(fields)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) => wrap$1("", description, "\n") + "directive @" + name + (hasMultilineItems(args) ? wrap$1("(\n", indent(join(args, "\n")), "\n)") : wrap$1("(", join(args, ", "), ")")) + (repeatable ? " repeatable" : "") + " on " + join(locations, " | ")
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) => join(
      ["extend schema", join(directives, " "), block(operationTypes)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) => join(["extend scalar", name, join(directives, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend type",
        name,
        wrap$1("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) => join(
      [
        "extend interface",
        name,
        wrap$1("implements ", join(interfaces, " & ")),
        join(directives, " "),
        block(fields)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types: types2 }) => join(
      [
        "extend union",
        name,
        join(directives, " "),
        wrap$1("= ", join(types2, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) => join(["extend enum", name, join(directives, " "), block(values)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) => join(["extend input", name, join(directives, " "), block(fields)], " ")
  }
};
function join(maybeArray, separator = "") {
  var _maybeArray$filter$jo;
  return (_maybeArray$filter$jo = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.filter((x2) => x2).join(separator)) !== null && _maybeArray$filter$jo !== void 0 ? _maybeArray$filter$jo : "";
}
function block(array2) {
  return wrap$1("{\n", indent(join(array2, "\n")), "\n}");
}
function wrap$1(start, maybeString, end = "") {
  return maybeString != null && maybeString !== "" ? start + maybeString + end : "";
}
function indent(str) {
  return wrap$1("  ", str.replace(/\n/g, "\n  "));
}
function hasMultilineItems(maybeArray) {
  var _maybeArray$some;
  return (_maybeArray$some = maybeArray === null || maybeArray === void 0 ? void 0 : maybeArray.some((str) => str.includes("\n"))) !== null && _maybeArray$some !== void 0 ? _maybeArray$some : false;
}
function isSelectionNode(node) {
  return node.kind === Kind.FIELD || node.kind === Kind.FRAGMENT_SPREAD || node.kind === Kind.INLINE_FRAGMENT;
}
function shouldInclude(_a2, variables) {
  var directives = _a2.directives;
  if (!directives || !directives.length) {
    return true;
  }
  return getInclusionDirectives(directives).every(function(_a3) {
    var directive = _a3.directive, ifArgument = _a3.ifArgument;
    var evaledValue = false;
    if (ifArgument.value.kind === "Variable") {
      evaledValue = variables && variables[ifArgument.value.name.value];
      invariant$1(evaledValue !== void 0, 66, directive.name.value);
    } else {
      evaledValue = ifArgument.value.value;
    }
    return directive.name.value === "skip" ? !evaledValue : evaledValue;
  });
}
function hasDirectives(names, root2, all) {
  var nameSet = new Set(names);
  var uniqueCount = nameSet.size;
  visit(root2, {
    Directive: function(node) {
      if (nameSet.delete(node.name.value) && (!all || !nameSet.size)) {
        return BREAK;
      }
    }
  });
  return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document2) {
  return document2 && hasDirectives(["client", "export"], document2, true);
}
function isInclusionDirective(_a2) {
  var value = _a2.name.value;
  return value === "skip" || value === "include";
}
function getInclusionDirectives(directives) {
  var result = [];
  if (directives && directives.length) {
    directives.forEach(function(directive) {
      if (!isInclusionDirective(directive))
        return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      invariant$1(directiveArguments && directiveArguments.length === 1, 67, directiveName);
      var ifArgument = directiveArguments[0];
      invariant$1(ifArgument.name && ifArgument.name.value === "if", 68, directiveName);
      var ifValue = ifArgument.value;
      invariant$1(ifValue && (ifValue.kind === "Variable" || ifValue.kind === "BooleanValue"), 69, directiveName);
      result.push({ directive, ifArgument });
    });
  }
  return result;
}
const defaultMakeData = () => /* @__PURE__ */ Object.create(null);
const { forEach, slice } = Array.prototype;
const { hasOwnProperty: hasOwnProperty$6 } = Object.prototype;
class Trie {
  constructor(weakness = true, makeData = defaultMakeData) {
    this.weakness = weakness;
    this.makeData = makeData;
  }
  lookup(...array2) {
    return this.lookupArray(array2);
  }
  lookupArray(array2) {
    let node = this;
    forEach.call(array2, (key) => node = node.getChildTrie(key));
    return hasOwnProperty$6.call(node, "data") ? node.data : node.data = this.makeData(slice.call(array2));
  }
  peek(...array2) {
    return this.peekArray(array2);
  }
  peekArray(array2) {
    let node = this;
    for (let i2 = 0, len = array2.length; node && i2 < len; ++i2) {
      const map2 = this.weakness && isObjRef(array2[i2]) ? node.weak : node.strong;
      node = map2 && map2.get(array2[i2]);
    }
    return node && node.data;
  }
  getChildTrie(key) {
    const map2 = this.weakness && isObjRef(key) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let child = map2.get(key);
    if (!child)
      map2.set(key, child = new Trie(this.weakness, this.makeData));
    return child;
  }
}
function isObjRef(value) {
  switch (typeof value) {
    case "object":
      if (value === null)
        break;
    case "function":
      return true;
  }
  return false;
}
var canUseWeakMap = typeof WeakMap === "function" && maybe$1(function() {
  return navigator.product;
}) !== "ReactNative";
var canUseWeakSet = typeof WeakSet === "function";
var canUseSymbol = typeof Symbol === "function" && typeof Symbol.for === "function";
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof maybe$1(function() {
  return window.document.createElement;
}) === "function";
maybe$1(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
}) || false;
function isNonNullObject(obj) {
  return obj !== null && typeof obj === "object";
}
function getFragmentQueryDocument(document2, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document2.definitions.forEach(function(definition) {
    if (definition.kind === "OperationDefinition") {
      throw newInvariantError(
        70,
        definition.operation,
        definition.name ? " named '".concat(definition.name.value, "'") : ""
      );
    }
    if (definition.kind === "FragmentDefinition") {
      fragments.push(definition);
    }
  });
  if (typeof actualFragmentName === "undefined") {
    invariant$1(fragments.length === 1, 71, fragments.length);
    actualFragmentName = fragments[0].name.value;
  }
  var query = __assign(__assign({}, document2), { definitions: __spreadArray([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: actualFragmentName
            }
          }
        ]
      }
    }
  ], document2.definitions, true) });
  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }
  var symTable = {};
  fragments.forEach(function(fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case "InlineFragment":
      return selection;
    case "FragmentSpread": {
      var fragmentName = selection.name.value;
      if (typeof fragmentMap === "function") {
        return fragmentMap(fragmentName);
      }
      var fragment = fragmentMap && fragmentMap[fragmentName];
      invariant$1(fragment, 72, fragmentName);
      return fragment || null;
    }
    default:
      return null;
  }
}
function makeReference(id) {
  return { __ref: String(id) };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === "object" && typeof obj.__ref === "string");
}
function isDocumentNode(value) {
  return isNonNullObject(value) && value.kind === "Document" && Array.isArray(value.definitions);
}
function isStringValue(value) {
  return value.kind === "StringValue";
}
function isBooleanValue(value) {
  return value.kind === "BooleanValue";
}
function isIntValue(value) {
  return value.kind === "IntValue";
}
function isFloatValue(value) {
  return value.kind === "FloatValue";
}
function isVariable(value) {
  return value.kind === "Variable";
}
function isObjectValue(value) {
  return value.kind === "ObjectValue";
}
function isListValue(value) {
  return value.kind === "ListValue";
}
function isEnumValue(value) {
  return value.kind === "EnumValue";
}
function isNullValue(value) {
  return value.kind === "NullValue";
}
function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function(obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function(listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw newInvariantError(81, name.value, value.kind);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;
  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function(directive) {
      directivesObj[directive.name.value] = {};
      if (directive.arguments) {
        directive.arguments.forEach(function(_a2) {
          var name = _a2.name, value = _a2.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }
  var argObj = null;
  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }
  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
];
var getStoreKeyName = Object.assign(function(fieldName, args, directives) {
  if (args && directives && directives["connection"] && directives["connection"]["key"]) {
    if (directives["connection"]["filter"] && directives["connection"]["filter"].length > 0) {
      var filterKeys = directives["connection"]["filter"] ? directives["connection"]["filter"] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function(key) {
        filteredArgs_1[key] = args[key];
      });
      return "".concat(directives["connection"]["key"], "(").concat(stringify(filteredArgs_1), ")");
    } else {
      return directives["connection"]["key"];
    }
  }
  var completeFieldName = fieldName;
  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(".concat(stringifiedArgs, ")");
  }
  if (directives) {
    Object.keys(directives).forEach(function(key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
        return;
      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
      } else {
        completeFieldName += "@".concat(key);
      }
    });
  }
  return completeFieldName;
}, {
  setStringify: function(s2) {
    var previous = stringify;
    stringify = s2;
    return previous;
  }
});
var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
  if (isNonNullObject(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function(copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }
  return value;
}
function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function(_a2) {
      var name = _a2.name, value = _a2.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }
  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  var fragments;
  for (var _i = 0, _a2 = selectionSet.selections; _i < _a2.length; _i++) {
    var selection = _a2[_i];
    if (isField(selection)) {
      if (selection.name.value === "__typename") {
        return result[resultKeyNameFromField(selection)];
      }
    } else if (fragments) {
      fragments.push(selection);
    } else {
      fragments = [selection];
    }
  }
  if (typeof result.__typename === "string") {
    return result.__typename;
  }
  if (fragments) {
    for (var _b = 0, fragments_1 = fragments; _b < fragments_1.length; _b++) {
      var selection = fragments_1[_b];
      var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
      if (typeof typename === "string") {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === "Field";
}
function isInlineFragment(selection) {
  return selection.kind === "InlineFragment";
}
function checkDocument(doc) {
  invariant$1(doc && doc.kind === "Document", 73);
  var operations = doc.definitions.filter(function(d2) {
    return d2.kind !== "FragmentDefinition";
  }).map(function(definition) {
    if (definition.kind !== "OperationDefinition") {
      throw newInvariantError(74, definition.kind);
    }
    return definition;
  });
  invariant$1(operations.length <= 1, 75, operations.length);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition";
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "OperationDefinition" && !!definition.name;
  }).map(function(x2) {
    return x2.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function(definition) {
    return definition.kind === "FragmentDefinition";
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  invariant$1(queryDef && queryDef.operation === "query", 76);
  return queryDef;
}
function getFragmentDefinition(doc) {
  invariant$1(doc.kind === "Document", 77);
  invariant$1(doc.definitions.length <= 1, 78);
  var fragmentDef = doc.definitions[0];
  invariant$1(fragmentDef.kind === "FragmentDefinition", 79);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;
  for (var _i = 0, _a2 = queryDoc.definitions; _i < _a2.length; _i++) {
    var definition = _a2[_i];
    if (definition.kind === "OperationDefinition") {
      var operation = definition.operation;
      if (operation === "query" || operation === "mutation" || operation === "subscription") {
        return definition;
      }
    }
    if (definition.kind === "FragmentDefinition" && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }
  if (fragmentDefinition) {
    return fragmentDefinition;
  }
  throw newInvariantError(80);
}
function getDefaultValues(definition) {
  var defaultValues = /* @__PURE__ */ Object.create(null);
  var defs = definition && definition.variableDefinitions;
  if (defs && defs.length) {
    defs.forEach(function(def) {
      if (def.defaultValue) {
        valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }
  return defaultValues;
}
function identity(document2) {
  return document2;
}
var DocumentTransform = function() {
  function DocumentTransform2(transform, options) {
    if (options === void 0) {
      options = /* @__PURE__ */ Object.create(null);
    }
    this.resultCache = canUseWeakSet ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set();
    this.transform = transform;
    if (options.getCacheKey) {
      this.getCacheKey = options.getCacheKey;
    }
    if (options.cache !== false) {
      this.stableCacheKeys = new Trie(canUseWeakMap, function(key) {
        return { key };
      });
    }
  }
  DocumentTransform2.prototype.getCacheKey = function(document2) {
    return [document2];
  };
  DocumentTransform2.identity = function() {
    return new DocumentTransform2(identity, { cache: false });
  };
  DocumentTransform2.split = function(predicate, left, right) {
    if (right === void 0) {
      right = DocumentTransform2.identity();
    }
    return new DocumentTransform2(function(document2) {
      var documentTransform = predicate(document2) ? left : right;
      return documentTransform.transformDocument(document2);
    }, { cache: false });
  };
  DocumentTransform2.prototype.transformDocument = function(document2) {
    if (this.resultCache.has(document2)) {
      return document2;
    }
    var cacheEntry = this.getStableCacheEntry(document2);
    if (cacheEntry && cacheEntry.value) {
      return cacheEntry.value;
    }
    checkDocument(document2);
    var transformedDocument = this.transform(document2);
    this.resultCache.add(transformedDocument);
    if (cacheEntry) {
      cacheEntry.value = transformedDocument;
    }
    return transformedDocument;
  };
  DocumentTransform2.prototype.concat = function(otherTransform) {
    var _this = this;
    return new DocumentTransform2(function(document2) {
      return otherTransform.transformDocument(_this.transformDocument(document2));
    }, { cache: false });
  };
  DocumentTransform2.prototype.getStableCacheEntry = function(document2) {
    if (!this.stableCacheKeys)
      return;
    var cacheKeys = this.getCacheKey(document2);
    if (cacheKeys) {
      invariant$1(Array.isArray(cacheKeys), 65);
      return this.stableCacheKeys.lookupArray(cacheKeys);
    }
  };
  return DocumentTransform2;
}();
var printCache = canUseWeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var print = function(ast) {
  var result;
  result = printCache === null || printCache === void 0 ? void 0 : printCache.get(ast);
  if (!result) {
    result = print$1(ast);
    printCache === null || printCache === void 0 ? void 0 : printCache.set(ast, result);
  }
  return result;
};
var isArray = Array.isArray;
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}
var TYPENAME_FIELD = {
  kind: Kind.FIELD,
  name: {
    kind: Kind.NAME,
    value: "__typename"
  }
};
function isEmpty(op, fragmentMap) {
  return !op || op.selectionSet.selections.every(function(selection) {
    return selection.kind === Kind.FRAGMENT_SPREAD && isEmpty(fragmentMap[selection.name.value], fragmentMap);
  });
}
function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}
function getDirectiveMatcher(configs) {
  var names = /* @__PURE__ */ new Map();
  var tests = /* @__PURE__ */ new Map();
  configs.forEach(function(directive) {
    if (directive) {
      if (directive.name) {
        names.set(directive.name, directive);
      } else if (directive.test) {
        tests.set(directive.test, directive);
      }
    }
  });
  return function(directive) {
    var config = names.get(directive.name.value);
    if (!config && tests.size) {
      tests.forEach(function(testConfig, test) {
        if (test(directive)) {
          config = testConfig;
        }
      });
    }
    return config;
  };
}
function makeInUseGetterFunction(defaultKey) {
  var map2 = /* @__PURE__ */ new Map();
  return function inUseGetterFunction(key) {
    if (key === void 0) {
      key = defaultKey;
    }
    var inUse = map2.get(key);
    if (!inUse) {
      map2.set(key, inUse = {
        variables: /* @__PURE__ */ new Set(),
        fragmentSpreads: /* @__PURE__ */ new Set()
      });
    }
    return inUse;
  };
}
function removeDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var getInUseByOperationName = makeInUseGetterFunction("");
  var getInUseByFragmentName = makeInUseGetterFunction("");
  var getInUse = function(ancestors) {
    for (var p2 = 0, ancestor = void 0; p2 < ancestors.length && (ancestor = ancestors[p2]); ++p2) {
      if (isArray(ancestor))
        continue;
      if (ancestor.kind === Kind.OPERATION_DEFINITION) {
        return getInUseByOperationName(ancestor.name && ancestor.name.value);
      }
      if (ancestor.kind === Kind.FRAGMENT_DEFINITION) {
        return getInUseByFragmentName(ancestor.name.value);
      }
    }
    globalThis.__DEV__ !== false && invariant$1.error(82);
    return null;
  };
  var operationCount = 0;
  for (var i2 = doc.definitions.length - 1; i2 >= 0; --i2) {
    if (doc.definitions[i2].kind === Kind.OPERATION_DEFINITION) {
      ++operationCount;
    }
  }
  var directiveMatcher = getDirectiveMatcher(directives);
  var shouldRemoveField = function(nodeDirectives) {
    return isNonEmptyArray(nodeDirectives) && nodeDirectives.map(directiveMatcher).some(function(config) {
      return config && config.remove;
    });
  };
  var originalFragmentDefsByPath = /* @__PURE__ */ new Map();
  var firstVisitMadeChanges = false;
  var fieldOrInlineFragmentVisitor = {
    enter: function(node) {
      if (shouldRemoveField(node.directives)) {
        firstVisitMadeChanges = true;
        return null;
      }
    }
  };
  var docWithoutDirectiveSubtrees = visit(doc, {
    Field: fieldOrInlineFragmentVisitor,
    InlineFragment: fieldOrInlineFragmentVisitor,
    VariableDefinition: {
      enter: function() {
        return false;
      }
    },
    Variable: {
      enter: function(node, _key, _parent2, _path, ancestors) {
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.variables.add(node.name.value);
        }
      }
    },
    FragmentSpread: {
      enter: function(node, _key, _parent2, _path, ancestors) {
        if (shouldRemoveField(node.directives)) {
          firstVisitMadeChanges = true;
          return null;
        }
        var inUse = getInUse(ancestors);
        if (inUse) {
          inUse.fragmentSpreads.add(node.name.value);
        }
      }
    },
    FragmentDefinition: {
      enter: function(node, _key, _parent2, path2) {
        originalFragmentDefsByPath.set(JSON.stringify(path2), node);
      },
      leave: function(node, _key, _parent2, path2) {
        var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path2));
        if (node === originalNode) {
          return node;
        }
        if (operationCount > 0 && node.selectionSet.selections.every(function(selection) {
          return selection.kind === Kind.FIELD && selection.name.value === "__typename";
        })) {
          getInUseByFragmentName(node.name.value).removed = true;
          firstVisitMadeChanges = true;
          return null;
        }
      }
    },
    Directive: {
      leave: function(node) {
        if (directiveMatcher(node)) {
          firstVisitMadeChanges = true;
          return null;
        }
      }
    }
  });
  if (!firstVisitMadeChanges) {
    return doc;
  }
  var populateTransitiveVars = function(inUse) {
    if (!inUse.transitiveVars) {
      inUse.transitiveVars = new Set(inUse.variables);
      if (!inUse.removed) {
        inUse.fragmentSpreads.forEach(function(childFragmentName) {
          populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function(varName) {
            inUse.transitiveVars.add(varName);
          });
        });
      }
    }
    return inUse;
  };
  var allFragmentNamesUsed = /* @__PURE__ */ new Set();
  docWithoutDirectiveSubtrees.definitions.forEach(function(def) {
    if (def.kind === Kind.OPERATION_DEFINITION) {
      populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function(childFragmentName) {
        allFragmentNamesUsed.add(childFragmentName);
      });
    } else if (def.kind === Kind.FRAGMENT_DEFINITION && operationCount === 0 && !getInUseByFragmentName(def.name.value).removed) {
      allFragmentNamesUsed.add(def.name.value);
    }
  });
  allFragmentNamesUsed.forEach(function(fragmentName) {
    populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function(childFragmentName) {
      allFragmentNamesUsed.add(childFragmentName);
    });
  });
  var fragmentWillBeRemoved = function(fragmentName) {
    return !!(!allFragmentNamesUsed.has(fragmentName) || getInUseByFragmentName(fragmentName).removed);
  };
  var enterVisitor = {
    enter: function(node) {
      if (fragmentWillBeRemoved(node.name.value)) {
        return null;
      }
    }
  };
  return nullIfDocIsEmpty(visit(docWithoutDirectiveSubtrees, {
    FragmentSpread: enterVisitor,
    FragmentDefinition: enterVisitor,
    OperationDefinition: {
      leave: function(node) {
        if (node.variableDefinitions) {
          var usedVariableNames_1 = populateTransitiveVars(getInUseByOperationName(node.name && node.name.value)).transitiveVars;
          if (usedVariableNames_1.size < node.variableDefinitions.length) {
            return __assign(__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function(varDef) {
              return usedVariableNames_1.has(varDef.variable.name.value);
            }) });
          }
        }
      }
    }
  }));
}
var addTypenameToDocument = Object.assign(function(doc) {
  return visit(doc, {
    SelectionSet: {
      enter: function(node, _key, parent) {
        if (parent && parent.kind === Kind.OPERATION_DEFINITION) {
          return;
        }
        var selections = node.selections;
        if (!selections) {
          return;
        }
        var skip = selections.some(function(selection) {
          return isField(selection) && (selection.name.value === "__typename" || selection.name.value.lastIndexOf("__", 0) === 0);
        });
        if (skip) {
          return;
        }
        var field = parent;
        if (isField(field) && field.directives && field.directives.some(function(d2) {
          return d2.name.value === "export";
        })) {
          return;
        }
        return __assign(__assign({}, node), { selections: __spreadArray(__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
      }
    }
  });
}, {
  added: function(field) {
    return field === TYPENAME_FIELD;
  }
});
function buildQueryFromSelectionSet(document2) {
  var definition = getMainDefinition(document2);
  var definitionOperation = definition.operation;
  if (definitionOperation === "query") {
    return document2;
  }
  var modifiedDoc = visit(document2, {
    OperationDefinition: {
      enter: function(node) {
        return __assign(__assign({}, node), { operation: "query" });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document2) {
  checkDocument(document2);
  var modifiedDoc = removeDirectivesFromDocument([
    {
      test: function(directive) {
        return directive.name.value === "client";
      },
      remove: true
    }
  ], document2);
  return modifiedDoc;
}
var hasOwnProperty$5 = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }
  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;
  if (count > 1) {
    var merger = new DeepMerger();
    for (var i2 = 1; i2 < count; ++i2) {
      target = merger.merge(target, sources[i2]);
    }
  }
  return target;
}
var defaultReconciler = function(target, source, property) {
  return this.merge(target[property], source[property]);
};
var DeepMerger = function() {
  function DeepMerger2(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }
    this.reconciler = reconciler;
    this.isObject = isNonNullObject;
    this.pastCopies = /* @__PURE__ */ new Set();
  }
  DeepMerger2.prototype.merge = function(target, source) {
    var _this = this;
    var context = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }
    if (isNonNullObject(source) && isNonNullObject(target)) {
      Object.keys(source).forEach(function(sourceKey) {
        if (hasOwnProperty$5.call(target, sourceKey)) {
          var targetValue = target[sourceKey];
          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, __spreadArray([
              target,
              source,
              sourceKey
            ], context, false));
            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }
    return source;
  };
  DeepMerger2.prototype.shallowCopyForMerge = function(value) {
    if (isNonNullObject(value)) {
      if (!this.pastCopies.has(value)) {
        if (Array.isArray(value)) {
          value = value.slice(0);
        } else {
          value = __assign({ __proto__: Object.getPrototypeOf(value) }, value);
        }
        this.pastCopies.add(value);
      }
    }
    return value;
  };
  return DeepMerger2;
}();
function _createForOfIteratorHelperLoose(o3, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o3[Symbol.iterator] || o3["@@iterator"];
  if (it)
    return (it = it.call(o3)).next.bind(it);
  if (Array.isArray(o3) || (it = _unsupportedIterableToArray(o3)) || allowArrayLike && o3 && typeof o3.length === "number") {
    if (it)
      o3 = it;
    var i2 = 0;
    return function() {
      if (i2 >= o3.length)
        return { done: true };
      return { done: false, value: o3[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o3, minLen) {
  if (!o3)
    return;
  if (typeof o3 === "string")
    return _arrayLikeToArray(o3, minLen);
  var n2 = Object.prototype.toString.call(o3).slice(8, -1);
  if (n2 === "Object" && o3.constructor)
    n2 = o3.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o3);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o3, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
var hasSymbols = function() {
  return typeof Symbol === "function";
};
var hasSymbol = function(name) {
  return hasSymbols() && Boolean(Symbol[name]);
};
var getSymbol = function(name) {
  return hasSymbol(name) ? Symbol[name] : "@@" + name;
};
if (hasSymbols() && !hasSymbol("observable")) {
  Symbol.observable = Symbol("observable");
}
var SymbolIterator = getSymbol("iterator");
var SymbolObservable = getSymbol("observable");
var SymbolSpecies = getSymbol("species");
function getMethod(obj, key) {
  var value = obj[key];
  if (value == null)
    return void 0;
  if (typeof value !== "function")
    throw new TypeError(value + " is not a function");
  return value;
}
function getSpecies(obj) {
  var ctor = obj.constructor;
  if (ctor !== void 0) {
    ctor = ctor[SymbolSpecies];
    if (ctor === null) {
      ctor = void 0;
    }
  }
  return ctor !== void 0 ? ctor : Observable;
}
function isObservable(x2) {
  return x2 instanceof Observable;
}
function hostReportError(e2) {
  if (hostReportError.log) {
    hostReportError.log(e2);
  } else {
    setTimeout(function() {
      throw e2;
    });
  }
}
function enqueue(fn) {
  Promise.resolve().then(function() {
    try {
      fn();
    } catch (e2) {
      hostReportError(e2);
    }
  });
}
function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === void 0)
    return;
  subscription._cleanup = void 0;
  if (!cleanup) {
    return;
  }
  try {
    if (typeof cleanup === "function") {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, "unsubscribe");
      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e2) {
    hostReportError(e2);
  }
}
function closeSubscription(subscription) {
  subscription._observer = void 0;
  subscription._queue = void 0;
  subscription._state = "closed";
}
function flushSubscription(subscription) {
  var queue = subscription._queue;
  if (!queue) {
    return;
  }
  subscription._queue = void 0;
  subscription._state = "ready";
  for (var i2 = 0; i2 < queue.length; ++i2) {
    notifySubscription(subscription, queue[i2].type, queue[i2].value);
    if (subscription._state === "closed")
      break;
  }
}
function notifySubscription(subscription, type, value) {
  subscription._state = "running";
  var observer = subscription._observer;
  try {
    var m2 = getMethod(observer, type);
    switch (type) {
      case "next":
        if (m2)
          m2.call(observer, value);
        break;
      case "error":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer, value);
        else
          throw value;
        break;
      case "complete":
        closeSubscription(subscription);
        if (m2)
          m2.call(observer);
        break;
    }
  } catch (e2) {
    hostReportError(e2);
  }
  if (subscription._state === "closed")
    cleanupSubscription(subscription);
  else if (subscription._state === "running")
    subscription._state = "ready";
}
function onNotify(subscription, type, value) {
  if (subscription._state === "closed")
    return;
  if (subscription._state === "buffering") {
    subscription._queue.push({
      type,
      value
    });
    return;
  }
  if (subscription._state !== "ready") {
    subscription._state = "buffering";
    subscription._queue = [{
      type,
      value
    }];
    enqueue(function() {
      return flushSubscription(subscription);
    });
    return;
  }
  notifySubscription(subscription, type, value);
}
var Subscription = /* @__PURE__ */ function() {
  function Subscription2(observer, subscriber) {
    this._cleanup = void 0;
    this._observer = observer;
    this._queue = void 0;
    this._state = "initializing";
    var subscriptionObserver = new SubscriptionObserver(this);
    try {
      this._cleanup = subscriber.call(void 0, subscriptionObserver);
    } catch (e2) {
      subscriptionObserver.error(e2);
    }
    if (this._state === "initializing")
      this._state = "ready";
  }
  var _proto = Subscription2.prototype;
  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== "closed") {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };
  _createClass(Subscription2, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]);
  return Subscription2;
}();
var SubscriptionObserver = /* @__PURE__ */ function() {
  function SubscriptionObserver2(subscription) {
    this._subscription = subscription;
  }
  var _proto2 = SubscriptionObserver2.prototype;
  _proto2.next = function next(value) {
    onNotify(this._subscription, "next", value);
  };
  _proto2.error = function error(value) {
    onNotify(this._subscription, "error", value);
  };
  _proto2.complete = function complete() {
    onNotify(this._subscription, "complete");
  };
  _createClass(SubscriptionObserver2, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]);
  return SubscriptionObserver2;
}();
var Observable = /* @__PURE__ */ function() {
  function Observable2(subscriber) {
    if (!(this instanceof Observable2))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof subscriber !== "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = subscriber;
  }
  var _proto3 = Observable2.prototype;
  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== "object" || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }
    return new Subscription(observer, this._subscriber);
  };
  _proto3.forEach = function forEach2(fn) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      if (typeof fn !== "function") {
        reject(new TypeError(fn + " is not a function"));
        return;
      }
      function done() {
        subscription.unsubscribe();
        resolve();
      }
      var subscription = _this.subscribe({
        next: function(value) {
          try {
            fn(value, done);
          } catch (e2) {
            reject(e2);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };
  _proto3.map = function map2(fn) {
    var _this2 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      return _this2.subscribe({
        next: function(value) {
          try {
            value = fn(value);
          } catch (e2) {
            return observer.error(e2);
          }
          observer.next(value);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.filter = function filter2(fn) {
    var _this3 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      return _this3.subscribe({
        next: function(value) {
          try {
            if (!fn(value))
              return;
          } catch (e2) {
            return observer.error(e2);
          }
          observer.next(value);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          observer.complete();
        }
      });
    });
  };
  _proto3.reduce = function reduce(fn) {
    var _this4 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C2(function(observer) {
      return _this4.subscribe({
        next: function(value) {
          var first = !hasValue;
          hasValue = true;
          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e2) {
              return observer.error(e2);
            }
          } else {
            acc = value;
          }
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          if (!hasValue && !hasSeed)
            return observer.error(new TypeError("Cannot reduce an empty sequence"));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };
  _proto3.concat = function concat() {
    var _this5 = this;
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      var subscription;
      var index = 0;
      function startNext(next) {
        subscription = next.subscribe({
          next: function(v2) {
            observer.next(v2);
          },
          error: function(e2) {
            observer.error(e2);
          },
          complete: function() {
            if (index === sources.length) {
              subscription = void 0;
              observer.complete();
            } else {
              startNext(C2.from(sources[index++]));
            }
          }
        });
      }
      startNext(_this5);
      return function() {
        if (subscription) {
          subscription.unsubscribe();
          subscription = void 0;
        }
      };
    });
  };
  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;
    if (typeof fn !== "function")
      throw new TypeError(fn + " is not a function");
    var C2 = getSpecies(this);
    return new C2(function(observer) {
      var subscriptions = [];
      var outer = _this6.subscribe({
        next: function(value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e2) {
              return observer.error(e2);
            }
          }
          var inner = C2.from(value).subscribe({
            next: function(value2) {
              observer.next(value2);
            },
            error: function(e2) {
              observer.error(e2);
            },
            complete: function() {
              var i2 = subscriptions.indexOf(inner);
              if (i2 >= 0)
                subscriptions.splice(i2, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function(e2) {
          observer.error(e2);
        },
        complete: function() {
          completeIfDone();
        }
      });
      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0)
          observer.complete();
      }
      return function() {
        subscriptions.forEach(function(s2) {
          return s2.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };
  _proto3[SymbolObservable] = function() {
    return this;
  };
  Observable2.from = function from(x2) {
    var C2 = typeof this === "function" ? this : Observable2;
    if (x2 == null)
      throw new TypeError(x2 + " is not an object");
    var method = getMethod(x2, SymbolObservable);
    if (method) {
      var observable2 = method.call(x2);
      if (Object(observable2) !== observable2)
        throw new TypeError(observable2 + " is not an object");
      if (isObservable(observable2) && observable2.constructor === C2)
        return observable2;
      return new C2(function(observer) {
        return observable2.subscribe(observer);
      });
    }
    if (hasSymbol("iterator")) {
      method = getMethod(x2, SymbolIterator);
      if (method) {
        return new C2(function(observer) {
          enqueue(function() {
            if (observer.closed)
              return;
            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x2)), _step; !(_step = _iterator()).done; ) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed)
                return;
            }
            observer.complete();
          });
        });
      }
    }
    if (Array.isArray(x2)) {
      return new C2(function(observer) {
        enqueue(function() {
          if (observer.closed)
            return;
          for (var i2 = 0; i2 < x2.length; ++i2) {
            observer.next(x2[i2]);
            if (observer.closed)
              return;
          }
          observer.complete();
        });
      });
    }
    throw new TypeError(x2 + " is not observable");
  };
  Observable2.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }
    var C2 = typeof this === "function" ? this : Observable2;
    return new C2(function(observer) {
      enqueue(function() {
        if (observer.closed)
          return;
        for (var i2 = 0; i2 < items.length; ++i2) {
          observer.next(items[i2]);
          if (observer.closed)
            return;
        }
        observer.complete();
      });
    });
  };
  _createClass(Observable2, null, [{
    key: SymbolSpecies,
    get: function() {
      return this;
    }
  }]);
  return Observable2;
}();
if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol("extensions"), {
    value: {
      symbol: SymbolObservable,
      hostReportError
    },
    configurable: true
  });
}
function symbolObservablePonyfill(root2) {
  var result;
  var Symbol2 = root2.Symbol;
  if (typeof Symbol2 === "function") {
    if (Symbol2.observable) {
      result = Symbol2.observable;
    } else {
      if (typeof Symbol2.for === "function") {
        result = Symbol2.for("https://github.com/benlesh/symbol-observable");
      } else {
        result = Symbol2("https://github.com/benlesh/symbol-observable");
      }
      try {
        Symbol2.observable = result;
      } catch (err) {
      }
    }
  } else {
    result = "@@observable";
  }
  return result;
}
var root;
if (typeof self !== "undefined") {
  root = self;
} else if (typeof window !== "undefined") {
  root = window;
} else if (typeof global !== "undefined") {
  root = global;
} else if (typeof module !== "undefined") {
  root = module;
} else {
  root = Function("return this")();
}
symbolObservablePonyfill(root);
var prototype = Observable.prototype;
var fakeObsSymbol = "@@observable";
if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function() {
    return this;
  };
}
var toString$1 = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
  switch (toString$1.call(val)) {
    case "[object Array]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_1 = val.slice(0);
      seen.set(val, copy_1);
      copy_1.forEach(function(child, i2) {
        copy_1[i2] = cloneDeepHelper(child, seen);
      });
      return copy_1;
    }
    case "[object Object]": {
      seen = seen || /* @__PURE__ */ new Map();
      if (seen.has(val))
        return seen.get(val);
      var copy_2 = Object.create(Object.getPrototypeOf(val));
      seen.set(val, copy_2);
      Object.keys(val).forEach(function(key) {
        copy_2[key] = cloneDeepHelper(val[key], seen);
      });
      return copy_2;
    }
    default:
      return val;
  }
}
function deepFreeze(value) {
  var workSet = /* @__PURE__ */ new Set([value]);
  workSet.forEach(function(obj) {
    if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function(name) {
        if (isNonNullObject(obj[name]))
          workSet.add(obj[name]);
      });
    }
  });
  return value;
}
function shallowFreeze(obj) {
  if (globalThis.__DEV__ !== false && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e2) {
      if (e2 instanceof TypeError)
        return null;
      throw e2;
    }
  }
  return obj;
}
function maybeDeepFreeze(obj) {
  if (globalThis.__DEV__ !== false) {
    deepFreeze(obj);
  }
  return obj;
}
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function(obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function(obs) {
    return obs[method](argument);
  });
}
function asyncMap(observable2, mapFn, catchFn) {
  return new Observable(function(observer) {
    var promiseQueue = {
      then: function(callback) {
        return new Promise(function(resolve) {
          return resolve(callback());
        });
      }
    };
    function makeCallback(examiner, key) {
      return function(arg) {
        if (examiner) {
          var both = function() {
            return observer.closed ? 0 : examiner(arg);
          };
          promiseQueue = promiseQueue.then(both, both).then(function(result) {
            return observer.next(result);
          }, function(error) {
            return observer.error(error);
          });
        } else {
          observer[key](arg);
        }
      };
    }
    var handler = {
      next: makeCallback(mapFn, "next"),
      error: makeCallback(catchFn, "error"),
      complete: function() {
        promiseQueue.then(function() {
          return observer.complete();
        });
      }
    };
    var sub = observable2.subscribe(handler);
    return function() {
      return sub.unsubscribe();
    };
  });
}
function fixObservableSubclass(subclass) {
  function set4(key) {
    Object.defineProperty(subclass, key, { value: Observable });
  }
  if (canUseSymbol && Symbol.species) {
    set4(Symbol.species);
  }
  set4("@@species");
  return subclass;
}
function isPromiseLike(value) {
  return value && typeof value.then === "function";
}
var Concast = function(_super) {
  __extends(Concast2, _super);
  function Concast2(sources) {
    var _this = _super.call(this, function(observer) {
      _this.addObserver(observer);
      return function() {
        return _this.removeObserver(observer);
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.promise = new Promise(function(resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function(result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          _this.notify("next", result);
          iterateObserversSafely(_this.observers, "next", result);
        }
      },
      error: function(error) {
        var sub = _this.sub;
        if (sub !== null) {
          if (sub)
            setTimeout(function() {
              return sub.unsubscribe();
            });
          _this.sub = null;
          _this.latest = ["error", error];
          _this.reject(error);
          _this.notify("error", error);
          iterateObserversSafely(_this.observers, "error", error);
        }
      },
      complete: function() {
        var _a2 = _this, sub = _a2.sub, _b = _a2.sources, sources2 = _b === void 0 ? [] : _b;
        if (sub !== null) {
          var value = sources2.shift();
          if (!value) {
            if (sub)
              setTimeout(function() {
                return sub.unsubscribe();
              });
            _this.sub = null;
            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }
            _this.notify("complete");
            iterateObserversSafely(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function(obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };
    _this.nextResultListeners = /* @__PURE__ */ new Set();
    _this.cancel = function(reason) {
      _this.reject(reason);
      _this.sources = [];
      _this.handlers.complete();
    };
    _this.promise.catch(function(_2) {
    });
    if (typeof sources === "function") {
      sources = [new Observable(sources)];
    }
    if (isPromiseLike(sources)) {
      sources.then(function(iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }
    return _this;
  }
  Concast2.prototype.start = function(sources) {
    if (this.sub !== void 0)
      return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };
  Concast2.prototype.deliverLastMessage = function(observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];
      if (method) {
        method.call(observer, this.latest[1]);
      }
      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };
  Concast2.prototype.addObserver = function(observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
    }
  };
  Concast2.prototype.removeObserver = function(observer) {
    if (this.observers.delete(observer) && this.observers.size < 1) {
      this.handlers.complete();
    }
  };
  Concast2.prototype.notify = function(method, arg) {
    var nextResultListeners = this.nextResultListeners;
    if (nextResultListeners.size) {
      this.nextResultListeners = /* @__PURE__ */ new Set();
      nextResultListeners.forEach(function(listener) {
        return listener(method, arg);
      });
    }
  };
  Concast2.prototype.beforeNext = function(callback) {
    var called = false;
    this.nextResultListeners.add(function(method, arg) {
      if (!called) {
        called = true;
        callback(method, arg);
      }
    });
  };
  return Concast2;
}(Observable);
fixObservableSubclass(Concast);
function isExecutionPatchIncrementalResult(value) {
  return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
  return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
  return isExecutionPatchIncrementalResult(value) || isExecutionPatchInitialResult(value);
}
function isApolloPayloadResult(value) {
  return isNonNullObject(value) && "payload" in value;
}
function mergeIncrementalData(prevResult, result) {
  var mergedData = prevResult;
  var merger = new DeepMerger();
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(_a2) {
      var data = _a2.data, path2 = _a2.path;
      for (var i2 = path2.length - 1; i2 >= 0; --i2) {
        var key = path2[i2];
        var isNumericKey = !isNaN(+key);
        var parent_1 = isNumericKey ? [] : {};
        parent_1[key] = data;
        data = parent_1;
      }
      mergedData = merger.merge(mergedData, data);
    });
  }
  return mergedData;
}
function graphQLResultHasError(result) {
  var errors = getGraphQLErrorsFromResult(result);
  return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result) {
  var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
  if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
    result.incremental.forEach(function(incrementalResult) {
      if (incrementalResult.errors) {
        graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
      }
    });
  }
  return graphQLErrors;
}
function compact() {
  var objects = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }
  var result = /* @__PURE__ */ Object.create(null);
  objects.forEach(function(obj) {
    if (!obj)
      return;
    Object.keys(obj).forEach(function(key) {
      var value = obj[key];
      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}
function mergeOptions(defaults2, options) {
  return compact(defaults2, options, options.variables && {
    variables: compact(__assign(__assign({}, defaults2 && defaults2.variables), options.variables))
  });
}
function fromError(errorValue) {
  return new Observable(function(observer) {
    observer.error(errorValue);
  });
}
var throwServerError = function(response, result, message) {
  var error = new Error(message);
  error.name = "ServerError";
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};
function validateOperation(operation) {
  var OPERATION_FIELDS = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ];
  for (var _i = 0, _a2 = Object.keys(operation); _i < _a2.length; _i++) {
    var key = _a2[_i];
    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw newInvariantError(43, key);
    }
  }
  return operation;
}
function createOperation(starting, operation) {
  var context = __assign({}, starting);
  var setContext = function(next) {
    if (typeof next === "function") {
      context = __assign(__assign({}, context), next(context));
    } else {
      context = __assign(__assign({}, context), next);
    }
  };
  var getContext = function() {
    return __assign({}, context);
  };
  Object.defineProperty(operation, "setContext", {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, "getContext", {
    enumerable: false,
    value: getContext
  });
  return operation;
}
function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };
  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== "string" ? getOperationName(transformedOperation.query) || void 0 : "";
  }
  return transformedOperation;
}
function filterOperationVariables(variables, query) {
  var result = __assign({}, variables);
  var unusedNames = new Set(Object.keys(variables));
  visit(query, {
    Variable: function(node, _key, parent) {
      if (parent && parent.kind !== "VariableDefinition") {
        unusedNames.delete(node.name.value);
      }
    }
  });
  unusedNames.forEach(function(name) {
    delete result[name];
  });
  return result;
}
function passthrough(op, forward) {
  return forward ? forward(op) : Observable.of();
}
function toLink(handler) {
  return typeof handler === "function" ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
  return link.request.length <= 1;
}
var ApolloLink = function() {
  function ApolloLink2(request) {
    if (request)
      this.request = request;
  }
  ApolloLink2.empty = function() {
    return new ApolloLink2(function() {
      return Observable.of();
    });
  };
  ApolloLink2.from = function(links) {
    if (links.length === 0)
      return ApolloLink2.empty();
    return links.map(toLink).reduce(function(x2, y2) {
      return x2.concat(y2);
    });
  };
  ApolloLink2.split = function(test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink2(passthrough));
    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink2(function(operation) {
        return test(operation) ? leftLink.request(operation) || Observable.of() : rightLink.request(operation) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || Observable.of() : rightLink.request(operation, forward) || Observable.of();
      });
    }
  };
  ApolloLink2.execute = function(link, operation) {
    return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || Observable.of();
  };
  ApolloLink2.concat = function(first, second) {
    var firstLink = toLink(first);
    if (isTerminating(firstLink)) {
      globalThis.__DEV__ !== false && invariant$1.warn(35, firstLink);
      return firstLink;
    }
    var nextLink = toLink(second);
    if (isTerminating(nextLink)) {
      return new ApolloLink2(function(operation) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op) || Observable.of();
        }) || Observable.of();
      });
    } else {
      return new ApolloLink2(function(operation, forward) {
        return firstLink.request(operation, function(op) {
          return nextLink.request(op, forward) || Observable.of();
        }) || Observable.of();
      });
    }
  };
  ApolloLink2.prototype.split = function(test, left, right) {
    return this.concat(ApolloLink2.split(test, left, right || new ApolloLink2(passthrough)));
  };
  ApolloLink2.prototype.concat = function(next) {
    return ApolloLink2.concat(this, next);
  };
  ApolloLink2.prototype.request = function(operation, forward) {
    throw newInvariantError(36);
  };
  ApolloLink2.prototype.onError = function(error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }
    throw error;
  };
  ApolloLink2.prototype.setOnError = function(fn) {
    this.onError = fn;
    return this;
  };
  return ApolloLink2;
}();
var execute = ApolloLink.execute;
function asyncIterator(source) {
  var _a2;
  var iterator = source[Symbol.asyncIterator]();
  return _a2 = {
    next: function() {
      return iterator.next();
    }
  }, _a2[Symbol.asyncIterator] = function() {
    return this;
  }, _a2;
}
function nodeStreamIterator(stream) {
  var cleanup = null;
  var error = null;
  var done = false;
  var data = [];
  var waiting = [];
  function onData(chunk) {
    if (error)
      return;
    if (waiting.length) {
      var shiftedArr = waiting.shift();
      if (Array.isArray(shiftedArr) && shiftedArr[0]) {
        return shiftedArr[0]({ value: chunk, done: false });
      }
    }
    data.push(chunk);
  }
  function onError(err) {
    error = err;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[1](err);
    });
    !cleanup || cleanup();
  }
  function onEnd() {
    done = true;
    var all = waiting.slice();
    all.forEach(function(pair) {
      pair[0]({ value: void 0, done: true });
    });
    !cleanup || cleanup();
  }
  cleanup = function() {
    cleanup = null;
    stream.removeListener("data", onData);
    stream.removeListener("error", onError);
    stream.removeListener("end", onEnd);
    stream.removeListener("finish", onEnd);
    stream.removeListener("close", onEnd);
  };
  stream.on("data", onData);
  stream.on("error", onError);
  stream.on("end", onEnd);
  stream.on("finish", onEnd);
  stream.on("close", onEnd);
  function getNext() {
    return new Promise(function(resolve, reject) {
      if (error)
        return reject(error);
      if (data.length)
        return resolve({ value: data.shift(), done: false });
      if (done)
        return resolve({ value: void 0, done: true });
      waiting.push([resolve, reject]);
    });
  }
  var iterator = {
    next: function() {
      return getNext();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function promiseIterator(promise) {
  var resolved = false;
  var iterator = {
    next: function() {
      if (resolved)
        return Promise.resolve({
          value: void 0,
          done: true
        });
      resolved = true;
      return new Promise(function(resolve, reject) {
        promise.then(function(value) {
          resolve({ value, done: false });
        }).catch(reject);
      });
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function readerIterator(reader) {
  var iterator = {
    next: function() {
      return reader.read();
    }
  };
  if (canUseAsyncIteratorSymbol) {
    iterator[Symbol.asyncIterator] = function() {
      return this;
    };
  }
  return iterator;
}
function isNodeResponse(value) {
  return !!value.body;
}
function isReadableStream(value) {
  return !!value.getReader;
}
function isAsyncIterableIterator(value) {
  return !!(canUseAsyncIteratorSymbol && value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
  return !!value.stream;
}
function isBlob(value) {
  return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
  return !!value.pipe;
}
function responseIterator(response) {
  var body = response;
  if (isNodeResponse(response))
    body = response.body;
  if (isAsyncIterableIterator(body))
    return asyncIterator(body);
  if (isReadableStream(body))
    return readerIterator(body.getReader());
  if (isStreamableBlob(body)) {
    return readerIterator(body.stream().getReader());
  }
  if (isBlob(body))
    return promiseIterator(body.arrayBuffer());
  if (isNodeReadableStream(body))
    return nodeStreamIterator(body);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var PROTOCOL_ERRORS_SYMBOL = Symbol();
function graphQLResultHasProtocolErrors(result) {
  if (result.extensions) {
    return Array.isArray(result.extensions[PROTOCOL_ERRORS_SYMBOL]);
  }
  return false;
}
function isApolloError(err) {
  return err.hasOwnProperty("graphQLErrors");
}
var generateErrorMessage = function(err) {
  var errors = __spreadArray(__spreadArray(__spreadArray([], err.graphQLErrors, true), err.clientErrors, true), err.protocolErrors, true);
  if (err.networkError)
    errors.push(err.networkError);
  return errors.map(function(err2) {
    return isNonNullObject(err2) && err2.message || "Error message not found.";
  }).join("\n");
};
var ApolloError = function(_super) {
  __extends(ApolloError2, _super);
  function ApolloError2(_a2) {
    var graphQLErrors = _a2.graphQLErrors, protocolErrors = _a2.protocolErrors, clientErrors = _a2.clientErrors, networkError = _a2.networkError, errorMessage = _a2.errorMessage, extraInfo = _a2.extraInfo;
    var _this = _super.call(this, errorMessage) || this;
    _this.name = "ApolloError";
    _this.graphQLErrors = graphQLErrors || [];
    _this.protocolErrors = protocolErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError2.prototype;
    return _this;
  }
  return ApolloError2;
}(Error);
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
function readMultipartBody(response, nextValue) {
  var _a2;
  return __awaiter(this, void 0, void 0, function() {
    var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _b, value, done, chunk, searchFrom, bi, message, i2, headers, contentType_1, body, result, next;
    var _c, _d;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          if (TextDecoder === void 0) {
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          }
          decoder = new TextDecoder("utf-8");
          contentType = (_a2 = response.headers) === null || _a2 === void 0 ? void 0 : _a2.get("content-type");
          delimiter = "boundary=";
          boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-";
          boundary = "\r\n--".concat(boundaryVal);
          buffer = "";
          iterator = responseIterator(response);
          running = true;
          _e.label = 1;
        case 1:
          if (!running)
            return [3, 3];
          return [4, iterator.next()];
        case 2:
          _b = _e.sent(), value = _b.value, done = _b.done;
          chunk = typeof value === "string" ? value : decoder.decode(value);
          searchFrom = buffer.length - boundary.length + 1;
          running = !done;
          buffer += chunk;
          bi = buffer.indexOf(boundary, searchFrom);
          while (bi > -1) {
            message = void 0;
            _c = [
              buffer.slice(0, bi),
              buffer.slice(bi + boundary.length)
            ], message = _c[0], buffer = _c[1];
            i2 = message.indexOf("\r\n\r\n");
            headers = parseHeaders(message.slice(0, i2));
            contentType_1 = headers["content-type"];
            if (contentType_1 && contentType_1.toLowerCase().indexOf("application/json") === -1) {
              throw new Error("Unsupported patch content type: application/json is required.");
            }
            body = message.slice(i2);
            if (body) {
              result = parseJsonBody(response, body);
              if (Object.keys(result).length > 1 || "data" in result || "incremental" in result || "errors" in result || "payload" in result) {
                if (isApolloPayloadResult(result)) {
                  next = {};
                  if ("payload" in result) {
                    next = __assign({}, result.payload);
                  }
                  if ("errors" in result) {
                    next = __assign(__assign({}, next), { extensions: __assign(__assign({}, "extensions" in next ? next.extensions : null), (_d = {}, _d[PROTOCOL_ERRORS_SYMBOL] = result.errors, _d)) });
                  }
                  nextValue(next);
                } else {
                  nextValue(result);
                }
              } else if (Object.keys(result).length === 1 && "hasNext" in result && !result.hasNext) {
                return [2];
              }
            }
            bi = buffer.indexOf(boundary);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function parseHeaders(headerText) {
  var headersInit = {};
  headerText.split("\n").forEach(function(line) {
    var i2 = line.indexOf(":");
    if (i2 > -1) {
      var name_1 = line.slice(0, i2).trim().toLowerCase();
      var value = line.slice(i2 + 1).trim();
      headersInit[name_1] = value;
    }
  });
  return headersInit;
}
function parseJsonBody(response, bodyText) {
  if (response.status >= 300) {
    var getResult = function() {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        return bodyText;
      }
    };
    throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
  }
  try {
    return JSON.parse(bodyText);
  } catch (err) {
    var parseError = err;
    parseError.name = "ServerParseError";
    parseError.response = response;
    parseError.statusCode = response.status;
    parseError.bodyText = bodyText;
    throw parseError;
  }
}
function handleError(err, observer) {
  if (err.result && err.result.errors && err.result.data) {
    observer.next(err.result);
  }
  observer.error(err);
}
function parseAndCheckHttpResponse(operations) {
  return function(response) {
    return response.text().then(function(bodyText) {
      return parseJsonBody(response, bodyText);
    }).then(function(result) {
      if (response.status >= 300) {
        throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
      }
      if (!Array.isArray(result) && !hasOwnProperty$4.call(result, "data") && !hasOwnProperty$4.call(result, "errors")) {
        throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ? operations.map(function(op) {
          return op.operationName;
        }) : operations.operationName, "'."));
      }
      return result;
    });
  };
}
var serializeFetchParameter = function(p2, label) {
  var serialized;
  try {
    serialized = JSON.stringify(p2);
  } catch (e2) {
    var parseError = newInvariantError(39, label, e2.message);
    parseError.parseError = e2;
    throw parseError;
  }
  return serialized;
};
var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false,
  preserveHeaderCase: false
};
var defaultHeaders = {
  accept: "*/*",
  "content-type": "application/json"
};
var defaultOptions = {
  method: "POST"
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var defaultPrinter = function(ast, printer) {
  return printer(ast);
};
function selectHttpOptionsAndBodyInternal(operation, printer) {
  var configs = [];
  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }
  var options = {};
  var http = {};
  configs.forEach(function(config) {
    options = __assign(__assign(__assign({}, options), config.options), { headers: __assign(__assign({}, options.headers), config.headers) });
    if (config.credentials) {
      options.credentials = config.credentials;
    }
    http = __assign(__assign({}, http), config.http);
  });
  if (options.headers) {
    options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
  }
  var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
  var body = { operationName, variables };
  if (http.includeExtensions)
    body.extensions = extensions;
  if (http.includeQuery)
    body.query = printer(query, print);
  return {
    options,
    body
  };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
  if (!preserveHeaderCase) {
    var normalizedHeaders_1 = /* @__PURE__ */ Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
      normalizedHeaders_1[name.toLowerCase()] = headers[name];
    });
    return normalizedHeaders_1;
  }
  var headerData = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(headers)).forEach(function(name) {
    headerData[name.toLowerCase()] = {
      originalName: name,
      value: headers[name]
    };
  });
  var normalizedHeaders = /* @__PURE__ */ Object.create(null);
  Object.keys(headerData).forEach(function(name) {
    normalizedHeaders[headerData[name].originalName] = headerData[name].value;
  });
  return normalizedHeaders;
}
var checkFetcher = function(fetcher) {
  if (!fetcher && typeof fetch === "undefined") {
    throw newInvariantError(37);
  }
};
var selectURI = function(operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;
  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === "function") {
    return fallbackURI(operation);
  } else {
    return fallbackURI || "/graphql";
  }
};
function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];
  var addQueryParam = function(key, value) {
    queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
  };
  if ("query" in body) {
    addQueryParam("query", body.query);
  }
  if (body.operationName) {
    addQueryParam("operationName", body.operationName);
  }
  if (body.variables) {
    var serializedVariables = void 0;
    try {
      serializedVariables = serializeFetchParameter(body.variables, "Variables map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("variables", serializedVariables);
  }
  if (body.extensions) {
    var serializedExtensions = void 0;
    try {
      serializedExtensions = serializeFetchParameter(body.extensions, "Extensions map");
    } catch (parseError) {
      return { parseError };
    }
    addQueryParam("extensions", serializedExtensions);
  }
  var fragment = "", preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf("#");
  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }
  var queryParamsPrefix = preFragment.indexOf("?") === -1 ? "?" : "&";
  var newURI = preFragment + queryParamsPrefix + queryParams.join("&") + fragment;
  return { newURI };
}
var backupFetch = maybe$1(function() {
  return fetch;
});
var createHttpLink = function(linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }
  var _a2 = linkOptions.uri, uri = _a2 === void 0 ? "/graphql" : _a2, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print2 = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = __rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  if (globalThis.__DEV__ !== false) {
    checkFetcher(preferredFetch || backupFetch);
  }
  var linkConfig = {
    http: { includeExtensions, preserveHeaderCase },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new ApolloLink(function(operation) {
    var chosenURI = selectURI(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};
    if (context.clientAwareness) {
      var _a3 = context.clientAwareness, name_1 = _a3.name, version2 = _a3.version;
      if (name_1) {
        clientAwarenessHeaders["apollographql-client-name"] = name_1;
      }
      if (version2) {
        clientAwarenessHeaders["apollographql-client-version"] = version2;
      }
    }
    var contextHeaders = __assign(__assign({}, clientAwarenessHeaders), context.headers);
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };
    if (hasDirectives(["client"], operation.query)) {
      var transformedQuery = removeClientSetsFromDocument(operation.query);
      if (!transformedQuery) {
        return fromError(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      }
      operation.query = transformedQuery;
    }
    var _b2 = selectHttpOptionsAndBodyInternal(operation, print2, fallbackHttpConfig, linkConfig, contextConfig), options = _b2.options, body = _b2.body;
    if (body.variables && !includeUnusedVariables) {
      body.variables = filterOperationVariables(body.variables, operation.query);
    }
    var controller;
    if (!options.signal && typeof AbortController !== "undefined") {
      controller = new AbortController();
      options.signal = controller.signal;
    }
    var definitionIsMutation = function(d2) {
      return d2.kind === "OperationDefinition" && d2.operation === "mutation";
    };
    var definitionIsSubscription = function(d2) {
      return d2.kind === "OperationDefinition" && d2.operation === "subscription";
    };
    var isSubscription = definitionIsSubscription(getMainDefinition(operation.query));
    var hasDefer = hasDirectives(["defer"], operation.query);
    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = "GET";
    }
    if (hasDefer || isSubscription) {
      options.headers = options.headers || {};
      var acceptHeader = "multipart/mixed;";
      if (isSubscription && hasDefer) {
        globalThis.__DEV__ !== false && invariant$1.warn(38);
      }
      if (isSubscription) {
        acceptHeader += "boundary=graphql;subscriptionSpec=1.0,application/json";
      } else if (hasDefer) {
        acceptHeader += "deferSpec=20220824,application/json";
      }
      options.headers.accept = acceptHeader;
    }
    if (options.method === "GET") {
      var _c2 = rewriteURIForGET(chosenURI, body), newURI = _c2.newURI, parseError = _c2.parseError;
      if (parseError) {
        return fromError(parseError);
      }
      chosenURI = newURI;
    } else {
      try {
        options.body = serializeFetchParameter(body, "Payload");
      } catch (parseError2) {
        return fromError(parseError2);
      }
    }
    return new Observable(function(observer) {
      var currentFetch = preferredFetch || maybe$1(function() {
        return fetch;
      }) || backupFetch;
      var observerNext = observer.next.bind(observer);
      currentFetch(chosenURI, options).then(function(response) {
        var _a4;
        operation.setContext({ response });
        var ctype = (_a4 = response.headers) === null || _a4 === void 0 ? void 0 : _a4.get("content-type");
        if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
          return readMultipartBody(response, observerNext);
        } else {
          return parseAndCheckHttpResponse(operation)(response).then(observerNext);
        }
      }).then(function() {
        controller = void 0;
        observer.complete();
      }).catch(function(err) {
        controller = void 0;
        handleError(err, observer);
      });
      return function() {
        if (controller)
          controller.abort();
      };
    });
  });
};
var HttpLink = function(_super) {
  __extends(HttpLink2, _super);
  function HttpLink2(options) {
    if (options === void 0) {
      options = {};
    }
    var _this = _super.call(this, createHttpLink(options).request) || this;
    _this.options = options;
    return _this;
  }
  return HttpLink2;
}(ApolloLink);
const { toString, hasOwnProperty: hasOwnProperty$3 } = Object.prototype;
const fnToStr = Function.prototype.toString;
const previousComparisons = /* @__PURE__ */ new Map();
function equal(a2, b) {
  try {
    return check(a2, b);
  } finally {
    previousComparisons.clear();
  }
}
function check(a2, b) {
  if (a2 === b) {
    return true;
  }
  const aTag = toString.call(a2);
  const bTag = toString.call(b);
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case "[object Array]":
      if (a2.length !== b.length)
        return false;
    case "[object Object]": {
      if (previouslyCompared(a2, b))
        return true;
      const aKeys = definedKeys(a2);
      const bKeys = definedKeys(b);
      const keyCount = aKeys.length;
      if (keyCount !== bKeys.length)
        return false;
      for (let k2 = 0; k2 < keyCount; ++k2) {
        if (!hasOwnProperty$3.call(b, aKeys[k2])) {
          return false;
        }
      }
      for (let k2 = 0; k2 < keyCount; ++k2) {
        const key = aKeys[k2];
        if (!check(a2[key], b[key])) {
          return false;
        }
      }
      return true;
    }
    case "[object Error]":
      return a2.name === b.name && a2.message === b.message;
    case "[object Number]":
      if (a2 !== a2)
        return b !== b;
    case "[object Boolean]":
    case "[object Date]":
      return +a2 === +b;
    case "[object RegExp]":
    case "[object String]":
      return a2 == `${b}`;
    case "[object Map]":
    case "[object Set]": {
      if (a2.size !== b.size)
        return false;
      if (previouslyCompared(a2, b))
        return true;
      const aIterator = a2.entries();
      const isMap = aTag === "[object Map]";
      while (true) {
        const info = aIterator.next();
        if (info.done)
          break;
        const [aKey, aValue] = info.value;
        if (!b.has(aKey)) {
          return false;
        }
        if (isMap && !check(aValue, b.get(aKey))) {
          return false;
        }
      }
      return true;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      a2 = new Uint8Array(a2);
      b = new Uint8Array(b);
    case "[object DataView]": {
      let len = a2.byteLength;
      if (len === b.byteLength) {
        while (len-- && a2[len] === b[len]) {
        }
      }
      return len === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const aCode = fnToStr.call(a2);
      if (aCode !== fnToStr.call(b)) {
        return false;
      }
      return !endsWith(aCode, nativeCodeSuffix);
    }
  }
  return false;
}
function definedKeys(obj) {
  return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
  return this[key] !== void 0;
}
const nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
  const fromIndex = full.length - suffix.length;
  return fromIndex >= 0 && full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a2, b) {
  let bSet = previousComparisons.get(a2);
  if (bSet) {
    if (bSet.has(b))
      return true;
  } else {
    previousComparisons.set(a2, bSet = /* @__PURE__ */ new Set());
  }
  bSet.add(b);
  return false;
}
function defaultDispose() {
}
class Cache {
  constructor(max = Infinity, dispose = defaultDispose) {
    this.max = max;
    this.dispose = dispose;
    this.map = /* @__PURE__ */ new Map();
    this.newest = null;
    this.oldest = null;
  }
  has(key) {
    return this.map.has(key);
  }
  get(key) {
    const node = this.getNode(key);
    return node && node.value;
  }
  getNode(key) {
    const node = this.map.get(key);
    if (node && node !== this.newest) {
      const { older, newer } = node;
      if (newer) {
        newer.older = older;
      }
      if (older) {
        older.newer = newer;
      }
      node.older = this.newest;
      node.older.newer = node;
      node.newer = null;
      this.newest = node;
      if (node === this.oldest) {
        this.oldest = newer;
      }
    }
    return node;
  }
  set(key, value) {
    let node = this.getNode(key);
    if (node) {
      return node.value = value;
    }
    node = {
      key,
      value,
      newer: null,
      older: this.newest
    };
    if (this.newest) {
      this.newest.newer = node;
    }
    this.newest = node;
    this.oldest = this.oldest || node;
    this.map.set(key, node);
    return node.value;
  }
  clean() {
    while (this.oldest && this.map.size > this.max) {
      this.delete(this.oldest.key);
    }
  }
  delete(key) {
    const node = this.map.get(key);
    if (node) {
      if (node === this.newest) {
        this.newest = node.older;
      }
      if (node === this.oldest) {
        this.oldest = node.newer;
      }
      if (node.newer) {
        node.newer.older = node.older;
      }
      if (node.older) {
        node.older.newer = node.newer;
      }
      this.map.delete(key);
      this.dispose(node.value, key);
      return true;
    }
    return false;
  }
}
let currentContext = null;
const MISSING_VALUE = {};
let idCounter = 1;
const makeSlotClass = () => class Slot {
  constructor() {
    this.id = [
      "slot",
      idCounter++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let context = currentContext; context; context = context.parent) {
      if (this.id in context.slots) {
        const value = context.slots[this.id];
        if (value === MISSING_VALUE)
          break;
        if (context !== currentContext) {
          currentContext.slots[this.id] = value;
        }
        return true;
      }
    }
    if (currentContext) {
      currentContext.slots[this.id] = MISSING_VALUE;
    }
    return false;
  }
  getValue() {
    if (this.hasValue()) {
      return currentContext.slots[this.id];
    }
  }
  withValue(value, callback, args, thisArg) {
    const slots = {
      __proto__: null,
      [this.id]: value
    };
    const parent = currentContext;
    currentContext = { parent, slots };
    try {
      return callback.apply(thisArg, args);
    } finally {
      currentContext = parent;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(callback) {
    const context = currentContext;
    return function() {
      const saved = currentContext;
      try {
        currentContext = context;
        return callback.apply(this, arguments);
      } finally {
        currentContext = saved;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(callback, args, thisArg) {
    if (currentContext) {
      const saved = currentContext;
      try {
        currentContext = null;
        return callback.apply(thisArg, args);
      } finally {
        currentContext = saved;
      }
    } else {
      return callback.apply(thisArg, args);
    }
  }
};
function maybe(fn) {
  try {
    return fn();
  } catch (ignored) {
  }
}
const globalKey = "@wry/context:Slot";
const host = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  maybe(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  maybe(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
);
const globalHost = host;
const Slot = globalHost[globalKey] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[globalKey] || function(Slot2) {
  try {
    Object.defineProperty(globalHost, globalKey, {
      value: Slot2,
      enumerable: false,
      writable: false,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: true
    });
  } finally {
    return Slot2;
  }
}(makeSlotClass());
const parentEntrySlot = new Slot();
const { hasOwnProperty: hasOwnProperty$2 } = Object.prototype;
const arrayFromSet = Array.from || function(set4) {
  const array2 = [];
  set4.forEach((item) => array2.push(item));
  return array2;
};
function maybeUnsubscribe(entryOrDep) {
  const { unsubscribe } = entryOrDep;
  if (typeof unsubscribe === "function") {
    entryOrDep.unsubscribe = void 0;
    unsubscribe();
  }
}
const emptySetPool = [];
const POOL_TARGET_SIZE = 100;
function assert$1(condition, optionalMessage) {
  if (!condition) {
    throw new Error(optionalMessage || "assertion failure");
  }
}
function valueIs(a2, b) {
  const len = a2.length;
  return (
    // Unknown values are not equal to each other.
    len > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    len === b.length && // The underlying value or exception must be the same.
    a2[len - 1] === b[len - 1]
  );
}
function valueGet(value) {
  switch (value.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return value[0];
    case 2:
      throw value[1];
  }
}
function valueCopy(value) {
  return value.slice(0);
}
class Entry {
  constructor(fn) {
    this.fn = fn;
    this.parents = /* @__PURE__ */ new Set();
    this.childValues = /* @__PURE__ */ new Map();
    this.dirtyChildren = null;
    this.dirty = true;
    this.recomputing = false;
    this.value = [];
    this.deps = null;
    ++Entry.count;
  }
  peek() {
    if (this.value.length === 1 && !mightBeDirty(this)) {
      rememberParent(this);
      return this.value[0];
    }
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(args) {
    assert$1(!this.recomputing, "already recomputing");
    rememberParent(this);
    return mightBeDirty(this) ? reallyRecompute(this, args) : valueGet(this.value);
  }
  setDirty() {
    if (this.dirty)
      return;
    this.dirty = true;
    this.value.length = 0;
    reportDirty(this);
    maybeUnsubscribe(this);
  }
  dispose() {
    this.setDirty();
    forgetChildren(this);
    eachParent(this, (parent, child) => {
      parent.setDirty();
      forgetChild(parent, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(dep2) {
    dep2.add(this);
    if (!this.deps) {
      this.deps = emptySetPool.pop() || /* @__PURE__ */ new Set();
    }
    this.deps.add(dep2);
  }
  forgetDeps() {
    if (this.deps) {
      arrayFromSet(this.deps).forEach((dep2) => dep2.delete(this));
      this.deps.clear();
      emptySetPool.push(this.deps);
      this.deps = null;
    }
  }
}
Entry.count = 0;
function rememberParent(child) {
  const parent = parentEntrySlot.getValue();
  if (parent) {
    child.parents.add(parent);
    if (!parent.childValues.has(child)) {
      parent.childValues.set(child, []);
    }
    if (mightBeDirty(child)) {
      reportDirtyChild(parent, child);
    } else {
      reportCleanChild(parent, child);
    }
    return parent;
  }
}
function reallyRecompute(entry, args) {
  forgetChildren(entry);
  parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
  if (maybeSubscribe(entry, args)) {
    setClean(entry);
  }
  return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
  entry.recomputing = true;
  entry.value.length = 0;
  try {
    entry.value[0] = entry.fn.apply(null, args);
  } catch (e2) {
    entry.value[1] = e2;
  }
  entry.recomputing = false;
}
function mightBeDirty(entry) {
  return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
  entry.dirty = false;
  if (mightBeDirty(entry)) {
    return;
  }
  reportClean(entry);
}
function reportDirty(child) {
  eachParent(child, reportDirtyChild);
}
function reportClean(child) {
  eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
  const parentCount = child.parents.size;
  if (parentCount) {
    const parents = arrayFromSet(child.parents);
    for (let i2 = 0; i2 < parentCount; ++i2) {
      callback(parents[i2], child);
    }
  }
}
function reportDirtyChild(parent, child) {
  assert$1(parent.childValues.has(child));
  assert$1(mightBeDirty(child));
  const parentWasClean = !mightBeDirty(parent);
  if (!parent.dirtyChildren) {
    parent.dirtyChildren = emptySetPool.pop() || /* @__PURE__ */ new Set();
  } else if (parent.dirtyChildren.has(child)) {
    return;
  }
  parent.dirtyChildren.add(child);
  if (parentWasClean) {
    reportDirty(parent);
  }
}
function reportCleanChild(parent, child) {
  assert$1(parent.childValues.has(child));
  assert$1(!mightBeDirty(child));
  const childValue = parent.childValues.get(child);
  if (childValue.length === 0) {
    parent.childValues.set(child, valueCopy(child.value));
  } else if (!valueIs(childValue, child.value)) {
    parent.setDirty();
  }
  removeDirtyChild(parent, child);
  if (mightBeDirty(parent)) {
    return;
  }
  reportClean(parent);
}
function removeDirtyChild(parent, child) {
  const dc = parent.dirtyChildren;
  if (dc) {
    dc.delete(child);
    if (dc.size === 0) {
      if (emptySetPool.length < POOL_TARGET_SIZE) {
        emptySetPool.push(dc);
      }
      parent.dirtyChildren = null;
    }
  }
}
function forgetChildren(parent) {
  if (parent.childValues.size > 0) {
    parent.childValues.forEach((_value, child) => {
      forgetChild(parent, child);
    });
  }
  parent.forgetDeps();
  assert$1(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
  child.parents.delete(parent);
  parent.childValues.delete(child);
  removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
  if (typeof entry.subscribe === "function") {
    try {
      maybeUnsubscribe(entry);
      entry.unsubscribe = entry.subscribe.apply(null, args);
    } catch (e2) {
      entry.setDirty();
      return false;
    }
  }
  return true;
}
const EntryMethods = {
  setDirty: true,
  dispose: true,
  forget: true
  // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
  const depsByKey = /* @__PURE__ */ new Map();
  const subscribe = options && options.subscribe;
  function depend(key) {
    const parent = parentEntrySlot.getValue();
    if (parent) {
      let dep2 = depsByKey.get(key);
      if (!dep2) {
        depsByKey.set(key, dep2 = /* @__PURE__ */ new Set());
      }
      parent.dependOn(dep2);
      if (typeof subscribe === "function") {
        maybeUnsubscribe(dep2);
        dep2.unsubscribe = subscribe(key);
      }
    }
  }
  depend.dirty = function dirty(key, entryMethodName) {
    const dep2 = depsByKey.get(key);
    if (dep2) {
      const m2 = entryMethodName && hasOwnProperty$2.call(EntryMethods, entryMethodName) ? entryMethodName : "setDirty";
      arrayFromSet(dep2).forEach((entry) => entry[m2]());
      depsByKey.delete(key);
      maybeUnsubscribe(dep2);
    }
  };
  return depend;
}
let defaultKeyTrie;
function defaultMakeCacheKey(...args) {
  const trie = defaultKeyTrie || (defaultKeyTrie = new Trie(typeof WeakMap === "function"));
  return trie.lookupArray(args);
}
const caches = /* @__PURE__ */ new Set();
function wrap(originalFunction, { max = Math.pow(2, 16), makeCacheKey = defaultMakeCacheKey, keyArgs, subscribe } = /* @__PURE__ */ Object.create(null)) {
  const cache = new Cache(max, (entry) => entry.dispose());
  const optimistic = function() {
    const key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
    if (key === void 0) {
      return originalFunction.apply(null, arguments);
    }
    let entry = cache.get(key);
    if (!entry) {
      cache.set(key, entry = new Entry(originalFunction));
      entry.subscribe = subscribe;
      entry.forget = () => cache.delete(key);
    }
    const value = entry.recompute(Array.prototype.slice.call(arguments));
    cache.set(key, entry);
    caches.add(cache);
    if (!parentEntrySlot.hasValue()) {
      caches.forEach((cache2) => cache2.clean());
      caches.clear();
    }
    return value;
  };
  Object.defineProperty(optimistic, "size", {
    get() {
      return cache["map"].size;
    },
    configurable: false,
    enumerable: false
  });
  Object.freeze(optimistic.options = {
    max,
    makeCacheKey,
    keyArgs,
    subscribe
  });
  function dirtyKey(key) {
    const entry = cache.get(key);
    if (entry) {
      entry.setDirty();
    }
  }
  optimistic.dirtyKey = dirtyKey;
  optimistic.dirty = function dirty() {
    dirtyKey(makeCacheKey.apply(null, arguments));
  };
  function peekKey(key) {
    const entry = cache.get(key);
    if (entry) {
      return entry.peek();
    }
  }
  optimistic.peekKey = peekKey;
  optimistic.peek = function peek() {
    return peekKey(makeCacheKey.apply(null, arguments));
  };
  function forgetKey(key) {
    return cache.delete(key);
  }
  optimistic.forgetKey = forgetKey;
  optimistic.forget = function forget() {
    return forgetKey(makeCacheKey.apply(null, arguments));
  };
  optimistic.makeCacheKey = makeCacheKey;
  optimistic.getKey = keyArgs ? function getKey() {
    return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
  } : makeCacheKey;
  return Object.freeze(optimistic);
}
var ApolloCache = function() {
  function ApolloCache2() {
    this.assumeImmutableResults = false;
    this.getFragmentDoc = wrap(getFragmentQueryDocument);
  }
  ApolloCache2.prototype.batch = function(options) {
    var _this = this;
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    var updateResult;
    this.performTransaction(function() {
      return updateResult = options.update(_this);
    }, optimisticId);
    return updateResult;
  };
  ApolloCache2.prototype.recordOptimisticTransaction = function(transaction2, optimisticId) {
    this.performTransaction(transaction2, optimisticId);
  };
  ApolloCache2.prototype.transformDocument = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.transformForLink = function(document2) {
    return document2;
  };
  ApolloCache2.prototype.identify = function(object2) {
    return;
  };
  ApolloCache2.prototype.gc = function() {
    return [];
  };
  ApolloCache2.prototype.modify = function(options) {
    return false;
  };
  ApolloCache2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { rootId: options.id || "ROOT_QUERY", optimistic }));
  };
  ApolloCache2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }
    return this.read(__assign(__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic }));
  };
  ApolloCache2.prototype.writeQuery = function(_a2) {
    var id = _a2.id, data = _a2.data, options = __rest(_a2, ["id", "data"]);
    return this.write(Object.assign(options, {
      dataId: id || "ROOT_QUERY",
      result: data
    }));
  };
  ApolloCache2.prototype.writeFragment = function(_a2) {
    var id = _a2.id, data = _a2.data, fragment = _a2.fragment, fragmentName = _a2.fragmentName, options = __rest(_a2, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };
  ApolloCache2.prototype.updateQuery = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readQuery(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeQuery(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  ApolloCache2.prototype.updateFragment = function(options, update) {
    return this.batch({
      update: function(cache) {
        var value = cache.readFragment(options);
        var data = update(value);
        if (data === void 0 || data === null)
          return value;
        cache.writeFragment(__assign(__assign({}, options), { data }));
        return data;
      }
    });
  };
  return ApolloCache2;
}();
var MissingFieldError = function(_super) {
  __extends(MissingFieldError2, _super);
  function MissingFieldError2(message, path2, query, variables) {
    var _a2;
    var _this = _super.call(this, message) || this;
    _this.message = message;
    _this.path = path2;
    _this.query = query;
    _this.variables = variables;
    if (Array.isArray(_this.path)) {
      _this.missing = _this.message;
      for (var i2 = _this.path.length - 1; i2 >= 0; --i2) {
        _this.missing = (_a2 = {}, _a2[_this.path[i2]] = _this.missing, _a2);
      }
    } else {
      _this.missing = _this.path;
    }
    _this.__proto__ = MissingFieldError2.prototype;
    return _this;
  }
  return MissingFieldError2;
}(Error);
var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
  return value === null || value === void 0;
}
function defaultDataIdFromObject(_a2, context) {
  var __typename = _a2.__typename, id = _a2.id, _id = _a2._id;
  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = !isNullish(id) ? { id } : !isNullish(_id) ? { _id } : void 0;
    }
    if (isNullish(id) && !isNullish(_id)) {
      id = _id;
    }
    if (!isNullish(id)) {
      return "".concat(__typename, ":").concat(typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return isReference(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match2 = storeFieldName.match(TypeOrFieldNameRegExp);
  return match2 ? match2[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (isNonNullObject(result)) {
    return isArray(result) ? result.every(function(item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function(field) {
      if (isField(field) && shouldInclude(field, variables)) {
        var key = resultKeyNameFromField(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }
      return true;
    });
  }
  return false;
}
function storeValueIsStoreObject(value) {
  return isNonNullObject(value) && !isReference(value) && !isArray(value);
}
function makeProcessedFieldsMerger() {
  return new DeepMerger();
}
function extractFragmentContext(document2, fragments) {
  var fragmentMap = createFragmentMap(getFragmentDefinitions(document2));
  return {
    fragmentMap,
    lookupFragment: function(name) {
      var def = fragmentMap[name];
      if (!def && fragments) {
        def = fragments.lookup(name);
      }
      return def || null;
    }
  };
}
var DELETE = /* @__PURE__ */ Object.create(null);
var delModifier = function() {
  return DELETE;
};
var INVALIDATE = /* @__PURE__ */ Object.create(null);
var EntityStore = function() {
  function EntityStore2(policies, group) {
    var _this = this;
    this.policies = policies;
    this.group = group;
    this.data = /* @__PURE__ */ Object.create(null);
    this.rootIds = /* @__PURE__ */ Object.create(null);
    this.refs = /* @__PURE__ */ Object.create(null);
    this.getFieldValue = function(objectOrReference, storeFieldName) {
      return maybeDeepFreeze(isReference(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };
    this.canRead = function(objOrRef) {
      return isReference(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };
    this.toReference = function(objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return makeReference(objOrIdOrRef);
      }
      if (isReference(objOrIdOrRef)) {
        return objOrIdOrRef;
      }
      var id = _this.policies.identify(objOrIdOrRef)[0];
      if (id) {
        var ref = makeReference(id);
        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }
        return ref;
      }
    };
  }
  EntityStore2.prototype.toObject = function() {
    return __assign({}, this.data);
  };
  EntityStore2.prototype.has = function(dataId) {
    return this.lookup(dataId, true) !== void 0;
  };
  EntityStore2.prototype.get = function(dataId, fieldName) {
    this.group.depend(dataId, fieldName);
    if (hasOwn.call(this.data, dataId)) {
      var storeObject = this.data[dataId];
      if (storeObject && hasOwn.call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }
    if (fieldName === "__typename" && hasOwn.call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };
  EntityStore2.prototype.lookup = function(dataId, dependOnExistence) {
    if (dependOnExistence)
      this.group.depend(dataId, "__exists");
    if (hasOwn.call(this.data, dataId)) {
      return this.data[dataId];
    }
    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }
    if (this.policies.rootTypenamesById[dataId]) {
      return /* @__PURE__ */ Object.create(null);
    }
  };
  EntityStore2.prototype.merge = function(older, newer) {
    var _this = this;
    var dataId;
    if (isReference(older))
      older = older.__ref;
    if (isReference(newer))
      newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming)
      return;
    invariant$1(typeof dataId === "string", 1);
    var merged = new DeepMerger(storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;
    if (merged !== existing) {
      delete this.refs[dataId];
      if (this.group.caching) {
        var fieldsToDirty_1 = /* @__PURE__ */ Object.create(null);
        if (!existing)
          fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function(storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }
            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });
        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }
        Object.keys(fieldsToDirty_1).forEach(function(fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };
  EntityStore2.prototype.modify = function(dataId, fields) {
    var _this = this;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var changedFields_1 = /* @__PURE__ */ Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE,
        INVALIDATE,
        isReference,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || makeReference(dataId)
          } : fieldNameOrOptions, { store: _this });
        }
      };
      Object.keys(storeObject).forEach(function(storeFieldName) {
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0)
          return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];
        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(maybeDeepFreeze(fieldValue), __assign(__assign({}, sharedDetails_1), { fieldName, storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE)
              newValue = void 0;
            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
              if (globalThis.__DEV__ !== false) {
                var checkReference = function(ref) {
                  if (_this.lookup(ref.__ref) === void 0) {
                    globalThis.__DEV__ !== false && invariant$1.warn(2, ref);
                    return true;
                  }
                };
                if (isReference(newValue)) {
                  checkReference(newValue);
                } else if (Array.isArray(newValue)) {
                  var seenReference = false;
                  var someNonReference = void 0;
                  for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                    var value = newValue_1[_i];
                    if (isReference(value)) {
                      seenReference = true;
                      if (checkReference(value))
                        break;
                    } else {
                      if (typeof value === "object" && !!value) {
                        var id = _this.policies.identify(value)[0];
                        if (id) {
                          someNonReference = value;
                        }
                      }
                    }
                    if (seenReference && someNonReference !== void 0) {
                      globalThis.__DEV__ !== false && invariant$1.warn(3, someNonReference);
                      break;
                    }
                  }
                }
              }
            }
          }
        }
        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });
      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);
        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }
          this.group.dirty(dataId, "__exists");
        }
        return true;
      }
    }
    return false;
  };
  EntityStore2.prototype.delete = function(dataId, fieldName, args) {
    var _a2;
    var storeObject = this.lookup(dataId);
    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({ typename, fieldName, args }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a2 = {}, _a2[storeFieldName] = delModifier, _a2) : delModifier);
    }
    return false;
  };
  EntityStore2.prototype.evict = function(options, limit) {
    var evicted = false;
    if (options.id) {
      if (hasOwn.call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }
      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }
      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }
    return evicted;
  };
  EntityStore2.prototype.clear = function() {
    this.replace(null);
  };
  EntityStore2.prototype.extract = function() {
    var _this = this;
    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function(id) {
      if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });
    if (extraRootIds.length) {
      obj.__META = { extraRootIds: extraRootIds.sort() };
    }
    return obj;
  };
  EntityStore2.prototype.replace = function(newData) {
    var _this = this;
    Object.keys(this.data).forEach(function(dataId) {
      if (!(newData && hasOwn.call(newData, dataId))) {
        _this.delete(dataId);
      }
    });
    if (newData) {
      var __META = newData.__META, rest_1 = __rest(newData, ["__META"]);
      Object.keys(rest_1).forEach(function(dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });
      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };
  EntityStore2.prototype.retain = function(rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };
  EntityStore2.prototype.release = function(rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count)
        delete this.rootIds[rootId];
      return count;
    }
    return 0;
  };
  EntityStore2.prototype.getRootIdSet = function(ids) {
    if (ids === void 0) {
      ids = /* @__PURE__ */ new Set();
    }
    Object.keys(this.rootIds).forEach(ids.add, ids);
    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }
    return ids;
  };
  EntityStore2.prototype.gc = function() {
    var _this = this;
    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function(id) {
      if (hasOwn.call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);
    if (idsToRemove.length) {
      var root_1 = this;
      while (root_1 instanceof Layer)
        root_1 = root_1.parent;
      idsToRemove.forEach(function(id) {
        return root_1.delete(id);
      });
    }
    return idsToRemove;
  };
  EntityStore2.prototype.findChildRefIds = function(dataId) {
    if (!hasOwn.call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = /* @__PURE__ */ Object.create(null);
      var root2 = this.data[dataId];
      if (!root2)
        return found_1;
      var workSet_1 = /* @__PURE__ */ new Set([root2]);
      workSet_1.forEach(function(obj) {
        if (isReference(obj)) {
          found_1[obj.__ref] = true;
        }
        if (isNonNullObject(obj)) {
          Object.keys(obj).forEach(function(key) {
            var child = obj[key];
            if (isNonNullObject(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }
    return this.refs[dataId];
  };
  EntityStore2.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  };
  return EntityStore2;
}();
var CacheGroup = function() {
  function CacheGroup2(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }
    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }
  CacheGroup2.prototype.resetCaching = function() {
    this.d = this.caching ? dep() : null;
    this.keyMaker = new Trie(canUseWeakMap);
  };
  CacheGroup2.prototype.depend = function(dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = fieldNameFromStoreName(storeFieldName);
      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }
      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };
  CacheGroup2.prototype.dirty = function(dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };
  return CacheGroup2;
}();
function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + "#" + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}
(function(EntityStore2) {
  var Root = function(_super) {
    __extends(Root2, _super);
    function Root2(_a2) {
      var policies = _a2.policies, _b = _a2.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a2.seed;
      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
      _this.stump = new Stump(_this);
      _this.storageTrie = new Trie(canUseWeakMap);
      if (seed)
        _this.replace(seed);
      return _this;
    }
    Root2.prototype.addLayer = function(layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };
    Root2.prototype.removeLayer = function() {
      return this;
    };
    Root2.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    };
    return Root2;
  }(EntityStore2);
  EntityStore2.Root = Root;
})(EntityStore || (EntityStore = {}));
var Layer = function(_super) {
  __extends(Layer2, _super);
  function Layer2(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;
    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }
  Layer2.prototype.addLayer = function(layerId, replay) {
    return new Layer2(layerId, this, replay, this.group);
  };
  Layer2.prototype.removeLayer = function(layerId) {
    var _this = this;
    var parent = this.parent.removeLayer(layerId);
    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function(dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);
          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");
            Object.keys(parentStoreObject).forEach(function(storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function(storeFieldName) {
              if (!equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }
      return parent;
    }
    if (parent === this.parent)
      return this;
    return parent.addLayer(this.id, this.replay);
  };
  Layer2.prototype.toObject = function() {
    return __assign(__assign({}, this.parent.toObject()), this.data);
  };
  Layer2.prototype.findChildRefIds = function(dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return hasOwn.call(this.data, dataId) ? __assign(__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };
  Layer2.prototype.getStorage = function() {
    var p2 = this.parent;
    while (p2.parent)
      p2 = p2.parent;
    return p2.getStorage.apply(p2, arguments);
  };
  return Layer2;
}(EntityStore);
var Stump = function(_super) {
  __extends(Stump2, _super);
  function Stump2(root2) {
    return _super.call(this, "EntityStore.Stump", root2, function() {
    }, new CacheGroup(root2.group.caching, root2.group)) || this;
  }
  Stump2.prototype.removeLayer = function() {
    return this;
  };
  Stump2.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  };
  return Stump2;
}(Layer);
function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}
function shallowCopy(value) {
  if (isNonNullObject(value)) {
    return isArray(value) ? value.slice(0) : __assign({ __proto__: Object.getPrototypeOf(value) }, value);
  }
  return value;
}
var ObjectCanon = function() {
  function ObjectCanon2() {
    this.known = new (canUseWeakSet ? WeakSet : Set)();
    this.pool = new Trie(canUseWeakMap);
    this.passes = /* @__PURE__ */ new WeakMap();
    this.keysByJSON = /* @__PURE__ */ new Map();
    this.empty = this.admit({});
  }
  ObjectCanon2.prototype.isKnown = function(value) {
    return isNonNullObject(value) && this.known.has(value);
  };
  ObjectCanon2.prototype.pass = function(value) {
    if (isNonNullObject(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }
    return value;
  };
  ObjectCanon2.prototype.admit = function(value) {
    var _this = this;
    if (isNonNullObject(value)) {
      var original = this.passes.get(value);
      if (original)
        return original;
      var proto = Object.getPrototypeOf(value);
      switch (proto) {
        case Array.prototype: {
          if (this.known.has(value))
            return value;
          var array2 = value.map(this.admit, this);
          var node = this.pool.lookupArray(array2);
          if (!node.array) {
            this.known.add(node.array = array2);
            if (globalThis.__DEV__ !== false) {
              Object.freeze(array2);
            }
          }
          return node.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(value))
            return value;
          var proto_1 = Object.getPrototypeOf(value);
          var array_1 = [proto_1];
          var keys = this.sortedKeys(value);
          array_1.push(keys.json);
          var firstValueIndex_1 = array_1.length;
          keys.sorted.forEach(function(key) {
            array_1.push(_this.admit(value[key]));
          });
          var node = this.pool.lookupArray(array_1);
          if (!node.object) {
            var obj_1 = node.object = Object.create(proto_1);
            this.known.add(obj_1);
            keys.sorted.forEach(function(key, i2) {
              obj_1[key] = array_1[firstValueIndex_1 + i2];
            });
            if (globalThis.__DEV__ !== false) {
              Object.freeze(obj_1);
            }
          }
          return node.object;
        }
      }
    }
    return value;
  };
  ObjectCanon2.prototype.sortedKeys = function(obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);
    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);
      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = { sorted: keys, json });
      }
    }
    return node.keys;
  };
  return ObjectCanon2;
}();
var canonicalStringify = Object.assign(function(value) {
  if (isNonNullObject(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }
    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);
    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }
    return json;
  }
  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (canUseWeakMap ? WeakMap : Map)();
}
function execSelectionSetKeyArgs(options) {
  return [
    options.selectionSet,
    options.objectOrReference,
    options.context,
    options.context.canonizeResults
  ];
}
var StoreReader = function() {
  function StoreReader2(config) {
    var _this = this;
    this.knownResults = new (canUseWeakMap ? WeakMap : Map)();
    this.config = compact(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: shouldCanonizeResults(config)
    });
    this.canon = config.canon || new ObjectCanon();
    this.executeSelectionSet = wrap(function(options) {
      var _a2;
      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;
      var other = (_a2 = _this.executeSelectionSet).peek.apply(_a2, peekArgs);
      if (other) {
        if (canonizeResults) {
          return __assign(__assign({}, other), { result: _this.canon.admit(other.result) });
        }
        return other;
      }
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function(selectionSet, parent, context, canonizeResults) {
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(selectionSet, isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = wrap(function(options) {
      maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(_a2) {
        var field = _a2.field, array2 = _a2.array, context = _a2.context;
        if (supportsResultCaching(context.store)) {
          return context.store.makeCacheKey(field, array2, context.varString);
        }
      }
    });
  }
  StoreReader2.prototype.resetCanon = function() {
    this.canon = new ObjectCanon();
  };
  StoreReader2.prototype.diffQueryAgainstStore = function(_a2) {
    var store = _a2.store, query = _a2.query, _b = _a2.rootId, rootId = _b === void 0 ? "ROOT_QUERY" : _b, variables = _a2.variables, _c = _a2.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a2.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = __assign(__assign({}, getDefaultValues(getQueryDefinition(query))), variables);
    var rootRef = makeReference(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: getMainDefinition(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: __assign({ store, query, policies, variables, varString: canonicalStringify(variables), canonizeResults }, extractFragmentContext(query, this.config.fragments))
    });
    var missing;
    if (execResult.missing) {
      missing = [
        new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)
      ];
      if (!returnPartialData) {
        throw missing[0];
      }
    }
    return {
      result: execResult.result,
      complete: !missing,
      missing
    };
  };
  StoreReader2.prototype.isFresh = function(result, parent, selectionSet, context) {
    if (supportsResultCaching(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
      if (latest && result === latest.result) {
        return true;
      }
    }
    return false;
  };
  StoreReader2.prototype.execSelectionSetImpl = function(_a2) {
    var _this = this;
    var selectionSet = _a2.selectionSet, objectOrReference = _a2.objectOrReference, enclosingRef = _a2.enclosingRef, context = _a2.context;
    if (isReference(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object")
      };
    }
    var variables = context.variables, policies = context.policies, store = context.store;
    var typename = store.getFieldValue(objectOrReference, "__typename");
    var objectsToMerge = [];
    var missing;
    var missingMerger = new DeepMerger();
    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({ __typename: typename });
    }
    function handleMissing(result2, resultName) {
      var _a3;
      if (result2.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = result2.missing, _a3));
      }
      return result2.result;
    }
    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function(selection) {
      var _a3, _b;
      if (!shouldInclude(selection, variables))
        return;
      if (isField(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = resultKeyNameFromField(selection);
        if (fieldValue === void 0) {
          if (!addTypenameToDocument.added(selection)) {
            missing = missingMerger.merge(missing, (_a3 = {}, _a3[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(isReference(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2)), _a3));
          }
        } else if (isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef,
            context
          }), resultName);
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: isReference(fieldValue) ? fieldValue : enclosingRef,
            context
          }), resultName);
        }
        if (fieldValue !== void 0) {
          objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
        }
      } else {
        var fragment = getFragmentFromSelection(selection, context.lookupFragment);
        if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
          throw newInvariantError(9, selection.name.value);
        }
        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var result = mergeDeepArray(objectsToMerge);
    var finalResult = { result, missing };
    var frozen = context.canonizeResults ? this.canon.admit(finalResult) : maybeDeepFreeze(finalResult);
    if (frozen.result) {
      this.knownResults.set(frozen.result, selectionSet);
    }
    return frozen;
  };
  StoreReader2.prototype.execSubSelectedArrayImpl = function(_a2) {
    var _this = this;
    var field = _a2.field, array2 = _a2.array, enclosingRef = _a2.enclosingRef, context = _a2.context;
    var missing;
    var missingMerger = new DeepMerger();
    function handleMissing(childResult, i2) {
      var _a3;
      if (childResult.missing) {
        missing = missingMerger.merge(missing, (_a3 = {}, _a3[i2] = childResult.missing, _a3));
      }
      return childResult.result;
    }
    if (field.selectionSet) {
      array2 = array2.filter(context.store.canRead);
    }
    array2 = array2.map(function(item, i2) {
      if (item === null) {
        return null;
      }
      if (isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field,
          array: item,
          enclosingRef,
          context
        }), i2);
      }
      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: isReference(item) ? item : enclosingRef,
          context
        }), i2);
      }
      if (globalThis.__DEV__ !== false) {
        assertSelectionSetForIdValue(context.store, field, item);
      }
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array2) : array2,
      missing
    };
  };
  return StoreReader2;
}();
function firstMissing(tree) {
  try {
    JSON.stringify(tree, function(_2, value) {
      if (typeof value === "string")
        throw value;
      return value;
    });
  } catch (result) {
    return result;
  }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = /* @__PURE__ */ new Set([fieldValue]);
    workSet_1.forEach(function(value) {
      if (isNonNullObject(value)) {
        invariant$1(
          !isReference(value),
          10,
          getTypenameFromStoreObject(store, value),
          field.name.value
        );
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}
var cacheSlot = new Slot();
var cacheInfoMap = /* @__PURE__ */ new WeakMap();
function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);
  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: /* @__PURE__ */ new Set(),
      dep: dep()
    });
  }
  return info;
}
function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function(rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches2 = /* @__PURE__ */ new Set();
  var listeners = /* @__PURE__ */ new Set();
  var rv = function(newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches2.forEach(function(cache2) {
          getCacheInfo(cache2).dep.dirty(rv);
          broadcast(cache2);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function(listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();
      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }
    return value;
  };
  rv.onNextChange = function(listener) {
    listeners.add(listener);
    return function() {
      listeners.delete(listener);
    };
  };
  var attach = rv.attachCache = function(cache) {
    caches2.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };
  rv.forgetCache = function(cache) {
    return caches2.delete(cache);
  };
  return rv;
}
function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}
var specifierInfoCache = /* @__PURE__ */ Object.create(null);
function lookupSpecifierInfo(spec) {
  var cacheKey = JSON.stringify(spec);
  return specifierInfoCache[cacheKey] || (specifierInfoCache[cacheKey] = /* @__PURE__ */ Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyFieldsFn || (info.keyFieldsFn = function(object2, context) {
    var extract = function(from, key) {
      return context.readField(key, from);
    };
    var keyObject = context.keyObject = collectSpecifierPaths(specifier, function(schemaKeyPath) {
      var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
      if (extracted === void 0 && object2 !== context.storeObject && hasOwn.call(object2, schemaKeyPath[0])) {
        extracted = extractKeyPath(object2, schemaKeyPath, extractKey);
      }
      invariant$1(extracted !== void 0, 4, schemaKeyPath.join("."), object2);
      return extracted;
    });
    return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
  });
}
function keyArgsFnFromSpecifier(specifier) {
  var info = lookupSpecifierInfo(specifier);
  return info.keyArgsFn || (info.keyArgsFn = function(args, _a2) {
    var field = _a2.field, variables = _a2.variables, fieldName = _a2.fieldName;
    var collected = collectSpecifierPaths(specifier, function(keyPath) {
      var firstKey = keyPath[0];
      var firstChar = firstKey.charAt(0);
      if (firstChar === "@") {
        if (field && isNonEmptyArray(field.directives)) {
          var directiveName_1 = firstKey.slice(1);
          var d2 = field.directives.find(function(d3) {
            return d3.name.value === directiveName_1;
          });
          var directiveArgs = d2 && argumentsObjectFromField(d2, variables);
          return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
        }
        return;
      }
      if (firstChar === "$") {
        var variableName = firstKey.slice(1);
        if (variables && hasOwn.call(variables, variableName)) {
          var varKeyPath = keyPath.slice(0);
          varKeyPath[0] = variableName;
          return extractKeyPath(variables, varKeyPath);
        }
        return;
      }
      if (args) {
        return extractKeyPath(args, keyPath);
      }
    });
    var suffix = JSON.stringify(collected);
    if (args || suffix !== "{}") {
      fieldName += ":" + suffix;
    }
    return fieldName;
  });
}
function collectSpecifierPaths(specifier, extractor) {
  var merger = new DeepMerger();
  return getSpecifierPaths(specifier).reduce(function(collected, path2) {
    var _a2;
    var toMerge = extractor(path2);
    if (toMerge !== void 0) {
      for (var i2 = path2.length - 1; i2 >= 0; --i2) {
        toMerge = (_a2 = {}, _a2[path2[i2]] = toMerge, _a2);
      }
      collected = merger.merge(collected, toMerge);
    }
    return collected;
  }, /* @__PURE__ */ Object.create(null));
}
function getSpecifierPaths(spec) {
  var info = lookupSpecifierInfo(spec);
  if (!info.paths) {
    var paths_1 = info.paths = [];
    var currentPath_1 = [];
    spec.forEach(function(s2, i2) {
      if (isArray(s2)) {
        getSpecifierPaths(s2).forEach(function(p2) {
          return paths_1.push(currentPath_1.concat(p2));
        });
        currentPath_1.length = 0;
      } else {
        currentPath_1.push(s2);
        if (!isArray(spec[i2 + 1])) {
          paths_1.push(currentPath_1.slice(0));
          currentPath_1.length = 0;
        }
      }
    });
  }
  return info.paths;
}
function extractKey(object2, key) {
  return object2[key];
}
function extractKeyPath(object2, path2, extract) {
  extract = extract || extractKey;
  return normalize$1(path2.reduce(function reducer(obj, key) {
    return isArray(obj) ? obj.map(function(child) {
      return reducer(child, key);
    }) : obj && extract(obj, key);
  }, object2));
}
function normalize$1(value) {
  if (isNonNullObject(value)) {
    if (isArray(value)) {
      return value.map(normalize$1);
    }
    return collectSpecifierPaths(Object.keys(value).sort(), function(path2) {
      return extractKeyPath(value, path2);
    });
  }
  return value;
}
getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function() {
  return void 0;
};
var simpleKeyArgsFn = function(_args, context) {
  return context.fieldName;
};
var mergeTrueFn = function(existing, incoming, _a2) {
  var mergeObjects = _a2.mergeObjects;
  return mergeObjects(existing, incoming);
};
var mergeFalseFn = function(_2, incoming) {
  return incoming;
};
var Policies = function() {
  function Policies2(config) {
    this.config = config;
    this.typePolicies = /* @__PURE__ */ Object.create(null);
    this.toBeAdded = /* @__PURE__ */ Object.create(null);
    this.supertypeMap = /* @__PURE__ */ new Map();
    this.fuzzySubtypes = /* @__PURE__ */ new Map();
    this.rootIdsByTypename = /* @__PURE__ */ Object.create(null);
    this.rootTypenamesById = /* @__PURE__ */ Object.create(null);
    this.usingPossibleTypes = false;
    this.config = __assign({ dataIdFromObject: defaultDataIdFromObject }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");
    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }
    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }
  Policies2.prototype.identify = function(object2, partialContext) {
    var _a2;
    var policies = this;
    var typename = partialContext && (partialContext.typename || ((_a2 = partialContext.storeObject) === null || _a2 === void 0 ? void 0 : _a2.__typename)) || object2.__typename;
    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }
    var storeObject = partialContext && partialContext.storeObject || object2;
    var context = __assign(__assign({}, partialContext), { typename, storeObject, readField: partialContext && partialContext.readField || function() {
      var options = normalizeReadFieldOptions(arguments, storeObject);
      return policies.readField(options, {
        store: policies.cache["data"],
        variables: options.variables
      });
    } });
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
    while (keyFn) {
      var specifierOrId = keyFn(__assign(__assign({}, object2), storeObject), context);
      if (isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }
    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };
  Policies2.prototype.addTypePolicies = function(typePolicies) {
    var _this = this;
    Object.keys(typePolicies).forEach(function(typename) {
      var _a2 = typePolicies[typename], queryType = _a2.queryType, mutationType = _a2.mutationType, subscriptionType = _a2.subscriptionType, incoming = __rest(_a2, ["queryType", "mutationType", "subscriptionType"]);
      if (queryType)
        _this.setRootTypename("Query", typename);
      if (mutationType)
        _this.setRootTypename("Mutation", typename);
      if (subscriptionType)
        _this.setRootTypename("Subscription", typename);
      if (hasOwn.call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };
  Policies2.prototype.updateTypePolicy = function(typename, incoming) {
    var _this = this;
    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields, fields = incoming.fields;
    function setMerge(existing2, merge) {
      existing2.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing2.merge;
    }
    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;
    if (fields) {
      Object.keys(fields).forEach(function(fieldName) {
        var existing2 = _this.getFieldPolicy(typename, fieldName, true);
        var incoming2 = fields[fieldName];
        if (typeof incoming2 === "function") {
          existing2.read = incoming2;
        } else {
          var keyArgs = incoming2.keyArgs, read = incoming2.read, merge = incoming2.merge;
          existing2.keyFn = keyArgs === false ? simpleKeyArgsFn : isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing2.keyFn;
          if (typeof read === "function") {
            existing2.read = read;
          }
          setMerge(existing2, merge);
        }
        if (existing2.read && existing2.merge) {
          existing2.keyFn = existing2.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };
  Policies2.prototype.setRootTypename = function(which, typename) {
    if (typename === void 0) {
      typename = which;
    }
    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];
    if (typename !== old) {
      invariant$1(!old || old === which, 5, which);
      if (old)
        delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };
  Policies2.prototype.addPossibleTypes = function(possibleTypes) {
    var _this = this;
    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function(supertype) {
      _this.getSupertypeSet(supertype, true);
      possibleTypes[supertype].forEach(function(subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);
        var match2 = subtype.match(TypeOrFieldNameRegExp);
        if (!match2 || match2[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };
  Policies2.prototype.getTypePolicy = function(typename) {
    var _this = this;
    if (!hasOwn.call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = /* @__PURE__ */ Object.create(null);
      policy_1.fields = /* @__PURE__ */ Object.create(null);
      var supertypes_1 = this.supertypeMap.get(typename);
      if (!supertypes_1 && this.fuzzySubtypes.size) {
        supertypes_1 = this.getSupertypeSet(typename, true);
        this.fuzzySubtypes.forEach(function(regExp, fuzzy) {
          if (regExp.test(typename)) {
            var fuzzySupertypes = _this.supertypeMap.get(fuzzy);
            if (fuzzySupertypes) {
              fuzzySupertypes.forEach(function(supertype) {
                return supertypes_1.add(supertype);
              });
            }
          }
        });
      }
      if (supertypes_1 && supertypes_1.size) {
        supertypes_1.forEach(function(supertype) {
          var _a2 = _this.getTypePolicy(supertype), fields = _a2.fields, rest = __rest(_a2, ["fields"]);
          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }
    var inbox = this.toBeAdded[typename];
    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function(policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }
    return this.typePolicies[typename];
  };
  Policies2.prototype.getFieldPolicy = function(typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = /* @__PURE__ */ Object.create(null));
    }
  };
  Policies2.prototype.getSupertypeSet = function(subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);
    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = /* @__PURE__ */ new Set());
    }
    return supertypeSet;
  };
  Policies2.prototype.fragmentMatches = function(fragment, typename, result, variables) {
    var _this = this;
    if (!fragment.typeCondition)
      return true;
    if (!typename)
      return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype)
      return true;
    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];
      var maybeEnqueue_1 = function(subtype) {
        var supertypeSet2 = _this.getSupertypeSet(subtype, false);
        if (supertypeSet2 && supertypeSet2.size && workQueue_1.indexOf(supertypeSet2) < 0) {
          workQueue_1.push(supertypeSet2);
        }
      };
      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;
      for (var i2 = 0; i2 < workQueue_1.length; ++i2) {
        var supertypeSet = workQueue_1[i2];
        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              globalThis.__DEV__ !== false && invariant$1.warn(6, typename, supertype);
            }
            typenameSupertypeSet.add(supertype);
          }
          return true;
        }
        supertypeSet.forEach(maybeEnqueue_1);
        if (needToCheckFuzzySubtypes && i2 === workQueue_1.length - 1 && selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function(regExp, fuzzyString) {
            var match2 = typename.match(regExp);
            if (match2 && match2[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }
    return false;
  };
  Policies2.prototype.hasKeyArgs = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };
  Policies2.prototype.getStoreFieldName = function(fieldSpec) {
    var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;
    if (keyFn && typename) {
      var context = {
        typename,
        fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);
      while (keyFn) {
        var specifierOrString = keyFn(args, context);
        if (isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }
    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? storeKeyNameFromField(fieldSpec.field, fieldSpec.variables) : getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
    }
    if (storeFieldName === false) {
      return fieldName;
    }
    return fieldName === fieldNameFromStoreName(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };
  Policies2.prototype.readField = function(options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference)
      return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField)
      return;
    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename)
        options.typename = typename;
    }
    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;
    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(isReference(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return cacheSlot.withValue(this.cache, read, [
        existing,
        readOptions
      ]);
    }
    return existing;
  };
  Policies2.prototype.getReadFunction = function(typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return policy && policy.read;
  };
  Policies2.prototype.getMergeFunction = function(parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;
    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }
    return merge;
  };
  Policies2.prototype.runMergeFunction = function(existing, incoming, _a2, context, storage) {
    var field = _a2.field, typename = _a2.typename, merge = _a2.merge;
    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }
    if (merge === mergeFalseFn) {
      return incoming;
    }
    if (context.overwrite) {
      existing = void 0;
    }
    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, {
      typename,
      fieldName: field.name.value,
      field,
      variables: context.variables
    }, context, storage || /* @__PURE__ */ Object.create(null)));
  };
  return Policies2;
}();
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a2 = context.store, toReference = _a2.toReference, canRead = _a2.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName,
    storeFieldName,
    variables,
    isReference,
    toReference,
    storage,
    cache: policies.cache,
    canRead,
    readField: function() {
      return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
  var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
  var options;
  if (typeof fieldNameOrOptions === "string") {
    options = {
      fieldName: fieldNameOrOptions,
      from: argc > 1 ? from : objectOrReference
    };
  } else {
    options = __assign({}, fieldNameOrOptions);
    if (!hasOwn.call(options, "from")) {
      options.from = objectOrReference;
    }
  }
  if (globalThis.__DEV__ !== false && options.from === void 0) {
    globalThis.__DEV__ !== false && invariant$1.warn(7, stringifyForDisplay(Array.from(readFieldArgs)));
  }
  if (void 0 === options.variables) {
    options.variables = variables;
  }
  return options;
}
function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (isArray(existing) || isArray(incoming)) {
      throw newInvariantError(8);
    }
    if (isNonNullObject(existing) && isNonNullObject(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;
      if (typesDiffer) {
        return incoming;
      }
      if (isReference(existing) && storeValueIsStoreObject(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }
      if (storeValueIsStoreObject(existing) && isReference(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }
      if (storeValueIsStoreObject(existing) && storeValueIsStoreObject(incoming)) {
        return __assign(__assign({}, existing), incoming);
      }
    }
    return incoming;
  };
}
function getContextFlavor(context, clientOnly, deferred) {
  var key = "".concat(clientOnly).concat(deferred);
  var flavored = context.flavors.get(key);
  if (!flavored) {
    context.flavors.set(key, flavored = context.clientOnly === clientOnly && context.deferred === deferred ? context : __assign(__assign({}, context), { clientOnly, deferred }));
  }
  return flavored;
}
var StoreWriter = function() {
  function StoreWriter2(cache, reader, fragments) {
    this.cache = cache;
    this.reader = reader;
    this.fragments = fragments;
  }
  StoreWriter2.prototype.writeToStore = function(store, _a2) {
    var _this = this;
    var query = _a2.query, result = _a2.result, dataId = _a2.dataId, variables = _a2.variables, overwrite = _a2.overwrite;
    var operationDefinition = getOperationDefinition(query);
    var merger = makeProcessedFieldsMerger();
    variables = __assign(__assign({}, getDefaultValues(operationDefinition)), variables);
    var context = __assign(__assign({ store, written: /* @__PURE__ */ Object.create(null), merge: function(existing, incoming) {
      return merger.merge(existing, incoming);
    }, variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: /* @__PURE__ */ new Map(), clientOnly: false, deferred: false, flavors: /* @__PURE__ */ new Map() });
    var ref = this.processSelectionSet({
      result: result || /* @__PURE__ */ Object.create(null),
      dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context
    });
    if (!isReference(ref)) {
      throw newInvariantError(11, result);
    }
    context.incomingById.forEach(function(_a3, dataId2) {
      var storeObject = _a3.storeObject, mergeTree = _a3.mergeTree, fieldNodeSet = _a3.fieldNodeSet;
      var entityRef = makeReference(dataId2);
      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
        if (isReference(applied)) {
          return;
        }
        storeObject = applied;
      }
      if (globalThis.__DEV__ !== false && !context.overwrite) {
        var fieldsWithSelectionSets_1 = /* @__PURE__ */ Object.create(null);
        fieldNodeSet.forEach(function(field) {
          if (field.selectionSet) {
            fieldsWithSelectionSets_1[field.name.value] = true;
          }
        });
        var hasSelectionSet_1 = function(storeFieldName) {
          return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
        };
        var hasMergeFunction_1 = function(storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };
        Object.keys(storeObject).forEach(function(storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
          }
        });
      }
      store.merge(dataId2, storeObject);
    });
    store.retain(ref.__ref);
    return ref;
  };
  StoreWriter2.prototype.processSelectionSet = function(_a2) {
    var _this = this;
    var dataId = _a2.dataId, result = _a2.result, selectionSet = _a2.selectionSet, context = _a2.context, mergeTree = _a2.mergeTree;
    var policies = this.cache.policies;
    var incoming = /* @__PURE__ */ Object.create(null);
    var typename = dataId && policies.rootTypenamesById[dataId] || getTypenameFromResult(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");
    if ("string" === typeof typename) {
      incoming.__typename = typename;
    }
    var readField = function() {
      var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
      if (isReference(options.from)) {
        var info = context.incomingById.get(options.from.__ref);
        if (info) {
          var result_1 = policies.readField(__assign(__assign({}, options), { from: info.storeObject }), context);
          if (result_1 !== void 0) {
            return result_1;
          }
        }
      }
      return policies.readField(options, context);
    };
    var fieldNodeSet = /* @__PURE__ */ new Set();
    this.flattenFields(selectionSet, result, context, typename).forEach(function(context2, field) {
      var _a3;
      var resultFieldKey = resultKeyNameFromField(field);
      var value = result[resultFieldKey];
      fieldNodeSet.add(field);
      if (value !== void 0) {
        var storeFieldName = policies.getStoreFieldName({
          typename,
          fieldName: field.name.value,
          field,
          variables: context2.variables
        });
        var childTree = getChildMergeTree(mergeTree, storeFieldName);
        var incomingValue = _this.processFieldValue(value, field, field.selectionSet ? getContextFlavor(context2, false, false) : context2, childTree);
        var childTypename = void 0;
        if (field.selectionSet && (isReference(incomingValue) || storeValueIsStoreObject(incomingValue))) {
          childTypename = readField("__typename", incomingValue);
        }
        var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
        if (merge) {
          childTree.info = {
            field,
            typename,
            merge
          };
        } else {
          maybeRecycleChildMergeTree(mergeTree, storeFieldName);
        }
        incoming = context2.merge(incoming, (_a3 = {}, _a3[storeFieldName] = incomingValue, _a3));
      } else if (globalThis.__DEV__ !== false && !context2.clientOnly && !context2.deferred && !addTypenameToDocument.added(field) && !policies.getReadFunction(typename, field.name.value)) {
        globalThis.__DEV__ !== false && invariant$1.error(12, resultKeyNameFromField(field), result);
      }
    });
    try {
      var _b = policies.identify(result, {
        typename,
        selectionSet,
        fragmentMap: context.fragmentMap,
        storeObject: incoming,
        readField
      }), id = _b[0], keyObject = _b[1];
      dataId = dataId || id;
      if (keyObject) {
        incoming = context.merge(incoming, keyObject);
      }
    } catch (e2) {
      if (!dataId)
        throw e2;
    }
    if ("string" === typeof dataId) {
      var dataRef = makeReference(dataId);
      var sets = context.written[dataId] || (context.written[dataId] = []);
      if (sets.indexOf(selectionSet) >= 0)
        return dataRef;
      sets.push(selectionSet);
      if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
        return dataRef;
      }
      var previous_1 = context.incomingById.get(dataId);
      if (previous_1) {
        previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
        previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
        fieldNodeSet.forEach(function(field) {
          return previous_1.fieldNodeSet.add(field);
        });
      } else {
        context.incomingById.set(dataId, {
          storeObject: incoming,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          fieldNodeSet
        });
      }
      return dataRef;
    }
    return incoming;
  };
  StoreWriter2.prototype.processFieldValue = function(value, field, context, mergeTree) {
    var _this = this;
    if (!field.selectionSet || value === null) {
      return globalThis.__DEV__ !== false ? cloneDeep(value) : value;
    }
    if (isArray(value)) {
      return value.map(function(item, i2) {
        var value2 = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i2));
        maybeRecycleChildMergeTree(mergeTree, i2);
        return value2;
      });
    }
    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context,
      mergeTree
    });
  };
  StoreWriter2.prototype.flattenFields = function(selectionSet, result, context, typename) {
    if (typename === void 0) {
      typename = getTypenameFromResult(result, selectionSet, context.fragmentMap);
    }
    var fieldMap = /* @__PURE__ */ new Map();
    var policies = this.cache.policies;
    var limitingTrie = new Trie(false);
    (function flatten(selectionSet2, inheritedContext) {
      var visitedNode = limitingTrie.lookup(selectionSet2, inheritedContext.clientOnly, inheritedContext.deferred);
      if (visitedNode.visited)
        return;
      visitedNode.visited = true;
      selectionSet2.selections.forEach(function(selection) {
        if (!shouldInclude(selection, context.variables))
          return;
        var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
        if (!(clientOnly && deferred) && isNonEmptyArray(selection.directives)) {
          selection.directives.forEach(function(dir) {
            var name = dir.name.value;
            if (name === "client")
              clientOnly = true;
            if (name === "defer") {
              var args = argumentsObjectFromField(dir, context.variables);
              if (!args || args.if !== false) {
                deferred = true;
              }
            }
          });
        }
        if (isField(selection)) {
          var existing = fieldMap.get(selection);
          if (existing) {
            clientOnly = clientOnly && existing.clientOnly;
            deferred = deferred && existing.deferred;
          }
          fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
        } else {
          var fragment = getFragmentFromSelection(selection, context.lookupFragment);
          if (!fragment && selection.kind === Kind.FRAGMENT_SPREAD) {
            throw newInvariantError(13, selection.name.value);
          }
          if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
            flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
          }
        }
      });
    })(selectionSet, context);
    return fieldMap;
  };
  StoreWriter2.prototype.applyMerges = function(mergeTree, existing, incoming, context, getStorageArgs) {
    var _a2;
    var _this = this;
    if (mergeTree.map.size && !isReference(incoming)) {
      var e_1 = !isArray(incoming) && (isReference(existing) || storeValueIsStoreObject(existing)) ? existing : void 0;
      var i_1 = incoming;
      if (e_1 && !getStorageArgs) {
        getStorageArgs = [isReference(e_1) ? e_1.__ref : e_1];
      }
      var changedFields_1;
      var getValue_1 = function(from, name) {
        return isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };
      mergeTree.map.forEach(function(childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal)
          return;
        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }
        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || /* @__PURE__ */ new Map();
          changedFields_1.set(storeFieldName, aVal);
        }
        if (getStorageArgs) {
          invariant$1(getStorageArgs.pop() === storeFieldName);
        }
      });
      if (changedFields_1) {
        incoming = isArray(i_1) ? i_1.slice(0) : __assign({}, i_1);
        changedFields_1.forEach(function(value, name) {
          incoming[name] = value;
        });
      }
    }
    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a2 = context.store).getStorage.apply(_a2, getStorageArgs));
    }
    return incoming;
  };
  return StoreWriter2;
}();
var emptyMergeTreePool = [];
function getChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  if (!map2.has(name)) {
    map2.set(name, emptyMergeTreePool.pop() || { map: /* @__PURE__ */ new Map() });
  }
  return map2.get(name);
}
function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right))
    return left;
  if (!left || mergeTreeIsEmpty(left))
    return right;
  var info = left.info && right.info ? __assign(__assign({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map2 = needToMergeMaps ? /* @__PURE__ */ new Map() : left.map.size ? left.map : right.map;
  var merged = { info, map: map2 };
  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function(leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function(key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }
  return merged;
}
function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a2, name) {
  var map2 = _a2.map;
  var childTree = map2.get(name);
  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map2.delete(name);
  }
}
var warnings = /* @__PURE__ */ new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function(objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };
  var existing = getChild(existingRef);
  if (!existing)
    return;
  var incoming = getChild(incomingObj);
  if (!incoming)
    return;
  if (isReference(existing))
    return;
  if (equal(existing, incoming))
    return;
  if (Object.keys(existing).every(function(key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }
  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = fieldNameFromStoreName(storeFieldName);
  var typeDotName = "".concat(parentType, ".").concat(fieldName);
  if (warnings.has(typeDotName))
    return;
  warnings.add(typeDotName);
  var childTypenames = [];
  if (!isArray(existing) && !isArray(incoming)) {
    [existing, incoming].forEach(function(child) {
      var typename = store.getFieldValue(child, "__typename");
      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }
  globalThis.__DEV__ !== false && invariant$1.warn(14, fieldName, parentType, childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "", typeDotName, existing, incoming);
}
var InMemoryCache = function(_super) {
  __extends(InMemoryCache2, _super);
  function InMemoryCache2(config) {
    if (config === void 0) {
      config = {};
    }
    var _this = _super.call(this) || this;
    _this.watches = /* @__PURE__ */ new Set();
    _this.addTypenameTransform = new DocumentTransform(addTypenameToDocument);
    _this.assumeImmutableResults = true;
    _this.makeVar = makeVar;
    _this.txCount = 0;
    _this.config = normalizeConfig(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new Policies({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });
    _this.init();
    return _this;
  }
  InMemoryCache2.prototype.init = function() {
    var rootStore = this.data = new EntityStore.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };
  InMemoryCache2.prototype.resetResultCache = function(resetResultIdentities) {
    var _this = this;
    var previousReader = this.storeReader;
    var fragments = this.config.fragments;
    this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: shouldCanonizeResults(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon,
      fragments
    }), fragments);
    this.maybeBroadcastWatch = wrap(function(c2, options) {
      return _this.broadcastWatch(c2, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(c2) {
        var store = c2.optimistic ? _this.optimisticData : _this.data;
        if (supportsResultCaching(store)) {
          var optimistic = c2.optimistic, id = c2.id, variables = c2.variables;
          return store.makeCacheKey(c2.query, c2.callback, canonicalStringify({ optimistic, id, variables }));
        }
      }
    });
    (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(group) {
      return group.resetCaching();
    });
  };
  InMemoryCache2.prototype.restore = function(data) {
    this.init();
    if (data)
      this.data.replace(data);
    return this;
  };
  InMemoryCache2.prototype.extract = function(optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return (optimistic ? this.optimisticData : this.data).extract();
  };
  InMemoryCache2.prototype.read = function(options) {
    var _a2 = options.returnPartialData, returnPartialData = _a2 === void 0 ? false : _a2;
    try {
      return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData })).result || null;
    } catch (e2) {
      if (e2 instanceof MissingFieldError) {
        return null;
      }
      throw e2;
    }
  };
  InMemoryCache2.prototype.write = function(options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.modify = function(options) {
    if (hasOwn.call(options, "id") && !options.id) {
      return false;
    }
    var store = options.optimistic ? this.optimisticData : this.data;
    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.diff = function(options) {
    return this.storeReader.diffQueryAgainstStore(__assign(__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
  };
  InMemoryCache2.prototype.watch = function(watch) {
    var _this = this;
    if (!this.watches.size) {
      recallCache(this);
    }
    this.watches.add(watch);
    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }
    return function() {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        forgetCache(_this);
      }
      _this.maybeBroadcastWatch.forget(watch);
    };
  };
  InMemoryCache2.prototype.gc = function(options) {
    canonicalStringify.reset();
    var ids = this.optimisticData.gc();
    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }
    return ids;
  };
  InMemoryCache2.prototype.retain = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };
  InMemoryCache2.prototype.release = function(rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };
  InMemoryCache2.prototype.identify = function(object2) {
    if (isReference(object2))
      return object2.__ref;
    try {
      return this.policies.identify(object2)[0];
    } catch (e2) {
      globalThis.__DEV__ !== false && invariant$1.warn(e2);
    }
  };
  InMemoryCache2.prototype.evict = function(options) {
    if (!options.id) {
      if (hasOwn.call(options, "id")) {
        return false;
      }
      options = __assign(__assign({}, options), { id: "ROOT_QUERY" });
    }
    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (!--this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };
  InMemoryCache2.prototype.reset = function(options) {
    var _this = this;
    this.init();
    canonicalStringify.reset();
    if (options && options.discardWatches) {
      this.watches.forEach(function(watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      forgetCache(this);
    } else {
      this.broadcastWatches();
    }
    return Promise.resolve();
  };
  InMemoryCache2.prototype.removeOptimistic = function(idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };
  InMemoryCache2.prototype.batch = function(options) {
    var _this = this;
    var update = options.update, _a2 = options.optimistic, optimistic = _a2 === void 0 ? true : _a2, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
    var updateResult;
    var perform = function(layer) {
      var _a3 = _this, data = _a3.data, optimisticData = _a3.optimisticData;
      ++_this.txCount;
      if (layer) {
        _this.data = _this.optimisticData = layer;
      }
      try {
        return updateResult = update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };
    var alreadyDirty = /* @__PURE__ */ new Set();
    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch) {
        alreadyDirty.add(watch);
        return false;
      } }));
    }
    if (typeof optimistic === "string") {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }
    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }
    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(__assign(__assign({}, options), { onWatchUpdated: function(watch, diff) {
        var result = onWatchUpdated.call(this, watch, diff);
        if (result !== false) {
          alreadyDirty.delete(watch);
        }
        return result;
      } }));
      if (alreadyDirty.size) {
        alreadyDirty.forEach(function(watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
    return updateResult;
  };
  InMemoryCache2.prototype.performTransaction = function(update, optimisticId) {
    return this.batch({
      update,
      optimistic: optimisticId || optimisticId !== null
    });
  };
  InMemoryCache2.prototype.transformDocument = function(document2) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(document2));
  };
  InMemoryCache2.prototype.broadcastWatches = function(options) {
    var _this = this;
    if (!this.txCount) {
      this.watches.forEach(function(c2) {
        return _this.maybeBroadcastWatch(c2, options);
      });
    }
  };
  InMemoryCache2.prototype.addFragmentsToDocument = function(document2) {
    var fragments = this.config.fragments;
    return fragments ? fragments.transform(document2) : document2;
  };
  InMemoryCache2.prototype.addTypenameToDocument = function(document2) {
    if (this.addTypename) {
      return this.addTypenameTransform.transformDocument(document2);
    }
    return document2;
  };
  InMemoryCache2.prototype.broadcastWatch = function(c2, options) {
    var lastDiff = c2.lastDiff;
    var diff = this.diff(c2);
    if (options) {
      if (c2.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }
      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c2, diff, lastDiff) === false) {
        return;
      }
    }
    if (!lastDiff || !equal(lastDiff.result, diff.result)) {
      c2.callback(c2.lastDiff = diff, lastDiff);
    }
  };
  return InMemoryCache2;
}(ApolloCache);
var NetworkStatus;
(function(NetworkStatus2) {
  NetworkStatus2[NetworkStatus2["loading"] = 1] = "loading";
  NetworkStatus2[NetworkStatus2["setVariables"] = 2] = "setVariables";
  NetworkStatus2[NetworkStatus2["fetchMore"] = 3] = "fetchMore";
  NetworkStatus2[NetworkStatus2["refetch"] = 4] = "refetch";
  NetworkStatus2[NetworkStatus2["poll"] = 6] = "poll";
  NetworkStatus2[NetworkStatus2["ready"] = 7] = "ready";
  NetworkStatus2[NetworkStatus2["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}
function equalByQuery(query, _a2, _b, variables) {
  var aData = _a2.data, aRest = __rest(_a2, ["data"]);
  var bData = _b.data, bRest = __rest(_b, ["data"]);
  return equal(aRest, bRest) && equalBySelectionSet(getMainDefinition(query).selectionSet, aData, bData, {
    fragmentMap: createFragmentMap(getFragmentDefinitions(query)),
    variables
  });
}
function equalBySelectionSet(selectionSet, aResult, bResult, context) {
  if (aResult === bResult) {
    return true;
  }
  var seenSelections = /* @__PURE__ */ new Set();
  return selectionSet.selections.every(function(selection) {
    if (seenSelections.has(selection))
      return true;
    seenSelections.add(selection);
    if (!shouldInclude(selection, context.variables))
      return true;
    if (selectionHasNonreactiveDirective(selection))
      return true;
    if (isField(selection)) {
      var resultKey = resultKeyNameFromField(selection);
      var aResultChild = aResult && aResult[resultKey];
      var bResultChild = bResult && bResult[resultKey];
      var childSelectionSet = selection.selectionSet;
      if (!childSelectionSet) {
        return equal(aResultChild, bResultChild);
      }
      var aChildIsArray = Array.isArray(aResultChild);
      var bChildIsArray = Array.isArray(bResultChild);
      if (aChildIsArray !== bChildIsArray)
        return false;
      if (aChildIsArray && bChildIsArray) {
        var length_1 = aResultChild.length;
        if (bResultChild.length !== length_1) {
          return false;
        }
        for (var i2 = 0; i2 < length_1; ++i2) {
          if (!equalBySelectionSet(childSelectionSet, aResultChild[i2], bResultChild[i2], context)) {
            return false;
          }
        }
        return true;
      }
      return equalBySelectionSet(childSelectionSet, aResultChild, bResultChild, context);
    } else {
      var fragment = getFragmentFromSelection(selection, context.fragmentMap);
      if (fragment) {
        if (selectionHasNonreactiveDirective(fragment))
          return true;
        return equalBySelectionSet(fragment.selectionSet, aResult, bResult, context);
      }
    }
  });
}
function selectionHasNonreactiveDirective(selection) {
  return !!selection.directives && selection.directives.some(directiveIsNonreactive);
}
function directiveIsNonreactive(dir) {
  return dir.name.value === "nonreactive";
}
var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var ObservableQuery = function(_super) {
  __extends(ObservableQuery2, _super);
  function ObservableQuery2(_a2) {
    var queryManager = _a2.queryManager, queryInfo = _a2.queryInfo, options = _a2.options;
    var _this = _super.call(this, function(observer) {
      try {
        var subObserver = observer._subscription._observer;
        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a3) {
      }
      var first = !_this.observers.size;
      _this.observers.add(observer);
      var last = _this.last;
      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }
      if (first) {
        _this.reobserve().catch(function() {
        });
      }
      return function() {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;
    _this.observers = /* @__PURE__ */ new Set();
    _this.subscriptions = /* @__PURE__ */ new Set();
    _this.queryInfo = queryInfo;
    _this.queryManager = queryManager;
    _this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy);
    _this.isTornDown = false;
    var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
    var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy : _f;
    _this.options = __assign(__assign({}, options), { initialFetchPolicy, fetchPolicy });
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = getOperationDefinition(_this.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    return _this;
  }
  Object.defineProperty(ObservableQuery2.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ObservableQuery2.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });
  ObservableQuery2.prototype.result = function() {
    var _this = this;
    return new Promise(function(resolve, reject) {
      var observer = {
        next: function(result) {
          resolve(result);
          _this.observers.delete(observer);
          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }
          setTimeout(function() {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };
      var subscription = _this.subscribe(observer);
    });
  };
  ObservableQuery2.prototype.getCurrentResult = function(saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }
    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || NetworkStatus.ready;
    var result = __assign(__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus });
    var _a2 = this.options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2;
    if (skipCacheDataFor(fetchPolicy) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ;
    else if (this.waitForOwnResult) {
      this.queryInfo["updateWatch"]();
    } else {
      var diff = this.queryInfo.getDiff();
      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }
      if (equal(result.data, {})) {
        result.data = void 0;
      }
      if (diff.complete) {
        delete result.partial;
        if (diff.complete && result.networkStatus === NetworkStatus.loading && (fetchPolicy === "cache-first" || fetchPolicy === "cache-only")) {
          result.networkStatus = NetworkStatus.ready;
          result.loading = false;
        }
      } else {
        result.partial = true;
      }
      if (globalThis.__DEV__ !== false && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff.missing);
      }
    }
    if (saveAsLastResult) {
      this.updateLastResult(result);
    }
    return result;
  };
  ObservableQuery2.prototype.isDifferentFromLastResult = function(newResult, variables) {
    if (!this.last) {
      return true;
    }
    var resultIsDifferent = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !equalByQuery(this.query, this.last.result, newResult, this.variables) : !equal(this.last.result, newResult);
    return resultIsDifferent || variables && !equal(this.last.variables, variables);
  };
  ObservableQuery2.prototype.getLast = function(key, variablesMustMatch) {
    var last = this.last;
    if (last && last[key] && (!variablesMustMatch || equal(last.variables, this.variables))) {
      return last[key];
    }
  };
  ObservableQuery2.prototype.getLastResult = function(variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };
  ObservableQuery2.prototype.getLastError = function(variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };
  ObservableQuery2.prototype.resetLastResults = function() {
    delete this.last;
    this.isTornDown = false;
  };
  ObservableQuery2.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  };
  ObservableQuery2.prototype.refetch = function(variables) {
    var _a2;
    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;
    if (fetchPolicy === "cache-and-network") {
      reobserveOptions.fetchPolicy = fetchPolicy;
    } else if (fetchPolicy === "no-cache") {
      reobserveOptions.fetchPolicy = "no-cache";
    } else {
      reobserveOptions.fetchPolicy = "network-only";
    }
    if (globalThis.__DEV__ !== false && variables && hasOwnProperty$1.call(variables, "variables")) {
      var queryDef = getQueryDefinition(this.query);
      var vars = queryDef.variableDefinitions;
      if (!vars || !vars.some(function(v2) {
        return v2.variable.name.value === "variables";
      })) {
        globalThis.__DEV__ !== false && invariant$1.warn(
          20,
          variables,
          ((_a2 = queryDef.name) === null || _a2 === void 0 ? void 0 : _a2.value) || queryDef
        );
      }
    }
    if (variables && !equal(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = __assign(__assign({}, this.options.variables), variables);
    }
    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, NetworkStatus.refetch);
  };
  ObservableQuery2.prototype.fetchMore = function(fetchMoreOptions) {
    var _this = this;
    var combinedOptions = __assign(__assign({}, fetchMoreOptions.query ? fetchMoreOptions : __assign(__assign(__assign(__assign({}, this.options), { query: this.options.query }), fetchMoreOptions), { variables: __assign(__assign({}, this.options.variables), fetchMoreOptions.variables) })), { fetchPolicy: "no-cache" });
    combinedOptions.query = this.transformDocument(combinedOptions.query);
    var qid = this.queryManager.generateQueryId();
    this.lastQuery = fetchMoreOptions.query ? this.transformDocument(this.options.query) : combinedOptions.query;
    var queryInfo = this.queryInfo;
    var originalNetworkStatus = queryInfo.networkStatus;
    queryInfo.networkStatus = NetworkStatus.fetchMore;
    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.observe();
    }
    var updatedQuerySet = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(qid, combinedOptions, NetworkStatus.fetchMore).then(function(fetchMoreResult) {
      _this.queryManager.removeQuery(qid);
      if (queryInfo.networkStatus === NetworkStatus.fetchMore) {
        queryInfo.networkStatus = originalNetworkStatus;
      }
      _this.queryManager.cache.batch({
        update: function(cache) {
          var updateQuery = fetchMoreOptions.updateQuery;
          if (updateQuery) {
            cache.updateQuery({
              query: _this.query,
              variables: _this.variables,
              returnPartialData: true,
              optimistic: false
            }, function(previous) {
              return updateQuery(previous, {
                fetchMoreResult: fetchMoreResult.data,
                variables: combinedOptions.variables
              });
            });
          } else {
            cache.writeQuery({
              query: combinedOptions.query,
              variables: combinedOptions.variables,
              data: fetchMoreResult.data
            });
          }
        },
        onWatchUpdated: function(watch) {
          updatedQuerySet.add(watch.query);
        }
      });
      return fetchMoreResult;
    }).finally(function() {
      if (!updatedQuerySet.has(_this.query)) {
        reobserveCacheFirst(_this);
      }
    });
  };
  ObservableQuery2.prototype.subscribeToMore = function(options) {
    var _this = this;
    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function(subscriptionData) {
        var updateQuery = options.updateQuery;
        if (updateQuery) {
          _this.updateQuery(function(previous, _a2) {
            var variables = _a2.variables;
            return updateQuery(previous, {
              subscriptionData,
              variables
            });
          });
        }
      },
      error: function(err) {
        if (options.onError) {
          options.onError(err);
          return;
        }
        globalThis.__DEV__ !== false && invariant$1.error(21, err);
      }
    });
    this.subscriptions.add(subscription);
    return function() {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };
  ObservableQuery2.prototype.setOptions = function(newOptions) {
    return this.reobserve(newOptions);
  };
  ObservableQuery2.prototype.silentSetOptions = function(newOptions) {
    var mergedOptions = compact(this.options, newOptions || {});
    assign(this.options, mergedOptions);
  };
  ObservableQuery2.prototype.setVariables = function(variables) {
    if (equal(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }
    this.options.variables = variables;
    if (!this.observers.size) {
      return Promise.resolve();
    }
    return this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables
    }, NetworkStatus.setVariables);
  };
  ObservableQuery2.prototype.updateQuery = function(mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });
    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };
  ObservableQuery2.prototype.startPolling = function(pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };
  ObservableQuery2.prototype.stopPolling = function() {
    this.options.pollInterval = 0;
    this.updatePolling();
  };
  ObservableQuery2.prototype.applyNextFetchPolicy = function(reason, options) {
    if (options.nextFetchPolicy) {
      var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? "cache-first" : _a2, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
      if (fetchPolicy === "standby")
        ;
      else if (typeof options.nextFetchPolicy === "function") {
        options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
          reason,
          options,
          observable: this,
          initialFetchPolicy
        });
      } else if (reason === "variables-changed") {
        options.fetchPolicy = initialFetchPolicy;
      } else {
        options.fetchPolicy = options.nextFetchPolicy;
      }
    }
    return options.fetchPolicy;
  };
  ObservableQuery2.prototype.fetch = function(options, newNetworkStatus, query) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager["fetchConcastWithInfo"](this.queryId, options, newNetworkStatus, query);
  };
  ObservableQuery2.prototype.updatePolling = function() {
    var _this = this;
    if (this.queryManager.ssrMode) {
      return;
    }
    var _a2 = this, pollingInfo = _a2.pollingInfo, pollInterval = _a2.options.pollInterval;
    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }
      return;
    }
    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }
    invariant$1(pollInterval, 22);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;
    var maybeFetch = function() {
      if (_this.pollingInfo) {
        if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: _this.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, NetworkStatus.poll).then(poll, poll);
        } else {
          poll();
        }
      }
    };
    var poll = function() {
      var info2 = _this.pollingInfo;
      if (info2) {
        clearTimeout(info2.timeout);
        info2.timeout = setTimeout(maybeFetch, info2.interval);
      }
    };
    poll();
  };
  ObservableQuery2.prototype.updateLastResult = function(newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }
    var error = this.getLastError();
    if (error && this.last && !equal(variables, this.last.variables)) {
      error = void 0;
    }
    return this.last = __assign({ result: this.queryManager.assumeImmutableResults ? newResult : cloneDeep(newResult), variables }, error ? { error } : null);
  };
  ObservableQuery2.prototype.reobserveAsConcast = function(newOptions, newNetworkStatus) {
    var _this = this;
    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === NetworkStatus.refetch || newNetworkStatus === NetworkStatus.fetchMore || newNetworkStatus === NetworkStatus.poll;
    var oldVariables = this.options.variables;
    var oldFetchPolicy = this.options.fetchPolicy;
    var mergedOptions = compact(this.options, newOptions || {});
    var options = useDisposableConcast ? mergedOptions : assign(this.options, mergedOptions);
    var query = this.transformDocument(options.query);
    this.lastQuery = query;
    if (!useDisposableConcast) {
      this.updatePolling();
      if (newOptions && newOptions.variables && !equal(newOptions.variables, oldVariables) && options.fetchPolicy !== "standby" && options.fetchPolicy === oldFetchPolicy) {
        this.applyNextFetchPolicy("variables-changed", options);
        if (newNetworkStatus === void 0) {
          newNetworkStatus = NetworkStatus.setVariables;
        }
      }
    }
    this.waitForOwnResult && (this.waitForOwnResult = skipCacheDataFor(options.fetchPolicy));
    var finishWaitingForOwnResult = function() {
      if (_this.concast === concast) {
        _this.waitForOwnResult = false;
      }
    };
    var variables = options.variables && __assign({}, options.variables);
    var _a2 = this.fetch(options, newNetworkStatus, query), concast = _a2.concast, fromLink = _a2.fromLink;
    var observer = {
      next: function(result) {
        finishWaitingForOwnResult();
        _this.reportResult(result, variables);
      },
      error: function(error) {
        finishWaitingForOwnResult();
        _this.reportError(error, variables);
      }
    };
    if (!useDisposableConcast && (fromLink || !this.concast)) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer);
      }
      this.concast = concast;
      this.observer = observer;
    }
    concast.addObserver(observer);
    return concast;
  };
  ObservableQuery2.prototype.reobserve = function(newOptions, newNetworkStatus) {
    return this.reobserveAsConcast(newOptions, newNetworkStatus).promise;
  };
  ObservableQuery2.prototype.resubscribeAfterError = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var last = this.last;
    this.resetLastResults();
    var subscription = this.subscribe.apply(this, args);
    this.last = last;
    return subscription;
  };
  ObservableQuery2.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };
  ObservableQuery2.prototype.reportResult = function(result, variables) {
    var lastError = this.getLastError();
    var isDifferent = this.isDifferentFromLastResult(result, variables);
    if (lastError || !result.partial || this.options.returnPartialData) {
      this.updateLastResult(result, variables);
    }
    if (lastError || isDifferent) {
      iterateObserversSafely(this.observers, "next", result);
    }
  };
  ObservableQuery2.prototype.reportError = function(error, variables) {
    var errorResult = __assign(__assign({}, this.getLastResult()), { error, errors: error.graphQLErrors, networkStatus: NetworkStatus.error, loading: false });
    this.updateLastResult(errorResult, variables);
    iterateObserversSafely(this.observers, "error", this.last.error = error);
  };
  ObservableQuery2.prototype.hasObservers = function() {
    return this.observers.size > 0;
  };
  ObservableQuery2.prototype.tearDownQuery = function() {
    if (this.isTornDown)
      return;
    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }
    this.stopPolling();
    this.subscriptions.forEach(function(sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };
  ObservableQuery2.prototype.transformDocument = function(document2) {
    return this.queryManager.transform(document2);
  };
  return ObservableQuery2;
}(Observable);
fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
  var _a2 = obsQuery.options, fetchPolicy = _a2.fetchPolicy, nextFetchPolicy = _a2.nextFetchPolicy;
  if (fetchPolicy === "cache-and-network" || fetchPolicy === "network-only") {
    return obsQuery.reobserve({
      fetchPolicy: "cache-first",
      nextFetchPolicy: function() {
        this.nextFetchPolicy = nextFetchPolicy;
        if (typeof nextFetchPolicy === "function") {
          return nextFetchPolicy.apply(this, arguments);
        }
        return fetchPolicy;
      }
    });
  }
  return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
  globalThis.__DEV__ !== false && invariant$1.error(23, error.message, error.stack);
}
function logMissingFieldErrors(missing) {
  if (globalThis.__DEV__ !== false && missing) {
    globalThis.__DEV__ !== false && invariant$1.debug(24, missing);
  }
}
function skipCacheDataFor(fetchPolicy) {
  return fetchPolicy === "network-only" || fetchPolicy === "no-cache" || fetchPolicy === "standby";
}
var LocalState = function() {
  function LocalState2(_a2) {
    var cache = _a2.cache, client = _a2.client, resolvers = _a2.resolvers, fragmentMatcher = _a2.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap();
    this.cache = cache;
    if (client) {
      this.client = client;
    }
    if (resolvers) {
      this.addResolvers(resolvers);
    }
    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }
  LocalState2.prototype.addResolvers = function(resolvers) {
    var _this = this;
    this.resolvers = this.resolvers || {};
    if (Array.isArray(resolvers)) {
      resolvers.forEach(function(resolverGroup) {
        _this.resolvers = mergeDeep(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = mergeDeep(this.resolvers, resolvers);
    }
  };
  LocalState2.prototype.setResolvers = function(resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };
  LocalState2.prototype.getResolvers = function() {
    return this.resolvers || {};
  };
  LocalState2.prototype.runResolvers = function(_a2) {
    var document2 = _a2.document, remoteResult = _a2.remoteResult, context = _a2.context, variables = _a2.variables, _b = _a2.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_c) {
        if (document2) {
          return [2, this.resolveDocument(document2, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function(localResult) {
            return __assign(__assign({}, remoteResult), { data: localResult.result });
          })];
        }
        return [2, remoteResult];
      });
    });
  };
  LocalState2.prototype.setFragmentMatcher = function(fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };
  LocalState2.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  };
  LocalState2.prototype.clientQuery = function(document2) {
    if (hasDirectives(["client"], document2)) {
      if (this.resolvers) {
        return document2;
      }
    }
    return null;
  };
  LocalState2.prototype.serverQuery = function(document2) {
    return removeClientSetsFromDocument(document2);
  };
  LocalState2.prototype.prepareContext = function(context) {
    var cache = this.cache;
    return __assign(__assign({}, context), { cache, getCacheKey: function(obj) {
      return cache.identify(obj);
    } });
  };
  LocalState2.prototype.addExportedVariables = function(document2, variables, context) {
    if (variables === void 0) {
      variables = {};
    }
    if (context === void 0) {
      context = {};
    }
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a2) {
        if (document2) {
          return [2, this.resolveDocument(document2, this.buildRootValueFromCache(document2, variables) || {}, this.prepareContext(context), variables).then(function(data) {
            return __assign(__assign({}, variables), data.exportedVariables);
          })];
        }
        return [2, __assign({}, variables)];
      });
    });
  };
  LocalState2.prototype.shouldForceResolvers = function(document2) {
    var forceResolvers = false;
    visit(document2, {
      Directive: {
        enter: function(node) {
          if (node.name.value === "client" && node.arguments) {
            forceResolvers = node.arguments.some(function(arg) {
              return arg.name.value === "always" && arg.value.kind === "BooleanValue" && arg.value.value === true;
            });
            if (forceResolvers) {
              return BREAK;
            }
          }
        }
      }
    });
    return forceResolvers;
  };
  LocalState2.prototype.buildRootValueFromCache = function(document2, variables) {
    return this.cache.diff({
      query: buildQueryFromSelectionSet(document2),
      variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };
  LocalState2.prototype.resolveDocument = function(document2, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }
    if (variables === void 0) {
      variables = {};
    }
    if (fragmentMatcher === void 0) {
      fragmentMatcher = function() {
        return true;
      };
    }
    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a2, cache, client, execContext, isClientFieldDescendant;
      return __generator(this, function(_b) {
        mainDefinition = getMainDefinition(document2);
        fragments = getFragmentDefinitions(document2);
        fragmentMap = createFragmentMap(fragments);
        selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : "Query";
        _a2 = this, cache = _a2.cache, client = _a2.client;
        execContext = {
          fragmentMap,
          context: __assign(__assign({}, context), { cache, client }),
          variables,
          fragmentMatcher,
          defaultOperationType,
          exportedVariables: {},
          selectionsToResolve,
          onlyRunForcedResolvers
        };
        isClientFieldDescendant = false;
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(result) {
          return {
            result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };
  LocalState2.prototype.resolveSelectionSet = function(selectionSet, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var fragmentMap, context, variables, resultsToMerge, execute2;
      var _this = this;
      return __generator(this, function(_a2) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];
        execute2 = function(selection) {
          return __awaiter(_this, void 0, void 0, function() {
            var fragment, typeCondition;
            return __generator(this, function(_a3) {
              if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                return [2];
              }
              if (!shouldInclude(selection, variables)) {
                return [2];
              }
              if (isField(selection)) {
                return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function(fieldResult) {
                  var _a4;
                  if (typeof fieldResult !== "undefined") {
                    resultsToMerge.push((_a4 = {}, _a4[resultKeyNameFromField(selection)] = fieldResult, _a4));
                  }
                })];
              }
              if (isInlineFragment(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                invariant$1(fragment, 18, selection.name.value);
              }
              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;
                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function(fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }
              return [2];
            });
          });
        };
        return [2, Promise.all(selectionSet.selections.map(execute2)).then(function() {
          return mergeDeepArray(resultsToMerge);
        })];
      });
    });
  };
  LocalState2.prototype.resolveField = function(field, isClientFieldDescendant, rootValue, execContext) {
    return __awaiter(this, void 0, void 0, function() {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
      var _this = this;
      return __generator(this, function(_a2) {
        if (!rootValue) {
          return [2, null];
        }
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = resultKeyNameFromField(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);
        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];
          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
            if (resolve) {
              resultPromise = Promise.resolve(cacheSlot.withValue(this.cache, resolve, [
                rootValue,
                argumentsObjectFromField(field, variables),
                execContext.context,
                { field, fragmentMap: execContext.fragmentMap }
              ]));
            }
          }
        }
        return [2, resultPromise.then(function(result) {
          var _a3, _b;
          if (result === void 0) {
            result = defaultResult;
          }
          if (field.directives) {
            field.directives.forEach(function(directive) {
              if (directive.name.value === "export" && directive.arguments) {
                directive.arguments.forEach(function(arg) {
                  if (arg.name.value === "as" && arg.value.kind === "StringValue") {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }
          if (!field.selectionSet) {
            return result;
          }
          if (result == null) {
            return result;
          }
          var isClientField = (_b = (_a3 = field.directives) === null || _a3 === void 0 ? void 0 : _a3.some(function(d2) {
            return d2.name.value === "client";
          })) !== null && _b !== void 0 ? _b : false;
          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
          }
          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
          }
        })];
      });
    });
  };
  LocalState2.prototype.resolveSubSelectedArray = function(field, isClientFieldDescendant, result, execContext) {
    var _this = this;
    return Promise.all(result.map(function(item) {
      if (item === null) {
        return null;
      }
      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
      }
      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
      }
    }));
  };
  LocalState2.prototype.collectSelectionsToResolve = function(mainDefinition, fragmentMap) {
    var isSingleASTNode = function(node) {
      return !Array.isArray(node);
    };
    var selectionsToResolveCache = this.selectionsToResolveCache;
    function collectByDefinition(definitionNode) {
      if (!selectionsToResolveCache.has(definitionNode)) {
        var matches_1 = /* @__PURE__ */ new Set();
        selectionsToResolveCache.set(definitionNode, matches_1);
        visit(definitionNode, {
          Directive: function(node, _2, __, ___, ancestors) {
            if (node.name.value === "client") {
              ancestors.forEach(function(node2) {
                if (isSingleASTNode(node2) && isSelectionNode(node2)) {
                  matches_1.add(node2);
                }
              });
            }
          },
          FragmentSpread: function(spread, _2, __, ___, ancestors) {
            var fragment = fragmentMap[spread.name.value];
            invariant$1(fragment, 19, spread.name.value);
            var fragmentSelections = collectByDefinition(fragment);
            if (fragmentSelections.size > 0) {
              ancestors.forEach(function(node) {
                if (isSingleASTNode(node) && isSelectionNode(node)) {
                  matches_1.add(node);
                }
              });
              matches_1.add(spread);
              fragmentSelections.forEach(function(selection) {
                matches_1.add(selection);
              });
            }
          }
        });
      }
      return selectionsToResolveCache.get(definitionNode);
    }
    return collectByDefinition(mainDefinition);
  };
  return LocalState2;
}();
var destructiveMethodCounts = new (canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];
  if (typeof original === "function") {
    cache[methodName] = function() {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}
function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}
var QueryInfo = function() {
  function QueryInfo2(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }
    this.queryId = queryId;
    this.listeners = /* @__PURE__ */ new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;
    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }
  QueryInfo2.prototype.init = function(query) {
    var networkStatus = query.networkStatus || NetworkStatus.loading;
    if (this.variables && this.networkStatus !== NetworkStatus.loading && !equal(this.variables, query.variables)) {
      networkStatus = NetworkStatus.setVariables;
    }
    if (!equal(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }
    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus
    });
    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }
    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }
    return this;
  };
  QueryInfo2.prototype.reset = function() {
    cancelNotifyTimeout(this);
    this.dirty = false;
  };
  QueryInfo2.prototype.getDiff = function() {
    var options = this.getDiffOptions();
    if (this.lastDiff && equal(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }
    this.updateWatch(this.variables);
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return { complete: false };
    }
    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };
  QueryInfo2.prototype.updateLastDiff = function(diff, options) {
    this.lastDiff = diff ? {
      diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };
  QueryInfo2.prototype.getDiffOptions = function(variables) {
    var _a2;
    if (variables === void 0) {
      variables = this.variables;
    }
    return {
      query: this.document,
      variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a2 = this.observableQuery) === null || _a2 === void 0 ? void 0 : _a2.options.canonizeResults
    };
  };
  QueryInfo2.prototype.setDiff = function(diff) {
    var _this = this;
    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);
    if (!this.dirty && !equal(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;
      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function() {
          return _this.notify();
        }, 0);
      }
    }
  };
  QueryInfo2.prototype.setObservableQuery = function(oq) {
    var _this = this;
    if (oq === this.observableQuery)
      return;
    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }
    this.observableQuery = oq;
    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function() {
        var diff = _this.getDiff();
        if (diff.fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          reobserveCacheFirst(oq);
        }
      });
    } else {
      delete this.oqListener;
    }
  };
  QueryInfo2.prototype.notify = function() {
    var _this = this;
    cancelNotifyTimeout(this);
    if (this.shouldNotify()) {
      this.listeners.forEach(function(listener) {
        return listener(_this);
      });
    }
    this.dirty = false;
  };
  QueryInfo2.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }
    if (isNetworkRequestInFlight(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;
      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }
    return true;
  };
  QueryInfo2.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo2.prototype.cancel;
      var oq = this.observableQuery;
      if (oq)
        oq.stopPolling();
    }
  };
  QueryInfo2.prototype.cancel = function() {
  };
  QueryInfo2.prototype.updateWatch = function(variables) {
    var _this = this;
    if (variables === void 0) {
      variables = this.variables;
    }
    var oq = this.observableQuery;
    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }
    var watchOptions = __assign(__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function(diff) {
      return _this.setDiff(diff);
    } });
    if (!this.lastWatch || !equal(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };
  QueryInfo2.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  };
  QueryInfo2.prototype.shouldWrite = function(result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && equal(variables, lastWrite.variables) && equal(result.data, lastWrite.result.data));
  };
  QueryInfo2.prototype.markResult = function(result, document2, options, cacheWriteBehavior) {
    var _this = this;
    var merger = new DeepMerger();
    var graphQLErrors = isNonEmptyArray(result.errors) ? result.errors.slice(0) : [];
    this.reset();
    if ("incremental" in result && isNonEmptyArray(result.incremental)) {
      var mergedData = mergeIncrementalData(this.getDiff().result, result);
      result.data = mergedData;
    } else if ("hasNext" in result && result.hasNext) {
      var diff = this.getDiff();
      result.data = merger.merge(diff.result, result.data);
    }
    this.graphQLErrors = graphQLErrors;
    if (options.fetchPolicy === "no-cache") {
      this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function(cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: document2,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }
          var diffOptions = _this.getDiffOptions(options.variables);
          var diff2 = cache.diff(diffOptions);
          if (!_this.stopped && equal(_this.variables, options.variables)) {
            _this.updateWatch(options.variables);
          }
          _this.updateLastDiff(diff2, diffOptions);
          if (diff2.complete) {
            result.data = diff2.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };
  QueryInfo2.prototype.markReady = function() {
    this.networkError = null;
    return this.networkStatus = NetworkStatus.ready;
  };
  QueryInfo2.prototype.markError = function(error) {
    this.networkStatus = NetworkStatus.error;
    this.lastWrite = void 0;
    this.reset();
    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }
    if (error.networkError) {
      this.networkError = error.networkError;
    }
    return error;
  };
  return QueryInfo2;
}();
function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }
  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !graphQLResultHasError(result);
  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }
  return writeWithErrors;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = function() {
  function QueryManager2(_a2) {
    var _this = this;
    var cache = _a2.cache, link = _a2.link, defaultOptions2 = _a2.defaultOptions, documentTransform = _a2.documentTransform, _b = _a2.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a2.onBroadcast, _c = _a2.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a2.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a2.localState, _e = _a2.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? !!cache.assumeImmutableResults : _e;
    this.clientAwareness = {};
    this.queries = /* @__PURE__ */ new Map();
    this.fetchCancelFns = /* @__PURE__ */ new Map();
    this.transformCache = new (canUseWeakMap ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var defaultDocumentTransform = new DocumentTransform(function(document2) {
      return _this.cache.transformDocument(document2);
    }, { cache: false });
    this.cache = cache;
    this.link = link;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new LocalState({ cache });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = assumeImmutableResults;
    this.documentTransform = documentTransform ? defaultDocumentTransform.concat(documentTransform).concat(defaultDocumentTransform) : defaultDocumentTransform;
    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
  }
  QueryManager2.prototype.stop = function() {
    var _this = this;
    this.queries.forEach(function(_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(newInvariantError(25));
  };
  QueryManager2.prototype.cancelPendingFetches = function(error) {
    this.fetchCancelFns.forEach(function(cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };
  QueryManager2.prototype.mutate = function(_a2) {
    var _b, _c;
    var mutation = _a2.mutation, variables = _a2.variables, optimisticResponse = _a2.optimisticResponse, updateQueries = _a2.updateQueries, _d = _a2.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a2.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a2.update, onQueryUpdated = _a2.onQueryUpdated, _f = _a2.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a2.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a2.keepRootFields, context = _a2.context;
    return __awaiter(this, void 0, void 0, function() {
      var mutationId, hasClientExports2, mutationStoreValue, self2;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            invariant$1(mutation, 26);
            invariant$1(fetchPolicy === "network-only" || fetchPolicy === "no-cache", 27);
            mutationId = this.generateMutationId();
            mutation = this.cache.transformForLink(this.transform(mutation));
            hasClientExports2 = this.getDocumentInfo(mutation).hasClientExports;
            variables = this.getVariables(mutation, variables);
            if (!hasClientExports2)
              return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];
          case 1:
            variables = _h.sent();
            _h.label = 2;
          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation,
              variables,
              loading: true,
              error: null
            });
            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId,
                document: mutation,
                variables,
                fetchPolicy,
                errorPolicy,
                context,
                updateQueries,
                update: updateWithProxyFn,
                keepRootFields
              });
            }
            this.broadcastQueries();
            self2 = this;
            return [2, new Promise(function(resolve, reject) {
              return asyncMap(self2.getObservableFromLink(mutation, __assign(__assign({}, context), { optimisticResponse }), variables, false), function(result) {
                if (graphQLResultHasError(result) && errorPolicy === "none") {
                  throw new ApolloError({
                    graphQLErrors: getGraphQLErrorsFromResult(result)
                  });
                }
                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }
                var storeResult = __assign({}, result);
                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }
                if (errorPolicy === "ignore" && graphQLResultHasError(storeResult)) {
                  delete storeResult.errors;
                }
                return self2.markMutationResult({
                  mutationId,
                  result: storeResult,
                  document: mutation,
                  variables,
                  fetchPolicy,
                  errorPolicy,
                  context,
                  update: updateWithProxyFn,
                  updateQueries,
                  awaitRefetchQueries,
                  refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated,
                  keepRootFields
                });
              }).subscribe({
                next: function(storeResult) {
                  self2.broadcastQueries();
                  if (!("hasNext" in storeResult) || storeResult.hasNext === false) {
                    resolve(storeResult);
                  }
                },
                error: function(err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }
                  if (optimisticResponse) {
                    self2.cache.removeOptimistic(mutationId);
                  }
                  self2.broadcastQueries();
                  reject(err instanceof ApolloError ? err : new ApolloError({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };
  QueryManager2.prototype.markMutationResult = function(mutation, cache) {
    var _this = this;
    if (cache === void 0) {
      cache = this.cache;
    }
    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";
    if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
      if (!isExecutionPatchIncrementalResult(result)) {
        cacheWrites.push({
          result: result.data,
          dataId: "ROOT_MUTATION",
          query: mutation.document,
          variables: mutation.variables
        });
      }
      if (isExecutionPatchIncrementalResult(result) && isNonEmptyArray(result.incremental)) {
        var diff = cache.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(mutation.document).asQuery,
          variables: mutation.variables,
          optimistic: false,
          returnPartialData: true
        });
        var mergedData = void 0;
        if (diff.result) {
          mergedData = mergeIncrementalData(diff.result, result);
        }
        if (typeof mergedData !== "undefined") {
          result.data = mergedData;
          cacheWrites.push({
            result: mergedData,
            dataId: "ROOT_MUTATION",
            query: mutation.document,
            variables: mutation.variables
          });
        }
      }
      var updateQueries_1 = mutation.updateQueries;
      if (updateQueries_1) {
        this.queries.forEach(function(_a2, queryId) {
          var observableQuery = _a2.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;
          if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
            return;
          }
          var updater = updateQueries_1[queryName];
          var _b = _this.queries.get(queryId), document2 = _b.document, variables = _b.variables;
          var _c = cache.diff({
            query: document2,
            variables,
            returnPartialData: true,
            optimistic: false
          }), currentQueryResult = _c.result, complete = _c.complete;
          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document2 && getOperationName(document2) || void 0,
              queryVariables: variables
            });
            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: "ROOT_QUERY",
                query: document2,
                variables
              });
            }
          }
        });
      }
    }
    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function(cache2) {
          if (!skipCache) {
            cacheWrites.forEach(function(write) {
              return cache2.write(write);
            });
          }
          var update = mutation.update;
          var isFinalResult = !isExecutionPatchResult(result) || isExecutionPatchIncrementalResult(result) && !result.hasNext;
          if (update) {
            if (!skipCache) {
              var diff2 = cache2.diff({
                id: "ROOT_MUTATION",
                query: _this.getDocumentInfo(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });
              if (diff2.complete) {
                result = __assign(__assign({}, result), { data: diff2.result });
                if ("incremental" in result) {
                  delete result.incremental;
                }
                if ("hasNext" in result) {
                  delete result.hasNext;
                }
              }
            }
            if (isFinalResult) {
              update(cache2, result, {
                context: mutation.context,
                variables: mutation.variables
              });
            }
          }
          if (!skipCache && !mutation.keepRootFields && isFinalResult) {
            cache2.modify({
              id: "ROOT_MUTATION",
              fields: function(value, _a2) {
                var fieldName = _a2.fieldName, DELETE2 = _a2.DELETE;
                return fieldName === "__typename" ? value : DELETE2;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function(result2) {
        return results_1.push(result2);
      });
      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function() {
          return result;
        });
      }
    }
    return Promise.resolve(result);
  };
  QueryManager2.prototype.markMutationOptimistic = function(optimisticResponse, mutation) {
    var _this = this;
    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function(cache) {
      try {
        _this.markMutationResult(__assign(__assign({}, mutation), { result: { data } }), cache);
      } catch (error) {
        globalThis.__DEV__ !== false && invariant$1.error(error);
      }
    }, mutation.mutationId);
  };
  QueryManager2.prototype.fetchQuery = function(queryId, options, networkStatus) {
    return this.fetchConcastWithInfo(queryId, options, networkStatus).concast.promise;
  };
  QueryManager2.prototype.getQueryStore = function() {
    var store = /* @__PURE__ */ Object.create(null);
    this.queries.forEach(function(info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };
  QueryManager2.prototype.resetErrors = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) {
      queryInfo.networkError = void 0;
      queryInfo.graphQLErrors = [];
    }
  };
  QueryManager2.prototype.transform = function(document2) {
    return this.documentTransform.transformDocument(document2);
  };
  QueryManager2.prototype.getDocumentInfo = function(document2) {
    var transformCache = this.transformCache;
    if (!transformCache.has(document2)) {
      var cacheEntry = {
        hasClientExports: hasClientExports(document2),
        hasForcedResolvers: this.localState.shouldForceResolvers(document2),
        hasNonreactiveDirective: hasDirectives(["nonreactive"], document2),
        clientQuery: this.localState.clientQuery(document2),
        serverQuery: removeDirectivesFromDocument([
          { name: "client", remove: true },
          { name: "connection" },
          { name: "nonreactive" }
        ], document2),
        defaultVars: getDefaultValues(getOperationDefinition(document2)),
        asQuery: __assign(__assign({}, document2), { definitions: document2.definitions.map(function(def) {
          if (def.kind === "OperationDefinition" && def.operation !== "query") {
            return __assign(__assign({}, def), { operation: "query" });
          }
          return def;
        }) })
      };
      transformCache.set(document2, cacheEntry);
    }
    return transformCache.get(document2);
  };
  QueryManager2.prototype.getVariables = function(document2, variables) {
    return __assign(__assign({}, this.getDocumentInfo(document2).defaultVars), variables);
  };
  QueryManager2.prototype.watchQuery = function(options) {
    var query = this.transform(options.query);
    options = __assign(__assign({}, options), { variables: this.getVariables(query, options.variables) });
    if (typeof options.notifyOnNetworkStatusChange === "undefined") {
      options.notifyOnNetworkStatusChange = false;
    }
    var queryInfo = new QueryInfo(this);
    var observable2 = new ObservableQuery({
      queryManager: this,
      queryInfo,
      options
    });
    observable2["lastQuery"] = query;
    this.queries.set(observable2.queryId, queryInfo);
    queryInfo.init({
      document: query,
      observableQuery: observable2,
      variables: observable2.variables
    });
    return observable2;
  };
  QueryManager2.prototype.query = function(options, queryId) {
    var _this = this;
    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }
    invariant$1(options.query, 28);
    invariant$1(options.query.kind === "Document", 29);
    invariant$1(!options.returnPartialData, 30);
    invariant$1(!options.pollInterval, 31);
    return this.fetchQuery(queryId, __assign(__assign({}, options), { query: this.transform(options.query) })).finally(function() {
      return _this.stopQuery(queryId);
    });
  };
  QueryManager2.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  };
  QueryManager2.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  };
  QueryManager2.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  };
  QueryManager2.prototype.stopQueryInStore = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryInStoreNoBroadcast = function(queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo)
      queryInfo.stop();
  };
  QueryManager2.prototype.clearStore = function(options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }
    this.cancelPendingFetches(newInvariantError(32));
    this.queries.forEach(function(queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = NetworkStatus.loading;
      } else {
        queryInfo.stop();
      }
    });
    if (this.mutationStore) {
      this.mutationStore = /* @__PURE__ */ Object.create(null);
    }
    return this.cache.reset(options);
  };
  QueryManager2.prototype.getObservableQueries = function(include) {
    var _this = this;
    if (include === void 0) {
      include = "active";
    }
    var queries = /* @__PURE__ */ new Map();
    var queryNamesAndDocs = /* @__PURE__ */ new Map();
    var legacyQueryOptions = /* @__PURE__ */ new Set();
    if (Array.isArray(include)) {
      include.forEach(function(desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (isDocumentNode(desc)) {
          queryNamesAndDocs.set(_this.transform(desc), false);
        } else if (isNonNullObject(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }
    this.queries.forEach(function(_a2, queryId) {
      var oq = _a2.observableQuery, document2 = _a2.document;
      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }
        var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }
        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document2 && queryNamesAndDocs.has(document2)) {
          queries.set(queryId, oq);
          if (queryName)
            queryNamesAndDocs.set(queryName, true);
          if (document2)
            queryNamesAndDocs.set(document2, true);
        }
      }
    });
    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function(options) {
        var queryId = makeUniqueId("legacyOneTimeQuery");
        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });
        var oq = new ObservableQuery({
          queryManager: _this,
          queryInfo,
          options: __assign(__assign({}, options), { fetchPolicy: "network-only" })
        });
        invariant$1(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }
    if (globalThis.__DEV__ !== false && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function(included, nameOrDoc) {
        if (!included) {
          globalThis.__DEV__ !== false && invariant$1.warn(typeof nameOrDoc === "string" ? 33 : 34, nameOrDoc);
        }
      });
    }
    return queries;
  };
  QueryManager2.prototype.reFetchObservableQueries = function(includeStandby) {
    var _this = this;
    if (includeStandby === void 0) {
      includeStandby = false;
    }
    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function(observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();
      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }
      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };
  QueryManager2.prototype.setObservableQuery = function(observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };
  QueryManager2.prototype.startGraphQLSubscription = function(_a2) {
    var _this = this;
    var query = _a2.query, fetchPolicy = _a2.fetchPolicy, _b = _a2.errorPolicy, errorPolicy = _b === void 0 ? "none" : _b, variables = _a2.variables, _c = _a2.context, context = _c === void 0 ? {} : _c;
    query = this.transform(query);
    variables = this.getVariables(query, variables);
    var makeObservable2 = function(variables2) {
      return _this.getObservableFromLink(query, context, variables2).map(function(result) {
        if (fetchPolicy !== "no-cache") {
          if (shouldWriteResult(result, errorPolicy)) {
            _this.cache.write({
              query,
              result: result.data,
              dataId: "ROOT_SUBSCRIPTION",
              variables: variables2
            });
          }
          _this.broadcastQueries();
        }
        var hasErrors = graphQLResultHasError(result);
        var hasProtocolErrors = graphQLResultHasProtocolErrors(result);
        if (hasErrors || hasProtocolErrors) {
          var errors = {};
          if (hasErrors) {
            errors.graphQLErrors = result.errors;
          }
          if (hasProtocolErrors) {
            errors.protocolErrors = result.extensions[PROTOCOL_ERRORS_SYMBOL];
          }
          if (errorPolicy === "none" || hasProtocolErrors) {
            throw new ApolloError(errors);
          }
        }
        if (errorPolicy === "ignore") {
          delete result.errors;
        }
        return result;
      });
    };
    if (this.getDocumentInfo(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable2);
      return new Observable(function(observer) {
        var sub = null;
        observablePromise_1.then(function(observable2) {
          return sub = observable2.subscribe(observer);
        }, observer.error);
        return function() {
          return sub && sub.unsubscribe();
        };
      });
    }
    return makeObservable2(variables);
  };
  QueryManager2.prototype.stopQuery = function(queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };
  QueryManager2.prototype.stopQueryNoBroadcast = function(queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };
  QueryManager2.prototype.removeQuery = function(queryId) {
    this.fetchCancelFns.delete(queryId);
    if (this.queries.has(queryId)) {
      this.getQuery(queryId).stop();
      this.queries.delete(queryId);
    }
  };
  QueryManager2.prototype.broadcastQueries = function() {
    if (this.onBroadcast)
      this.onBroadcast();
    this.queries.forEach(function(info) {
      return info.notify();
    });
  };
  QueryManager2.prototype.getLocalState = function() {
    return this.localState;
  };
  QueryManager2.prototype.getObservableFromLink = function(query, context, variables, deduplication) {
    var _this = this;
    var _a2;
    if (deduplication === void 0) {
      deduplication = (_a2 = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a2 !== void 0 ? _a2 : this.queryDeduplication;
    }
    var observable2;
    var _b = this.getDocumentInfo(query), serverQuery = _b.serverQuery, clientQuery = _b.clientQuery;
    if (serverQuery) {
      var _c = this, inFlightLinkObservables_1 = _c.inFlightLinkObservables, link = _c.link;
      var operation = {
        query: serverQuery,
        variables,
        operationName: getOperationName(serverQuery) || void 0,
        context: this.prepareContext(__assign(__assign({}, context), { forceFetch: !deduplication }))
      };
      context = operation.context;
      if (deduplication) {
        var printedServerQuery_1 = print(serverQuery);
        var byVariables_1 = inFlightLinkObservables_1.get(printedServerQuery_1) || /* @__PURE__ */ new Map();
        inFlightLinkObservables_1.set(printedServerQuery_1, byVariables_1);
        var varJson_1 = canonicalStringify(variables);
        observable2 = byVariables_1.get(varJson_1);
        if (!observable2) {
          var concast = new Concast([
            execute(link, operation)
          ]);
          byVariables_1.set(varJson_1, observable2 = concast);
          concast.beforeNext(function() {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(printedServerQuery_1);
            }
          });
        }
      } else {
        observable2 = new Concast([
          execute(link, operation)
        ]);
      }
    } else {
      observable2 = new Concast([Observable.of({ data: {} })]);
      context = this.prepareContext(context);
    }
    if (clientQuery) {
      observable2 = asyncMap(observable2, function(result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context,
          variables
        });
      });
    }
    return observable2;
  };
  QueryManager2.prototype.getResultsFromLink = function(queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    var linkDocument = this.cache.transformForLink(options.query);
    return asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function(result) {
      var graphQLErrors = getGraphQLErrorsFromResult(result);
      var hasErrors = graphQLErrors.length > 0;
      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new ApolloError({
            graphQLErrors
          }));
        }
        queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
        queryInfo.markReady();
      }
      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: NetworkStatus.ready
      };
      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = graphQLErrors;
        aqr.networkStatus = NetworkStatus.error;
      }
      return aqr;
    }, function(networkError) {
      var error = isApolloError(networkError) ? networkError : new ApolloError({ networkError });
      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }
      throw error;
    });
  };
  QueryManager2.prototype.fetchConcastWithInfo = function(queryId, options, networkStatus, query) {
    var _this = this;
    if (networkStatus === void 0) {
      networkStatus = NetworkStatus.loading;
    }
    if (query === void 0) {
      query = options.query;
    }
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var defaults2 = this.defaultOptions.watchQuery;
    var _a2 = options.fetchPolicy, fetchPolicy = _a2 === void 0 ? defaults2 && defaults2.fetchPolicy || "cache-first" : _a2, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults2 && defaults2.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query,
      variables,
      fetchPolicy,
      errorPolicy,
      returnPartialData,
      notifyOnNetworkStatusChange,
      context
    });
    var fromVariables = function(variables2) {
      normalized.variables = variables2;
      var sourcesWithInfo2 = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
      if (normalized.fetchPolicy !== "standby" && sourcesWithInfo2.sources.length > 0 && queryInfo.observableQuery) {
        queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
      }
      return sourcesWithInfo2;
    };
    var cleanupCancelFn = function() {
      return _this.fetchCancelFns.delete(queryId);
    };
    this.fetchCancelFns.set(queryId, function(reason) {
      cleanupCancelFn();
      setTimeout(function() {
        return concast.cancel(reason);
      });
    });
    var concast, containsDataFromLink;
    if (this.getDocumentInfo(normalized.query).hasClientExports) {
      concast = new Concast(this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables).then(function(sourcesWithInfo2) {
        return sourcesWithInfo2.sources;
      }));
      containsDataFromLink = true;
    } else {
      var sourcesWithInfo = fromVariables(normalized.variables);
      containsDataFromLink = sourcesWithInfo.fromLink;
      concast = new Concast(sourcesWithInfo.sources);
    }
    concast.promise.then(cleanupCancelFn, cleanupCancelFn);
    return {
      concast,
      fromLink: containsDataFromLink
    };
  };
  QueryManager2.prototype.refetchQueries = function(_a2) {
    var _this = this;
    var updateCache = _a2.updateCache, include = _a2.include, _b = _a2.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a2.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a2.onQueryUpdated;
    var includedQueriesById = /* @__PURE__ */ new Map();
    if (include) {
      this.getObservableQueries(include).forEach(function(oq, queryId) {
        includedQueriesById.set(queryId, {
          oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }
    var results = /* @__PURE__ */ new Map();
    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic,
        onWatchUpdated: function(watch, diff, lastDiff) {
          var oq = watch.watcher instanceof QueryInfo && watch.watcher.observableQuery;
          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);
              if (result === true) {
                result = oq.refetch();
              }
              if (result !== false) {
                results.set(oq, result);
              }
              return result;
            }
            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, { oq, lastDiff, diff });
            }
          }
        }
      });
    }
    if (includedQueriesById.size) {
      includedQueriesById.forEach(function(_a3, queryId) {
        var oq = _a3.oq, lastDiff = _a3.lastDiff, diff = _a3.diff;
        var result;
        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }
          result = onQueryUpdated(oq, diff, lastDiff);
        }
        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }
        if (result !== false) {
          results.set(oq, result);
        }
        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }
    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }
    return results;
  };
  QueryManager2.prototype.fetchQueryByPolicy = function(queryInfo, _a2, networkStatus) {
    var _this = this;
    var query = _a2.query, variables = _a2.variables, fetchPolicy = _a2.fetchPolicy, refetchWritePolicy = _a2.refetchWritePolicy, errorPolicy = _a2.errorPolicy, returnPartialData = _a2.returnPartialData, context = _a2.context, notifyOnNetworkStatusChange = _a2.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: query,
      variables,
      networkStatus
    });
    var readCache = function() {
      return queryInfo.getDiff();
    };
    var resultsFromCache = function(diff2, networkStatus2) {
      if (networkStatus2 === void 0) {
        networkStatus2 = queryInfo.networkStatus || NetworkStatus.loading;
      }
      var data = diff2.result;
      if (globalThis.__DEV__ !== false && !returnPartialData && !equal(data, {})) {
        logMissingFieldErrors(diff2.missing);
      }
      var fromData = function(data2) {
        return Observable.of(__assign({ data: data2, loading: isNetworkRequestInFlight(networkStatus2), networkStatus: networkStatus2 }, diff2.complete ? null : { partial: true }));
      };
      if (data && _this.getDocumentInfo(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: { data },
          context,
          variables,
          onlyRunForcedResolvers: true
        }).then(function(resolved) {
          return fromData(resolved.data || void 0);
        });
      }
      if (errorPolicy === "none" && networkStatus2 === NetworkStatus.refetch && Array.isArray(diff2.missing)) {
        return fromData(void 0);
      }
      return fromData(data);
    };
    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === NetworkStatus.refetch && refetchWritePolicy !== "merge" ? 1 : 2;
    var resultsFromLink = function() {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        query,
        variables,
        context,
        fetchPolicy,
        errorPolicy
      });
    };
    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && isNetworkRequestInFlight(networkStatus);
    switch (fetchPolicy) {
      default:
      case "cache-first": {
        var diff = readCache();
        if (diff.complete) {
          return {
            fromLink: false,
            sources: [resultsFromCache(diff, queryInfo.markReady())]
          };
        }
        if (returnPartialData || shouldNotify) {
          return {
            fromLink: true,
            sources: [resultsFromCache(diff), resultsFromLink()]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-and-network": {
        var diff = readCache();
        if (diff.complete || returnPartialData || shouldNotify) {
          return {
            fromLink: true,
            sources: [resultsFromCache(diff), resultsFromLink()]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      }
      case "cache-only":
        return {
          fromLink: false,
          sources: [resultsFromCache(readCache(), queryInfo.markReady())]
        };
      case "network-only":
        if (shouldNotify) {
          return {
            fromLink: true,
            sources: [resultsFromCache(readCache()), resultsFromLink()]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "no-cache":
        if (shouldNotify) {
          return {
            fromLink: true,
            sources: [resultsFromCache(queryInfo.getDiff()), resultsFromLink()]
          };
        }
        return { fromLink: true, sources: [resultsFromLink()] };
      case "standby":
        return { fromLink: false, sources: [] };
    }
  };
  QueryManager2.prototype.getQuery = function(queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new QueryInfo(this, queryId));
    }
    return this.queries.get(queryId);
  };
  QueryManager2.prototype.prepareContext = function(context) {
    if (context === void 0) {
      context = {};
    }
    var newContext = this.localState.prepareContext(context);
    return __assign(__assign({}, newContext), { clientAwareness: this.clientAwareness });
  };
  return QueryManager2;
}();
var hasSuggestedDevtools = false;
var ApolloClient = function() {
  function ApolloClient2(options) {
    var _this = this;
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    if (!options.cache) {
      throw newInvariantError(15);
    }
    var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, documentTransform = options.documentTransform, _a2 = options.ssrMode, ssrMode = _a2 === void 0 ? false : _a2, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== false : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions2 = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? cache.assumeImmutableResults : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
    var link = options.link;
    if (!link) {
      link = uri ? new HttpLink({ uri, credentials, headers }) : ApolloLink.empty();
    }
    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions2 || /* @__PURE__ */ Object.create(null);
    this.typeDefs = typeDefs;
    if (ssrForceFetchDelay) {
      setTimeout(function() {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }
    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    this.version = version;
    this.localState = new LocalState({
      cache,
      client: this,
      resolvers,
      fragmentMatcher
    });
    this.queryManager = new QueryManager({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform,
      queryDeduplication,
      ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults,
      onBroadcast: connectToDevTools ? function() {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
    if (connectToDevTools)
      this.connectToDevTools();
  }
  ApolloClient2.prototype.connectToDevTools = function() {
    if (typeof window === "object") {
      var windowWithDevTools = window;
      var devtoolsSymbol = Symbol.for("apollo.devtools");
      (windowWithDevTools[devtoolsSymbol] = windowWithDevTools[devtoolsSymbol] || []).push(this);
      windowWithDevTools.__APOLLO_CLIENT__ = this;
    }
    if (!hasSuggestedDevtools && globalThis.__DEV__ !== false) {
      hasSuggestedDevtools = true;
      setTimeout(function() {
        if (typeof window !== "undefined" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
          var nav = window.navigator;
          var ua = nav && nav.userAgent;
          var url = void 0;
          if (typeof ua === "string") {
            if (ua.indexOf("Chrome/") > -1) {
              url = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
            } else if (ua.indexOf("Firefox/") > -1) {
              url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
            }
          }
          if (url) {
            globalThis.__DEV__ !== false && invariant$1.log("Download the Apollo DevTools for a better development experience: %s", url);
          }
        }
      }, 1e4);
    }
  };
  Object.defineProperty(ApolloClient2.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: false,
    configurable: true
  });
  ApolloClient2.prototype.stop = function() {
    this.queryManager.stop();
  };
  ApolloClient2.prototype.watchQuery = function(options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }
    if (this.disableNetworkFetches && (options.fetchPolicy === "network-only" || options.fetchPolicy === "cache-and-network")) {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.watchQuery(options);
  };
  ApolloClient2.prototype.query = function(options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }
    invariant$1(options.fetchPolicy !== "cache-and-network", 16);
    if (this.disableNetworkFetches && options.fetchPolicy === "network-only") {
      options = __assign(__assign({}, options), { fetchPolicy: "cache-first" });
    }
    return this.queryManager.query(options);
  };
  ApolloClient2.prototype.mutate = function(options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }
    return this.queryManager.mutate(options);
  };
  ApolloClient2.prototype.subscribe = function(options) {
    return this.queryManager.startGraphQLSubscription(options);
  };
  ApolloClient2.prototype.readQuery = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readQuery(options, optimistic);
  };
  ApolloClient2.prototype.readFragment = function(options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }
    return this.cache.readFragment(options, optimistic);
  };
  ApolloClient2.prototype.writeQuery = function(options) {
    var ref = this.cache.writeQuery(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref;
  };
  ApolloClient2.prototype.writeFragment = function(options) {
    var ref = this.cache.writeFragment(options);
    if (options.broadcast !== false) {
      this.queryManager.broadcastQueries();
    }
    return ref;
  };
  ApolloClient2.prototype.__actionHookForDevTools = function(cb) {
    this.devToolsHookCb = cb;
  };
  ApolloClient2.prototype.__requestRaw = function(payload) {
    return execute(this.link, payload);
  };
  ApolloClient2.prototype.resetStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function() {
      return Promise.all(_this.resetStoreCallbacks.map(function(fn) {
        return fn();
      }));
    }).then(function() {
      return _this.reFetchObservableQueries();
    });
  };
  ApolloClient2.prototype.clearStore = function() {
    var _this = this;
    return Promise.resolve().then(function() {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function() {
      return Promise.all(_this.clearStoreCallbacks.map(function(fn) {
        return fn();
      }));
    });
  };
  ApolloClient2.prototype.onResetStore = function(cb) {
    var _this = this;
    this.resetStoreCallbacks.push(cb);
    return function() {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function(c2) {
        return c2 !== cb;
      });
    };
  };
  ApolloClient2.prototype.onClearStore = function(cb) {
    var _this = this;
    this.clearStoreCallbacks.push(cb);
    return function() {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function(c2) {
        return c2 !== cb;
      });
    };
  };
  ApolloClient2.prototype.reFetchObservableQueries = function(includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };
  ApolloClient2.prototype.refetchQueries = function(options) {
    var map2 = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map2.forEach(function(result2, obsQuery) {
      queries.push(obsQuery);
      results.push(result2);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function(error) {
      globalThis.__DEV__ !== false && invariant$1.debug(17, error);
    });
    return result;
  };
  ApolloClient2.prototype.getObservableQueries = function(include) {
    if (include === void 0) {
      include = "active";
    }
    return this.queryManager.getObservableQueries(include);
  };
  ApolloClient2.prototype.extract = function(optimistic) {
    return this.cache.extract(optimistic);
  };
  ApolloClient2.prototype.restore = function(serializedState) {
    return this.cache.restore(serializedState);
  };
  ApolloClient2.prototype.addResolvers = function(resolvers) {
    this.localState.addResolvers(resolvers);
  };
  ApolloClient2.prototype.setResolvers = function(resolvers) {
    this.localState.setResolvers(resolvers);
  };
  ApolloClient2.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  };
  ApolloClient2.prototype.setLocalStateFragmentMatcher = function(fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };
  ApolloClient2.prototype.setLink = function(newLink) {
    this.link = this.queryManager.link = newLink;
  };
  return ApolloClient2;
}();
var docCache = /* @__PURE__ */ new Map();
var fragmentSourceMap = /* @__PURE__ */ new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
  return string.replace(/[\s,]+/g, " ").trim();
}
function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
  var seenKeys = /* @__PURE__ */ new Set();
  var definitions = [];
  ast.definitions.forEach(function(fragmentDefinition) {
    if (fragmentDefinition.kind === "FragmentDefinition") {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
      var sourceKeySet = fragmentSourceMap.get(fragmentName);
      if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }
      } else if (!sourceKeySet) {
        fragmentSourceMap.set(fragmentName, sourceKeySet = /* @__PURE__ */ new Set());
      }
      sourceKeySet.add(sourceKey);
      if (!seenKeys.has(sourceKey)) {
        seenKeys.add(sourceKey);
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  });
  return __assign(__assign({}, ast), { definitions });
}
function stripLoc(doc) {
  var workSet = new Set(doc.definitions);
  workSet.forEach(function(node) {
    if (node.loc)
      delete node.loc;
    Object.keys(node).forEach(function(key) {
      var value = node[key];
      if (value && typeof value === "object") {
        workSet.add(value);
      }
    });
  });
  var loc = doc.loc;
  if (loc) {
    delete loc.startToken;
    delete loc.endToken;
  }
  return doc;
}
function parseDocument(source) {
  var cacheKey = normalize(source);
  if (!docCache.has(cacheKey)) {
    var parsed = parse(source, {
      experimentalFragmentVariables,
      allowLegacyFragmentVariables: experimentalFragmentVariables
    });
    if (!parsed || parsed.kind !== "Document") {
      throw new Error("Not a valid GraphQL document.");
    }
    docCache.set(cacheKey, stripLoc(processFragments(parsed)));
  }
  return docCache.get(cacheKey);
}
function gql(literals) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  if (typeof literals === "string") {
    literals = [literals];
  }
  var result = literals[0];
  args.forEach(function(arg, i2) {
    if (arg && arg.kind === "Document") {
      result += arg.loc.source.body;
    } else {
      result += arg;
    }
    result += literals[i2 + 1];
  });
  return parseDocument(result);
}
function resetCaches() {
  docCache.clear();
  fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
  printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}
var extras = {
  gql,
  resetCaches,
  disableFragmentWarnings,
  enableExperimentalFragmentVariables,
  disableExperimentalFragmentVariables
};
(function(gql_1) {
  gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var GraphQlOperationType = /* @__PURE__ */ ((GraphQlOperationType2) => {
  GraphQlOperationType2["Query"] = "Query";
  GraphQlOperationType2["Mutation"] = "Mutation";
  GraphQlOperationType2["Subscription"] = "Subscription";
  return GraphQlOperationType2;
})(GraphQlOperationType || {});
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["Trace"] = "Trace";
  LogLevel2["Debug"] = "Debug";
  LogLevel2["Info"] = "Info";
  LogLevel2["Warn"] = "Warn";
  LogLevel2["Error"] = "Error";
  return LogLevel2;
})(LogLevel || {});
const Config = {
  kernel: {
    nodeIdSize: 12
  },
  diagnostics: {
    logLevel: LogLevel.Trace,
    // TODO: import from env
    logLabelMaxLength: 40,
    integerFormat: "",
    floatFormat: "",
    includeLogs: [],
    excludeLogs: []
  },
  api: {
    appSync: {
      region: "us-east-1"
    },
    graphql: {
      endpointUrl: "https://app.clipr.ai/graphql",
      subscriptionsEndpointUrl: {}.VITE_API_GRAPHQL_SUBSCRIPTIONS_ENDPOINT_URL
    },
    apollo: {
      clientName: {}.VITE_API_APOLLO_CLIENT_NAME,
      clientVersion: {}.VITE_API_APOLLO_CLIENT_VERSION,
      enableCache: {}.VITE_API_APOLLO_ENABLE_CACHE === "true"
    }
  }
};
let nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var dayjs_min = { exports: {} };
(function(module2, exports) {
  !function(t2, e2) {
    module2.exports = e2();
  }(commonjsGlobal, function() {
    var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", u3 = "hour", a2 = "day", o3 = "week", c2 = "month", f2 = "quarter", h2 = "year", d2 = "date", l2 = "Invalid Date", $2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t3) {
      var e3 = ["th", "st", "nd", "rd"], n3 = t3 % 100;
      return "[" + t3 + (e3[(n3 - 20) % 10] || e3[n3] || e3[0]) + "]";
    } }, m2 = function(t3, e3, n3) {
      var r3 = String(t3);
      return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
    }, v2 = { s: m2, z: function(t3) {
      var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
      return (e3 <= 0 ? "+" : "-") + m2(r3, 2, "0") + ":" + m2(i3, 2, "0");
    }, m: function t3(e3, n3) {
      if (e3.date() < n3.date())
        return -t3(n3, e3);
      var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, u4 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
      return +(-(r3 + (n3 - i3) / (s3 ? i3 - u4 : u4 - i3)) || 0);
    }, a: function(t3) {
      return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
    }, p: function(t3) {
      return { M: c2, y: h2, w: o3, d: a2, D: d2, h: u3, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t3) {
      return void 0 === t3;
    } }, g2 = "en", D2 = {};
    D2[g2] = M2;
    var p2 = "$isDayjsObject", S2 = function(t3) {
      return t3 instanceof _2 || !(!t3 || !t3[p2]);
    }, w2 = function t3(e3, n3, r3) {
      var i3;
      if (!e3)
        return g2;
      if ("string" == typeof e3) {
        var s3 = e3.toLowerCase();
        D2[s3] && (i3 = s3), n3 && (D2[s3] = n3, i3 = s3);
        var u4 = e3.split("-");
        if (!i3 && u4.length > 1)
          return t3(u4[0]);
      } else {
        var a3 = e3.name;
        D2[a3] = e3, i3 = a3;
      }
      return !r3 && i3 && (g2 = i3), i3 || !r3 && g2;
    }, O = function(t3, e3) {
      if (S2(t3))
        return t3.clone();
      var n3 = "object" == typeof e3 ? e3 : {};
      return n3.date = t3, n3.args = arguments, new _2(n3);
    }, b = v2;
    b.l = w2, b.i = S2, b.w = function(t3, e3) {
      return O(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
    };
    var _2 = function() {
      function M3(t3) {
        this.$L = w2(t3.locale, null, true), this.parse(t3), this.$x = this.$x || t3.x || {}, this[p2] = true;
      }
      var m3 = M3.prototype;
      return m3.parse = function(t3) {
        this.$d = function(t4) {
          var e3 = t4.date, n3 = t4.utc;
          if (null === e3)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(e3))
            return /* @__PURE__ */ new Date();
          if (e3 instanceof Date)
            return new Date(e3);
          if ("string" == typeof e3 && !/Z$/i.test(e3)) {
            var r3 = e3.match($2);
            if (r3) {
              var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
              return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
            }
          }
          return new Date(e3);
        }(t3), this.init();
      }, m3.init = function() {
        var t3 = this.$d;
        this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
      }, m3.$utils = function() {
        return b;
      }, m3.isValid = function() {
        return !(this.$d.toString() === l2);
      }, m3.isSame = function(t3, e3) {
        var n3 = O(t3);
        return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
      }, m3.isAfter = function(t3, e3) {
        return O(t3) < this.startOf(e3);
      }, m3.isBefore = function(t3, e3) {
        return this.endOf(e3) < O(t3);
      }, m3.$g = function(t3, e3, n3) {
        return b.u(t3) ? this[e3] : this.set(n3, t3);
      }, m3.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m3.valueOf = function() {
        return this.$d.getTime();
      }, m3.startOf = function(t3, e3) {
        var n3 = this, r3 = !!b.u(e3) || e3, f3 = b.p(t3), l3 = function(t4, e4) {
          var i3 = b.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
          return r3 ? i3 : i3.endOf(a2);
        }, $3 = function(t4, e4) {
          return b.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
        }, y3 = this.$W, M4 = this.$M, m4 = this.$D, v3 = "set" + (this.$u ? "UTC" : "");
        switch (f3) {
          case h2:
            return r3 ? l3(1, 0) : l3(31, 11);
          case c2:
            return r3 ? l3(1, M4) : l3(0, M4 + 1);
          case o3:
            var g3 = this.$locale().weekStart || 0, D3 = (y3 < g3 ? y3 + 7 : y3) - g3;
            return l3(r3 ? m4 - D3 : m4 + (6 - D3), M4);
          case a2:
          case d2:
            return $3(v3 + "Hours", 0);
          case u3:
            return $3(v3 + "Minutes", 1);
          case s2:
            return $3(v3 + "Seconds", 2);
          case i2:
            return $3(v3 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m3.endOf = function(t3) {
        return this.startOf(t3, false);
      }, m3.$set = function(t3, e3) {
        var n3, o4 = b.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[d2] = f3 + "Date", n3[c2] = f3 + "Month", n3[h2] = f3 + "FullYear", n3[u3] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[o4], $3 = o4 === a2 ? this.$D + (e3 - this.$W) : e3;
        if (o4 === c2 || o4 === h2) {
          var y3 = this.clone().set(d2, 1);
          y3.$d[l3]($3), y3.init(), this.$d = y3.set(d2, Math.min(this.$D, y3.daysInMonth())).$d;
        } else
          l3 && this.$d[l3]($3);
        return this.init(), this;
      }, m3.set = function(t3, e3) {
        return this.clone().$set(t3, e3);
      }, m3.get = function(t3) {
        return this[b.p(t3)]();
      }, m3.add = function(r3, f3) {
        var d3, l3 = this;
        r3 = Number(r3);
        var $3 = b.p(f3), y3 = function(t3) {
          var e3 = O(l3);
          return b.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
        };
        if ($3 === c2)
          return this.set(c2, this.$M + r3);
        if ($3 === h2)
          return this.set(h2, this.$y + r3);
        if ($3 === a2)
          return y3(1);
        if ($3 === o3)
          return y3(7);
        var M4 = (d3 = {}, d3[s2] = e2, d3[u3] = n2, d3[i2] = t2, d3)[$3] || 1, m4 = this.$d.getTime() + r3 * M4;
        return b.w(m4, this);
      }, m3.subtract = function(t3, e3) {
        return this.add(-1 * t3, e3);
      }, m3.format = function(t3) {
        var e3 = this, n3 = this.$locale();
        if (!this.isValid())
          return n3.invalidDate || l2;
        var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = b.z(this), s3 = this.$H, u4 = this.$m, a3 = this.$M, o4 = n3.weekdays, c3 = n3.months, f3 = n3.meridiem, h3 = function(t4, n4, i4, s4) {
          return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
        }, d3 = function(t4) {
          return b.s(s3 % 12 || 12, t4, "0");
        }, $3 = f3 || function(t4, e4, n4) {
          var r4 = t4 < 12 ? "AM" : "PM";
          return n4 ? r4.toLowerCase() : r4;
        };
        return r3.replace(y2, function(t4, r4) {
          return r4 || function(t5) {
            switch (t5) {
              case "YY":
                return String(e3.$y).slice(-2);
              case "YYYY":
                return b.s(e3.$y, 4, "0");
              case "M":
                return a3 + 1;
              case "MM":
                return b.s(a3 + 1, 2, "0");
              case "MMM":
                return h3(n3.monthsShort, a3, c3, 3);
              case "MMMM":
                return h3(c3, a3);
              case "D":
                return e3.$D;
              case "DD":
                return b.s(e3.$D, 2, "0");
              case "d":
                return String(e3.$W);
              case "dd":
                return h3(n3.weekdaysMin, e3.$W, o4, 2);
              case "ddd":
                return h3(n3.weekdaysShort, e3.$W, o4, 3);
              case "dddd":
                return o4[e3.$W];
              case "H":
                return String(s3);
              case "HH":
                return b.s(s3, 2, "0");
              case "h":
                return d3(1);
              case "hh":
                return d3(2);
              case "a":
                return $3(s3, u4, true);
              case "A":
                return $3(s3, u4, false);
              case "m":
                return String(u4);
              case "mm":
                return b.s(u4, 2, "0");
              case "s":
                return String(e3.$s);
              case "ss":
                return b.s(e3.$s, 2, "0");
              case "SSS":
                return b.s(e3.$ms, 3, "0");
              case "Z":
                return i3;
            }
            return null;
          }(t4) || i3.replace(":", "");
        });
      }, m3.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m3.diff = function(r3, d3, l3) {
        var $3, y3 = this, M4 = b.p(d3), m4 = O(r3), v3 = (m4.utcOffset() - this.utcOffset()) * e2, g3 = this - m4, D3 = function() {
          return b.m(y3, m4);
        };
        switch (M4) {
          case h2:
            $3 = D3() / 12;
            break;
          case c2:
            $3 = D3();
            break;
          case f2:
            $3 = D3() / 3;
            break;
          case o3:
            $3 = (g3 - v3) / 6048e5;
            break;
          case a2:
            $3 = (g3 - v3) / 864e5;
            break;
          case u3:
            $3 = g3 / n2;
            break;
          case s2:
            $3 = g3 / e2;
            break;
          case i2:
            $3 = g3 / t2;
            break;
          default:
            $3 = g3;
        }
        return l3 ? $3 : b.a($3);
      }, m3.daysInMonth = function() {
        return this.endOf(c2).$D;
      }, m3.$locale = function() {
        return D2[this.$L];
      }, m3.locale = function(t3, e3) {
        if (!t3)
          return this.$L;
        var n3 = this.clone(), r3 = w2(t3, e3, true);
        return r3 && (n3.$L = r3), n3;
      }, m3.clone = function() {
        return b.w(this.$d, this);
      }, m3.toDate = function() {
        return new Date(this.valueOf());
      }, m3.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m3.toISOString = function() {
        return this.$d.toISOString();
      }, m3.toString = function() {
        return this.$d.toUTCString();
      }, M3;
    }(), k2 = _2.prototype;
    return O.prototype = k2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", u3], ["$W", a2], ["$M", c2], ["$y", h2], ["$D", d2]].forEach(function(t3) {
      k2[t3[1]] = function(e3) {
        return this.$g(e3, t3[0], t3[1]);
      };
    }), O.extend = function(t3, e3) {
      return t3.$i || (t3(e3, _2, O), t3.$i = true), O;
    }, O.locale = w2, O.isDayjs = S2, O.unix = function(t3) {
      return O(1e3 * t3);
    }, O.en = D2[g2], O.Ls = D2, O.p = {}, O;
  });
})(dayjs_min);
let Error$1 = class Error2 {
  constructor(code, props = {}) {
    var _a2;
    this.lookup = null;
    this.source = null;
    this.childErrors = [];
    this.innerError = null;
    this.partialValue = null;
    const info = ((_a2 = this.lookup) == null ? void 0 : _a2[code]) ?? null;
    this.code = code;
    this.message = (info == null ? void 0 : info.message) ?? `An error has occurred.`;
    this.displayHeading = (info == null ? void 0 : info.displayHeading) ?? null;
    this.displayMessage = (info == null ? void 0 : info.displayMessage) ?? this.message;
    this.source = props.source ?? null;
    this.innerError = props.innerError ?? null;
    this.partialValue = props.partialValue ?? null;
  }
};
function isNullOrUndefined(arg) {
  return arg === null || arg === void 0;
}
function isDefined(arg) {
  return !isNullOrUndefined(arg);
}
function isDefinedObject(arg) {
  return typeof arg === "object" && arg !== null;
}
var balancedMatch = balanced$1;
function balanced$1(a2, b, str) {
  if (a2 instanceof RegExp)
    a2 = maybeMatch(a2, str);
  if (b instanceof RegExp)
    b = maybeMatch(b, str);
  var r2 = range(a2, b, str);
  return r2 && {
    start: r2[0],
    end: r2[1],
    pre: str.slice(0, r2[0]),
    body: str.slice(r2[0] + a2.length, r2[1]),
    post: str.slice(r2[1] + b.length)
  };
}
function maybeMatch(reg, str) {
  var m2 = str.match(reg);
  return m2 ? m2[0] : null;
}
balanced$1.range = range;
function range(a2, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a2);
  var bi = str.indexOf(b, ai + 1);
  var i2 = ai;
  if (ai >= 0 && bi > 0) {
    if (a2 === b) {
      return [ai, bi];
    }
    begs = [];
    left = str.length;
    while (i2 >= 0 && !result) {
      if (i2 == ai) {
        begs.push(i2);
        ai = str.indexOf(a2, i2 + 1);
      } else if (begs.length == 1) {
        result = [begs.pop(), bi];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }
        bi = str.indexOf(b, i2 + 1);
      }
      i2 = ai < bi && ai >= 0 ? ai : bi;
    }
    if (begs.length) {
      result = [left, right];
    }
  }
  return result;
}
var balanced = balancedMatch;
var braceExpansion = expandTop;
var escSlash = "\0SLASH" + Math.random() + "\0";
var escOpen = "\0OPEN" + Math.random() + "\0";
var escClose = "\0CLOSE" + Math.random() + "\0";
var escComma = "\0COMMA" + Math.random() + "\0";
var escPeriod = "\0PERIOD" + Math.random() + "\0";
function numeric(str) {
  return parseInt(str, 10) == str ? parseInt(str, 10) : str.charCodeAt(0);
}
function escapeBraces(str) {
  return str.split("\\\\").join(escSlash).split("\\{").join(escOpen).split("\\}").join(escClose).split("\\,").join(escComma).split("\\.").join(escPeriod);
}
function unescapeBraces(str) {
  return str.split(escSlash).join("\\").split(escOpen).join("{").split(escClose).join("}").split(escComma).join(",").split(escPeriod).join(".");
}
function parseCommaParts(str) {
  if (!str)
    return [""];
  var parts = [];
  var m2 = balanced("{", "}", str);
  if (!m2)
    return str.split(",");
  var pre = m2.pre;
  var body = m2.body;
  var post = m2.post;
  var p2 = pre.split(",");
  p2[p2.length - 1] += "{" + body + "}";
  var postParts = parseCommaParts(post);
  if (post.length) {
    p2[p2.length - 1] += postParts.shift();
    p2.push.apply(p2, postParts);
  }
  parts.push.apply(parts, p2);
  return parts;
}
function expandTop(str) {
  if (!str)
    return [];
  if (str.substr(0, 2) === "{}") {
    str = "\\{\\}" + str.substr(2);
  }
  return expand(escapeBraces(str), true).map(unescapeBraces);
}
function embrace(str) {
  return "{" + str + "}";
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}
function lte(i2, y2) {
  return i2 <= y2;
}
function gte(i2, y2) {
  return i2 >= y2;
}
function expand(str, isTop) {
  var expansions = [];
  var m2 = balanced("{", "}", str);
  if (!m2)
    return [str];
  var pre = m2.pre;
  var post = m2.post.length ? expand(m2.post, false) : [""];
  if (/\$$/.test(m2.pre)) {
    for (var k2 = 0; k2 < post.length; k2++) {
      var expansion = pre + "{" + m2.body + "}" + post[k2];
      expansions.push(expansion);
    }
  } else {
    var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m2.body);
    var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m2.body);
    var isSequence = isNumericSequence || isAlphaSequence;
    var isOptions = m2.body.indexOf(",") >= 0;
    if (!isSequence && !isOptions) {
      if (m2.post.match(/,.*\}/)) {
        str = m2.pre + "{" + m2.body + escClose + m2.post;
        return expand(str);
      }
      return [str];
    }
    var n2;
    if (isSequence) {
      n2 = m2.body.split(/\.\./);
    } else {
      n2 = parseCommaParts(m2.body);
      if (n2.length === 1) {
        n2 = expand(n2[0], false).map(embrace);
        if (n2.length === 1) {
          return post.map(function(p2) {
            return m2.pre + n2[0] + p2;
          });
        }
      }
    }
    var N2;
    if (isSequence) {
      var x2 = numeric(n2[0]);
      var y2 = numeric(n2[1]);
      var width = Math.max(n2[0].length, n2[1].length);
      var incr = n2.length == 3 ? Math.abs(numeric(n2[2])) : 1;
      var test = lte;
      var reverse2 = y2 < x2;
      if (reverse2) {
        incr *= -1;
        test = gte;
      }
      var pad = n2.some(isPadded);
      N2 = [];
      for (var i2 = x2; test(i2, y2); i2 += incr) {
        var c2;
        if (isAlphaSequence) {
          c2 = String.fromCharCode(i2);
          if (c2 === "\\")
            c2 = "";
        } else {
          c2 = String(i2);
          if (pad) {
            var need = width - c2.length;
            if (need > 0) {
              var z2 = new Array(need + 1).join("0");
              if (i2 < 0)
                c2 = "-" + z2 + c2.slice(1);
              else
                c2 = z2 + c2;
            }
          }
        }
        N2.push(c2);
      }
    } else {
      N2 = [];
      for (var j = 0; j < n2.length; j++) {
        N2.push.apply(N2, expand(n2[j], false));
      }
    }
    for (var j = 0; j < N2.length; j++) {
      for (var k2 = 0; k2 < post.length; k2++) {
        var expansion = pre + N2[j] + post[k2];
        if (!isTop || isSequence || expansion)
          expansions.push(expansion);
      }
    }
  }
  return expansions;
}
const expand$1 = /* @__PURE__ */ getDefaultExportFromCjs(braceExpansion);
const MAX_PATTERN_LENGTH = 1024 * 64;
const assertValidPattern = (pattern) => {
  if (typeof pattern !== "string") {
    throw new TypeError("invalid pattern");
  }
  if (pattern.length > MAX_PATTERN_LENGTH) {
    throw new TypeError("pattern is too long");
  }
};
const posixClasses = {
  "[:alnum:]": ["\\p{L}\\p{Nl}\\p{Nd}", true],
  "[:alpha:]": ["\\p{L}\\p{Nl}", true],
  "[:ascii:]": ["\\x00-\\x7f", false],
  "[:blank:]": ["\\p{Zs}\\t", true],
  "[:cntrl:]": ["\\p{Cc}", true],
  "[:digit:]": ["\\p{Nd}", true],
  "[:graph:]": ["\\p{Z}\\p{C}", true, true],
  "[:lower:]": ["\\p{Ll}", true],
  "[:print:]": ["\\p{C}", true],
  "[:punct:]": ["\\p{P}", true],
  "[:space:]": ["\\p{Z}\\t\\r\\n\\v\\f", true],
  "[:upper:]": ["\\p{Lu}", true],
  "[:word:]": ["\\p{L}\\p{Nl}\\p{Nd}\\p{Pc}", true],
  "[:xdigit:]": ["A-Fa-f0-9", false]
};
const braceEscape = (s2) => s2.replace(/[[\]\\-]/g, "\\$&");
const regexpEscape = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
const rangesToString = (ranges) => ranges.join("");
const parseClass = (glob, position) => {
  const pos = position;
  if (glob.charAt(pos) !== "[") {
    throw new Error("not in a brace expression");
  }
  const ranges = [];
  const negs = [];
  let i2 = pos + 1;
  let sawStart = false;
  let uflag = false;
  let escaping = false;
  let negate = false;
  let endPos = pos;
  let rangeStart = "";
  WHILE:
    while (i2 < glob.length) {
      const c2 = glob.charAt(i2);
      if ((c2 === "!" || c2 === "^") && i2 === pos + 1) {
        negate = true;
        i2++;
        continue;
      }
      if (c2 === "]" && sawStart && !escaping) {
        endPos = i2 + 1;
        break;
      }
      sawStart = true;
      if (c2 === "\\") {
        if (!escaping) {
          escaping = true;
          i2++;
          continue;
        }
      }
      if (c2 === "[" && !escaping) {
        for (const [cls, [unip, u3, neg]] of Object.entries(posixClasses)) {
          if (glob.startsWith(cls, i2)) {
            if (rangeStart) {
              return ["$.", false, glob.length - pos, true];
            }
            i2 += cls.length;
            if (neg)
              negs.push(unip);
            else
              ranges.push(unip);
            uflag = uflag || u3;
            continue WHILE;
          }
        }
      }
      escaping = false;
      if (rangeStart) {
        if (c2 > rangeStart) {
          ranges.push(braceEscape(rangeStart) + "-" + braceEscape(c2));
        } else if (c2 === rangeStart) {
          ranges.push(braceEscape(c2));
        }
        rangeStart = "";
        i2++;
        continue;
      }
      if (glob.startsWith("-]", i2 + 1)) {
        ranges.push(braceEscape(c2 + "-"));
        i2 += 2;
        continue;
      }
      if (glob.startsWith("-", i2 + 1)) {
        rangeStart = c2;
        i2 += 2;
        continue;
      }
      ranges.push(braceEscape(c2));
      i2++;
    }
  if (endPos < i2) {
    return ["", false, 0, false];
  }
  if (!ranges.length && !negs.length) {
    return ["$.", false, glob.length - pos, true];
  }
  if (negs.length === 0 && ranges.length === 1 && /^\\?.$/.test(ranges[0]) && !negate) {
    const r2 = ranges[0].length === 2 ? ranges[0].slice(-1) : ranges[0];
    return [regexpEscape(r2), false, endPos - pos, false];
  }
  const sranges = "[" + (negate ? "^" : "") + rangesToString(ranges) + "]";
  const snegs = "[" + (negate ? "" : "^") + rangesToString(negs) + "]";
  const comb = ranges.length && negs.length ? "(" + sranges + "|" + snegs + ")" : ranges.length ? sranges : snegs;
  return [comb, uflag, endPos - pos, true];
};
const unescape = (s2, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s2.replace(/\[([^\/\\])\]/g, "$1") : s2.replace(/((?!\\).|^)\[([^\/\\])\]/g, "$1$2").replace(/\\([^\/])/g, "$1");
};
const types = /* @__PURE__ */ new Set(["!", "?", "+", "*", "@"]);
const isExtglobType = (c2) => types.has(c2);
const startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
const startNoDot = "(?!\\.)";
const addPatternStart = /* @__PURE__ */ new Set(["[", "."]);
const justDots = /* @__PURE__ */ new Set(["..", "."]);
const reSpecials = new Set("().*{}+?[]^$\\!");
const regExpEscape$1 = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
const qmark$1 = "[^/]";
const star$1 = qmark$1 + "*?";
const starNoEmpty = qmark$1 + "+?";
const _AST = class _AST {
  constructor(type, parent, options = {}) {
    __privateAdd(this, _fillNegs);
    __privateAdd(this, _partsToRegExp);
    __publicField(this, "type");
    __privateAdd(this, _root, void 0);
    __privateAdd(this, _hasMagic, void 0);
    __privateAdd(this, _uflag, false);
    __privateAdd(this, _parts, []);
    __privateAdd(this, _parent, void 0);
    __privateAdd(this, _parentIndex, void 0);
    __privateAdd(this, _negs, void 0);
    __privateAdd(this, _filledNegs, false);
    __privateAdd(this, _options, void 0);
    __privateAdd(this, _toString, void 0);
    // set to true if it's an extglob with no children
    // (which really means one child of '')
    __privateAdd(this, _emptyExt, false);
    this.type = type;
    if (type)
      __privateSet(this, _hasMagic, true);
    __privateSet(this, _parent, parent);
    __privateSet(this, _root, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _root) : this);
    __privateSet(this, _options, __privateGet(this, _root) === this ? options : __privateGet(__privateGet(this, _root), _options));
    __privateSet(this, _negs, __privateGet(this, _root) === this ? [] : __privateGet(__privateGet(this, _root), _negs));
    if (type === "!" && !__privateGet(__privateGet(this, _root), _filledNegs))
      __privateGet(this, _negs).push(this);
    __privateSet(this, _parentIndex, __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0);
  }
  get hasMagic() {
    if (__privateGet(this, _hasMagic) !== void 0)
      return __privateGet(this, _hasMagic);
    for (const p2 of __privateGet(this, _parts)) {
      if (typeof p2 === "string")
        continue;
      if (p2.type || p2.hasMagic)
        return __privateSet(this, _hasMagic, true);
    }
    return __privateGet(this, _hasMagic);
  }
  // reconstructs the pattern
  toString() {
    if (__privateGet(this, _toString) !== void 0)
      return __privateGet(this, _toString);
    if (!this.type) {
      return __privateSet(this, _toString, __privateGet(this, _parts).map((p2) => String(p2)).join(""));
    } else {
      return __privateSet(this, _toString, this.type + "(" + __privateGet(this, _parts).map((p2) => String(p2)).join("|") + ")");
    }
  }
  push(...parts) {
    for (const p2 of parts) {
      if (p2 === "")
        continue;
      if (typeof p2 !== "string" && !(p2 instanceof _AST && __privateGet(p2, _parent) === this)) {
        throw new Error("invalid part: " + p2);
      }
      __privateGet(this, _parts).push(p2);
    }
  }
  toJSON() {
    var _a2;
    const ret = this.type === null ? __privateGet(this, _parts).slice().map((p2) => typeof p2 === "string" ? p2 : p2.toJSON()) : [this.type, ...__privateGet(this, _parts).map((p2) => p2.toJSON())];
    if (this.isStart() && !this.type)
      ret.unshift([]);
    if (this.isEnd() && (this === __privateGet(this, _root) || __privateGet(__privateGet(this, _root), _filledNegs) && ((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === "!")) {
      ret.push({});
    }
    return ret;
  }
  isStart() {
    var _a2;
    if (__privateGet(this, _root) === this)
      return true;
    if (!((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.isStart()))
      return false;
    if (__privateGet(this, _parentIndex) === 0)
      return true;
    const p2 = __privateGet(this, _parent);
    for (let i2 = 0; i2 < __privateGet(this, _parentIndex); i2++) {
      const pp = __privateGet(p2, _parts)[i2];
      if (!(pp instanceof _AST && pp.type === "!")) {
        return false;
      }
    }
    return true;
  }
  isEnd() {
    var _a2, _b, _c;
    if (__privateGet(this, _root) === this)
      return true;
    if (((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === "!")
      return true;
    if (!((_b = __privateGet(this, _parent)) == null ? void 0 : _b.isEnd()))
      return false;
    if (!this.type)
      return (_c = __privateGet(this, _parent)) == null ? void 0 : _c.isEnd();
    const pl = __privateGet(this, _parent) ? __privateGet(__privateGet(this, _parent), _parts).length : 0;
    return __privateGet(this, _parentIndex) === pl - 1;
  }
  copyIn(part) {
    if (typeof part === "string")
      this.push(part);
    else
      this.push(part.clone(this));
  }
  clone(parent) {
    const c2 = new _AST(this.type, parent);
    for (const p2 of __privateGet(this, _parts)) {
      c2.copyIn(p2);
    }
    return c2;
  }
  static fromGlob(pattern, options = {}) {
    var _a2;
    const ast = new _AST(null, void 0, options);
    __privateMethod(_a2 = _AST, _parseAST, parseAST_fn).call(_a2, pattern, ast, 0, options);
    return ast;
  }
  // returns the regular expression if there's magic, or the unescaped
  // string if not.
  toMMPattern() {
    if (this !== __privateGet(this, _root))
      return __privateGet(this, _root).toMMPattern();
    const glob = this.toString();
    const [re, body, hasMagic, uflag] = this.toRegExpSource();
    const anyMagic = hasMagic || __privateGet(this, _hasMagic) || __privateGet(this, _options).nocase && !__privateGet(this, _options).nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
    if (!anyMagic) {
      return body;
    }
    const flags = (__privateGet(this, _options).nocase ? "i" : "") + (uflag ? "u" : "");
    return Object.assign(new RegExp(`^${re}$`, flags), {
      _src: re,
      _glob: glob
    });
  }
  // returns the string match, the regexp source, whether there's magic
  // in the regexp (so a regular expression is required) and whether or
  // not the uflag is needed for the regular expression (for posix classes)
  // TODO: instead of injecting the start/end at this point, just return
  // the BODY of the regexp, along with the start/end portions suitable
  // for binding the start/end in either a joined full-path makeRe context
  // (where we bind to (^|/), or a standalone matchPart context (where
  // we bind to ^, and not /).  Otherwise slashes get duped!
  //
  // In part-matching mode, the start is:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: ^(?!\.\.?$)
  // - if dots allowed or not possible: ^
  // - if dots possible and not allowed: ^(?!\.)
  // end is:
  // - if not isEnd(): nothing
  // - else: $
  //
  // In full-path matching mode, we put the slash at the START of the
  // pattern, so start is:
  // - if first pattern: same as part-matching mode
  // - if not isStart(): nothing
  // - if traversal possible, but not allowed: /(?!\.\.?(?:$|/))
  // - if dots allowed or not possible: /
  // - if dots possible and not allowed: /(?!\.)
  // end is:
  // - if last pattern, same as part-matching mode
  // - else nothing
  //
  // Always put the (?:$|/) on negated tails, though, because that has to be
  // there to bind the end of the negated pattern portion, and it's easier to
  // just stick it in now rather than try to inject it later in the middle of
  // the pattern.
  //
  // We can just always return the same end, and leave it up to the caller
  // to know whether it's going to be used joined or in parts.
  // And, if the start is adjusted slightly, can do the same there:
  // - if not isStart: nothing
  // - if traversal possible, but not allowed: (?:/|^)(?!\.\.?$)
  // - if dots allowed or not possible: (?:/|^)
  // - if dots possible and not allowed: (?:/|^)(?!\.)
  //
  // But it's better to have a simpler binding without a conditional, for
  // performance, so probably better to return both start options.
  //
  // Then the caller just ignores the end if it's not the first pattern,
  // and the start always gets applied.
  //
  // But that's always going to be $ if it's the ending pattern, or nothing,
  // so the caller can just attach $ at the end of the pattern when building.
  //
  // So the todo is:
  // - better detect what kind of start is needed
  // - return both flavors of starting pattern
  // - attach $ at the end of the pattern when creating the actual RegExp
  //
  // Ah, but wait, no, that all only applies to the root when the first pattern
  // is not an extglob. If the first pattern IS an extglob, then we need all
  // that dot prevention biz to live in the extglob portions, because eg
  // +(*|.x*) can match .xy but not .yx.
  //
  // So, return the two flavors if it's #root and the first child is not an
  // AST, otherwise leave it to the child AST to handle it, and there,
  // use the (?:^|/) style of start binding.
  //
  // Even simplified further:
  // - Since the start for a join is eg /(?!\.) and the start for a part
  // is ^(?!\.), we can just prepend (?!\.) to the pattern (either root
  // or start or whatever) and prepend ^ or / at the Regexp construction.
  toRegExpSource(allowDot) {
    var _a2;
    const dot = allowDot ?? !!__privateGet(this, _options).dot;
    if (__privateGet(this, _root) === this)
      __privateMethod(this, _fillNegs, fillNegs_fn).call(this);
    if (!this.type) {
      const noEmpty = this.isStart() && this.isEnd();
      const src = __privateGet(this, _parts).map((p2) => {
        var _a3;
        const [re, _2, hasMagic, uflag] = typeof p2 === "string" ? __privateMethod(_a3 = _AST, _parseGlob, parseGlob_fn).call(_a3, p2, __privateGet(this, _hasMagic), noEmpty) : p2.toRegExpSource(allowDot);
        __privateSet(this, _hasMagic, __privateGet(this, _hasMagic) || hasMagic);
        __privateSet(this, _uflag, __privateGet(this, _uflag) || uflag);
        return re;
      }).join("");
      let start2 = "";
      if (this.isStart()) {
        if (typeof __privateGet(this, _parts)[0] === "string") {
          const dotTravAllowed = __privateGet(this, _parts).length === 1 && justDots.has(__privateGet(this, _parts)[0]);
          if (!dotTravAllowed) {
            const aps = addPatternStart;
            const needNoTrav = (
              // dots are allowed, and the pattern starts with [ or .
              dot && aps.has(src.charAt(0)) || // the pattern starts with \., and then [ or .
              src.startsWith("\\.") && aps.has(src.charAt(2)) || // the pattern starts with \.\., and then [ or .
              src.startsWith("\\.\\.") && aps.has(src.charAt(4))
            );
            const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
            start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
          }
        }
      }
      let end = "";
      if (this.isEnd() && __privateGet(__privateGet(this, _root), _filledNegs) && ((_a2 = __privateGet(this, _parent)) == null ? void 0 : _a2.type) === "!") {
        end = "(?:$|\\/)";
      }
      const final2 = start2 + src + end;
      return [
        final2,
        unescape(src),
        __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
        __privateGet(this, _uflag)
      ];
    }
    const repeated = this.type === "*" || this.type === "+";
    const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
    let body = __privateMethod(this, _partsToRegExp, partsToRegExp_fn).call(this, dot);
    if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
      const s2 = this.toString();
      __privateSet(this, _parts, [s2]);
      this.type = null;
      __privateSet(this, _hasMagic, void 0);
      return [s2, unescape(this.toString()), false, false];
    }
    let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : __privateMethod(this, _partsToRegExp, partsToRegExp_fn).call(this, true);
    if (bodyDotAllowed === body) {
      bodyDotAllowed = "";
    }
    if (bodyDotAllowed) {
      body = `(?:${body})(?:${bodyDotAllowed})*?`;
    }
    let final = "";
    if (this.type === "!" && __privateGet(this, _emptyExt)) {
      final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
    } else {
      const close = this.type === "!" ? (
        // !() must match something,but !(x) can match ''
        "))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star$1 + ")"
      ) : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
      final = start + body + close;
    }
    return [
      final,
      unescape(body),
      __privateSet(this, _hasMagic, !!__privateGet(this, _hasMagic)),
      __privateGet(this, _uflag)
    ];
  }
};
_root = new WeakMap();
_hasMagic = new WeakMap();
_uflag = new WeakMap();
_parts = new WeakMap();
_parent = new WeakMap();
_parentIndex = new WeakMap();
_negs = new WeakMap();
_filledNegs = new WeakMap();
_options = new WeakMap();
_toString = new WeakMap();
_emptyExt = new WeakMap();
_fillNegs = new WeakSet();
fillNegs_fn = function() {
  if (this !== __privateGet(this, _root))
    throw new Error("should only call on root");
  if (__privateGet(this, _filledNegs))
    return this;
  this.toString();
  __privateSet(this, _filledNegs, true);
  let n2;
  while (n2 = __privateGet(this, _negs).pop()) {
    if (n2.type !== "!")
      continue;
    let p2 = n2;
    let pp = __privateGet(p2, _parent);
    while (pp) {
      for (let i2 = __privateGet(p2, _parentIndex) + 1; !pp.type && i2 < __privateGet(pp, _parts).length; i2++) {
        for (const part of __privateGet(n2, _parts)) {
          if (typeof part === "string") {
            throw new Error("string part in extglob AST??");
          }
          part.copyIn(__privateGet(pp, _parts)[i2]);
        }
      }
      p2 = pp;
      pp = __privateGet(p2, _parent);
    }
  }
  return this;
};
_parseAST = new WeakSet();
parseAST_fn = function(str, ast, pos, opt) {
  var _a2, _b;
  let escaping = false;
  let inBrace = false;
  let braceStart = -1;
  let braceNeg = false;
  if (ast.type === null) {
    let i3 = pos;
    let acc2 = "";
    while (i3 < str.length) {
      const c2 = str.charAt(i3++);
      if (escaping || c2 === "\\") {
        escaping = !escaping;
        acc2 += c2;
        continue;
      }
      if (inBrace) {
        if (i3 === braceStart + 1) {
          if (c2 === "^" || c2 === "!") {
            braceNeg = true;
          }
        } else if (c2 === "]" && !(i3 === braceStart + 2 && braceNeg)) {
          inBrace = false;
        }
        acc2 += c2;
        continue;
      } else if (c2 === "[") {
        inBrace = true;
        braceStart = i3;
        braceNeg = false;
        acc2 += c2;
        continue;
      }
      if (!opt.noext && isExtglobType(c2) && str.charAt(i3) === "(") {
        ast.push(acc2);
        acc2 = "";
        const ext2 = new _AST(c2, ast);
        i3 = __privateMethod(_a2 = _AST, _parseAST, parseAST_fn).call(_a2, str, ext2, i3, opt);
        ast.push(ext2);
        continue;
      }
      acc2 += c2;
    }
    ast.push(acc2);
    return i3;
  }
  let i2 = pos + 1;
  let part = new _AST(null, ast);
  const parts = [];
  let acc = "";
  while (i2 < str.length) {
    const c2 = str.charAt(i2++);
    if (escaping || c2 === "\\") {
      escaping = !escaping;
      acc += c2;
      continue;
    }
    if (inBrace) {
      if (i2 === braceStart + 1) {
        if (c2 === "^" || c2 === "!") {
          braceNeg = true;
        }
      } else if (c2 === "]" && !(i2 === braceStart + 2 && braceNeg)) {
        inBrace = false;
      }
      acc += c2;
      continue;
    } else if (c2 === "[") {
      inBrace = true;
      braceStart = i2;
      braceNeg = false;
      acc += c2;
      continue;
    }
    if (isExtglobType(c2) && str.charAt(i2) === "(") {
      part.push(acc);
      acc = "";
      const ext2 = new _AST(c2, part);
      part.push(ext2);
      i2 = __privateMethod(_b = _AST, _parseAST, parseAST_fn).call(_b, str, ext2, i2, opt);
      continue;
    }
    if (c2 === "|") {
      part.push(acc);
      acc = "";
      parts.push(part);
      part = new _AST(null, ast);
      continue;
    }
    if (c2 === ")") {
      if (acc === "" && __privateGet(ast, _parts).length === 0) {
        __privateSet(ast, _emptyExt, true);
      }
      part.push(acc);
      acc = "";
      ast.push(...parts, part);
      return i2;
    }
    acc += c2;
  }
  ast.type = null;
  __privateSet(ast, _hasMagic, void 0);
  __privateSet(ast, _parts, [str.substring(pos - 1)]);
  return i2;
};
_partsToRegExp = new WeakSet();
partsToRegExp_fn = function(dot) {
  return __privateGet(this, _parts).map((p2) => {
    if (typeof p2 === "string") {
      throw new Error("string type in extglob ast??");
    }
    const [re, _2, _hasMagic2, uflag] = p2.toRegExpSource(dot);
    __privateSet(this, _uflag, __privateGet(this, _uflag) || uflag);
    return re;
  }).filter((p2) => !(this.isStart() && this.isEnd()) || !!p2).join("|");
};
_parseGlob = new WeakSet();
parseGlob_fn = function(glob, hasMagic, noEmpty = false) {
  let escaping = false;
  let re = "";
  let uflag = false;
  for (let i2 = 0; i2 < glob.length; i2++) {
    const c2 = glob.charAt(i2);
    if (escaping) {
      escaping = false;
      re += (reSpecials.has(c2) ? "\\" : "") + c2;
      continue;
    }
    if (c2 === "\\") {
      if (i2 === glob.length - 1) {
        re += "\\\\";
      } else {
        escaping = true;
      }
      continue;
    }
    if (c2 === "[") {
      const [src, needUflag, consumed, magic] = parseClass(glob, i2);
      if (consumed) {
        re += src;
        uflag = uflag || needUflag;
        i2 += consumed - 1;
        hasMagic = hasMagic || magic;
        continue;
      }
    }
    if (c2 === "*") {
      if (noEmpty && glob === "*")
        re += starNoEmpty;
      else
        re += star$1;
      hasMagic = true;
      continue;
    }
    if (c2 === "?") {
      re += qmark$1;
      hasMagic = true;
      continue;
    }
    re += regExpEscape$1(c2);
  }
  return [re, unescape(glob), !!hasMagic, uflag];
};
__privateAdd(_AST, _parseAST);
__privateAdd(_AST, _parseGlob);
let AST = _AST;
const escape = (s2, { windowsPathsNoEscape = false } = {}) => {
  return windowsPathsNoEscape ? s2.replace(/[?*()[\]]/g, "[$&]") : s2.replace(/[?*()[\]\\]/g, "\\$&");
};
const minimatch = (p2, pattern, options = {}) => {
  assertValidPattern(pattern);
  if (!options.nocomment && pattern.charAt(0) === "#") {
    return false;
  }
  return new Minimatch(pattern, options).match(p2);
};
const starDotExtRE = /^\*+([^+@!?\*\[\(]*)$/;
const starDotExtTest = (ext2) => (f2) => !f2.startsWith(".") && f2.endsWith(ext2);
const starDotExtTestDot = (ext2) => (f2) => f2.endsWith(ext2);
const starDotExtTestNocase = (ext2) => {
  ext2 = ext2.toLowerCase();
  return (f2) => !f2.startsWith(".") && f2.toLowerCase().endsWith(ext2);
};
const starDotExtTestNocaseDot = (ext2) => {
  ext2 = ext2.toLowerCase();
  return (f2) => f2.toLowerCase().endsWith(ext2);
};
const starDotStarRE = /^\*+\.\*+$/;
const starDotStarTest = (f2) => !f2.startsWith(".") && f2.includes(".");
const starDotStarTestDot = (f2) => f2 !== "." && f2 !== ".." && f2.includes(".");
const dotStarRE = /^\.\*+$/;
const dotStarTest = (f2) => f2 !== "." && f2 !== ".." && f2.startsWith(".");
const starRE = /^\*+$/;
const starTest = (f2) => f2.length !== 0 && !f2.startsWith(".");
const starTestDot = (f2) => f2.length !== 0 && f2 !== "." && f2 !== "..";
const qmarksRE = /^\?+([^+@!?\*\[\(]*)?$/;
const qmarksTestNocase = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  if (!ext2)
    return noext;
  ext2 = ext2.toLowerCase();
  return (f2) => noext(f2) && f2.toLowerCase().endsWith(ext2);
};
const qmarksTestNocaseDot = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  if (!ext2)
    return noext;
  ext2 = ext2.toLowerCase();
  return (f2) => noext(f2) && f2.toLowerCase().endsWith(ext2);
};
const qmarksTestDot = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExtDot([$0]);
  return !ext2 ? noext : (f2) => noext(f2) && f2.endsWith(ext2);
};
const qmarksTest = ([$0, ext2 = ""]) => {
  const noext = qmarksTestNoExt([$0]);
  return !ext2 ? noext : (f2) => noext(f2) && f2.endsWith(ext2);
};
const qmarksTestNoExt = ([$0]) => {
  const len = $0.length;
  return (f2) => f2.length === len && !f2.startsWith(".");
};
const qmarksTestNoExtDot = ([$0]) => {
  const len = $0.length;
  return (f2) => f2.length === len && f2 !== "." && f2 !== "..";
};
const defaultPlatform = typeof process === "object" && process ? typeof { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" } === "object" && { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" } && { "ACLOCAL_PATH": "C:\\dev\\git\\mingw64\\share\\aclocal;C:\\dev\\git\\usr\\share\\aclocal", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\Tiborg\\AppData\\Roaming", "BERRY_BIN_FOLDER": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d", "ChocolateyInstall": "C:\\ProgramData\\chocolatey", "ChocolateyLastPathUpdate": "133195694767186329", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_14296_LTTDFBAMNYKXLEXP", "COLORTERM": "truecolor", "COMMONPROGRAMFILES": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "TIBORG-DESKTOP", "COMSPEC": "C:\\Windows\\system32\\cmd.exe", "CONFIG_SITE": "C:/dev/git/etc/config.site", "COREPACK_ROOT": "C:\\dev\\nodejs\\node_modules\\corepack", "DISPLAY": "needs-to-be-defined", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EXEPATH": "C:\\dev\\git\\bin", "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\Tiborg\\go", "HOME": "C:\\Users\\Tiborg", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\Tiborg", "HOSTNAME": "TIBORG-DESKTOP", "IGCCSVC_DB": "AQAAANCMnd8BFdERjHoAwE/Cl+sBAAAAO/3k4O2OUkKAVdJAYn+o4QQAAAACAAAAAAAQZgAAAAEAACAAAABlC+JLkBUGRmet6Up5nNUDby3k5poQSf6uNgX44xrMawAAAAAOgAAAAAIAACAAAAAmfOvpFPAhki+E+koYaX6hU49/ss9/ugausiTJdhKLZ2AAAABFyLcnlzEWfyVUKmBH9f10C8o2AsqiSTQ7wYcu6CIC0ppdij8XeVgAuX5r1bQB4bXWhdqHqn84pOw80zKhfTV7t/SLTviZEARXNW3mhr8nww9IN/SEA1HDLtAtpw8pCqZAAAAAaa+FBtLYt2ZbPDsjVNRWHmY/qDTHC2TllcuPZ3VpJGlSBO15SL0PDDeqvl9GxcT+NDo7ddGd2BYF32/ThGenKQ==", "INFOPATH": "C:\\dev\\git\\usr\\local\\info;C:\\dev\\git\\usr\\share\\info;C:\\dev\\git\\usr\\info;C:\\dev\\git\\share\\info", "INIT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "LANG": "en_US.UTF-8", "LDRAWDIR": "C:\\Users\\Public\\Documents\\LDraw", "LOCALAPPDATA": "C:\\Users\\Tiborg\\AppData\\Local", "LOGONSERVER": "\\\\TIBORG-DESKTOP", "MANPATH": "C:\\dev\\git\\mingw64\\local\\man;C:\\dev\\git\\mingw64\\share\\man;C:\\dev\\git\\usr\\local\\man;C:\\dev\\git\\usr\\share\\man;C:\\dev\\git\\usr\\man;C:\\dev\\git\\share\\man", "MINGW_CHOST": "x86_64-w64-mingw32", "MINGW_PACKAGE_PREFIX": "mingw-w64-x86_64", "MINGW_PREFIX": "C:/dev/git/mingw64", "MSYSTEM": "MINGW64", "MSYSTEM_CARCH": "x86_64", "MSYSTEM_CHOST": "x86_64-w64-mingw32", "MSYSTEM_PREFIX": "C:/dev/git/mingw64", "NODE_ENV": "production", "npm_config_user_agent": "yarn/3.3.0 npm/? node/v18.12.1 win32 x64", "npm_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\yarn", "npm_lifecycle_event": "g:vite", "npm_node_execpath": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d\\node", "npm_package_json": "D:\\Work\\CLIPr\\clipr-sdk-test\\package.json", "npm_package_name": "clipr-sdk-test", "npm_package_version": "", "NUMBER_OF_PROCESSORS": "24", "OneDrive": "C:\\Users\\Tiborg\\OneDrive", "ORIGINAL_PATH": "C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler", "ORIGINAL_TEMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_TMP": "C:/Users/Tiborg/AppData/Local/Temp", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "PATH": "C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-e574ff2d;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-9e2ac67b;C:\\Users\\Tiborg\\AppData\\Local\\Temp\\xfs-a7252bbe;C:\\Users\\Tiborg\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\local\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\Users\\Tiborg\\bin;C:\\Program Files\\Microsoft\\jdk-11.0.12.7-hotspot\\bin;C:\\dev\\python\\Python311\\Scripts;C:\\dev\\python\\Python311;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\NVIDIA Corporation\\NVIDIA NvDLISR;C:\\dev\\git\\cmd;C:\\dev\\git\\mingw64\\bin;C:\\dev\\git\\usr\\bin;C:\\dev\\nodejs;C:\\dev\\go\\bin;C:\\Program Files\\Microsoft SQL Server\\150\\Tools\\Binn;C:\\Program Files\\Microsoft SQL Server\\Client SDK\\ODBC\\170\\Tools\\Binn;C:\\Program Files\\dotnet;C:\\dev\\cmake\\bin;C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files\\Amazon\\AWSCLIV2;C:\\dev\\ffmpeg\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\Tiborg\\AppData\\Roaming\\npm;C:\\Users\\Tiborg\\go\\bin;C:\\dev\\vscode\\bin;C:\\Users\\Tiborg\\.dotnet\\tools;C:\\users\\tiborg\\.local\\bin;C:\\Users\\Tiborg\\AppData\\Local\\Programs\\Fiddler;C:\\dev\\git\\usr\\bin\\vendor_perl;C:\\dev\\git\\usr\\bin\\core_perl", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW", "PKG_CONFIG_PATH": "C:\\dev\\git\\mingw64\\lib\\pkgconfig;C:\\dev\\git\\mingw64\\share\\pkgconfig", "PLINK_PROTOCOL": "ssh", "PM_PACKAGES_ROOT": "D:\\packman-repo", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "PROGRAMFILES": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROJECT_CWD": "D:\\Work\\CLIPr\\clipr-sdk-test", "PROMPT": "$P$G", "PSModulePath": "C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "PWD": "D:\\Work\\CLIPr\\clipr-sdk-test\\packages\\clipr-sdk", "QtMsBuild": "C:\\Users\\Tiborg\\AppData\\Local\\QtMsBuild", "SESSIONNAME": "Console", "SHELL": "C:\\dev\\git\\usr\\bin\\bash.exe", "SHLVL": "1", "SSH_ASKPASS": "C:/dev/git/mingw64/bin/git-askpass.exe", "SYSTEMDRIVE": "C:", "SYSTEMROOT": "C:\\Windows", "TEMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TERM": "xterm-256color", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.84.2", "TMP": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "TMPDIR": "C:\\Users\\Tiborg\\AppData\\Local\\Temp", "USERDOMAIN": "TIBORG-DESKTOP", "USERDOMAIN_ROAMINGPROFILE": "TIBORG-DESKTOP", "USERNAME": "Tiborg", "USERPROFILE": "C:\\Users\\Tiborg", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "c:\\dev\\vscode\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "C:\\dev\\vscode\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-917697d748-sock", "WINDIR": "C:\\Windows", "ZES_ENABLE_SYSMAN": "1" }.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
const path = {
  win32: { sep: "\\" },
  posix: { sep: "/" }
};
const sep = defaultPlatform === "win32" ? path.win32.sep : path.posix.sep;
minimatch.sep = sep;
const GLOBSTAR = Symbol("globstar **");
minimatch.GLOBSTAR = GLOBSTAR;
const qmark = "[^/]";
const star = qmark + "*?";
const twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
const twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
const filter = (pattern, options = {}) => (p2) => minimatch(p2, pattern, options);
minimatch.filter = filter;
const ext = (a2, b = {}) => Object.assign({}, a2, b);
const defaults = (def) => {
  if (!def || typeof def !== "object" || !Object.keys(def).length) {
    return minimatch;
  }
  const orig = minimatch;
  const m2 = (p2, pattern, options = {}) => orig(p2, pattern, ext(def, options));
  return Object.assign(m2, {
    Minimatch: class Minimatch extends orig.Minimatch {
      constructor(pattern, options = {}) {
        super(pattern, ext(def, options));
      }
      static defaults(options) {
        return orig.defaults(ext(def, options)).Minimatch;
      }
    },
    AST: class AST extends orig.AST {
      /* c8 ignore start */
      constructor(type, parent, options = {}) {
        super(type, parent, ext(def, options));
      }
      /* c8 ignore stop */
      static fromGlob(pattern, options = {}) {
        return orig.AST.fromGlob(pattern, ext(def, options));
      }
    },
    unescape: (s2, options = {}) => orig.unescape(s2, ext(def, options)),
    escape: (s2, options = {}) => orig.escape(s2, ext(def, options)),
    filter: (pattern, options = {}) => orig.filter(pattern, ext(def, options)),
    defaults: (options) => orig.defaults(ext(def, options)),
    makeRe: (pattern, options = {}) => orig.makeRe(pattern, ext(def, options)),
    braceExpand: (pattern, options = {}) => orig.braceExpand(pattern, ext(def, options)),
    match: (list, pattern, options = {}) => orig.match(list, pattern, ext(def, options)),
    sep: orig.sep,
    GLOBSTAR
  });
};
minimatch.defaults = defaults;
const braceExpand = (pattern, options = {}) => {
  assertValidPattern(pattern);
  if (options.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
    return [pattern];
  }
  return expand$1(pattern);
};
minimatch.braceExpand = braceExpand;
const makeRe = (pattern, options = {}) => new Minimatch(pattern, options).makeRe();
minimatch.makeRe = makeRe;
const match = (list, pattern, options = {}) => {
  const mm = new Minimatch(pattern, options);
  list = list.filter((f2) => mm.match(f2));
  if (mm.options.nonull && !list.length) {
    list.push(pattern);
  }
  return list;
};
minimatch.match = match;
const globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
const regExpEscape = (s2) => s2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
class Minimatch {
  constructor(pattern, options = {}) {
    __publicField(this, "options");
    __publicField(this, "set");
    __publicField(this, "pattern");
    __publicField(this, "windowsPathsNoEscape");
    __publicField(this, "nonegate");
    __publicField(this, "negate");
    __publicField(this, "comment");
    __publicField(this, "empty");
    __publicField(this, "preserveMultipleSlashes");
    __publicField(this, "partial");
    __publicField(this, "globSet");
    __publicField(this, "globParts");
    __publicField(this, "nocase");
    __publicField(this, "isWindows");
    __publicField(this, "platform");
    __publicField(this, "windowsNoMagicRoot");
    __publicField(this, "regexp");
    assertValidPattern(pattern);
    options = options || {};
    this.options = options;
    this.pattern = pattern;
    this.platform = options.platform || defaultPlatform;
    this.isWindows = this.platform === "win32";
    this.windowsPathsNoEscape = !!options.windowsPathsNoEscape || options.allowWindowsEscape === false;
    if (this.windowsPathsNoEscape) {
      this.pattern = this.pattern.replace(/\\/g, "/");
    }
    this.preserveMultipleSlashes = !!options.preserveMultipleSlashes;
    this.regexp = null;
    this.negate = false;
    this.nonegate = !!options.nonegate;
    this.comment = false;
    this.empty = false;
    this.partial = !!options.partial;
    this.nocase = !!this.options.nocase;
    this.windowsNoMagicRoot = options.windowsNoMagicRoot !== void 0 ? options.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
    this.globSet = [];
    this.globParts = [];
    this.set = [];
    this.make();
  }
  hasMagic() {
    if (this.options.magicalBraces && this.set.length > 1) {
      return true;
    }
    for (const pattern of this.set) {
      for (const part of pattern) {
        if (typeof part !== "string")
          return true;
      }
    }
    return false;
  }
  debug(..._2) {
  }
  make() {
    const pattern = this.pattern;
    const options = this.options;
    if (!options.nocomment && pattern.charAt(0) === "#") {
      this.comment = true;
      return;
    }
    if (!pattern) {
      this.empty = true;
      return;
    }
    this.parseNegate();
    this.globSet = [...new Set(this.braceExpand())];
    if (options.debug) {
      this.debug = (...args) => console.error(...args);
    }
    this.debug(this.pattern, this.globSet);
    const rawGlobParts = this.globSet.map((s2) => this.slashSplit(s2));
    this.globParts = this.preprocess(rawGlobParts);
    this.debug(this.pattern, this.globParts);
    let set4 = this.globParts.map((s2, _2, __) => {
      if (this.isWindows && this.windowsNoMagicRoot) {
        const isUNC = s2[0] === "" && s2[1] === "" && (s2[2] === "?" || !globMagic.test(s2[2])) && !globMagic.test(s2[3]);
        const isDrive = /^[a-z]:/i.test(s2[0]);
        if (isUNC) {
          return [...s2.slice(0, 4), ...s2.slice(4).map((ss) => this.parse(ss))];
        } else if (isDrive) {
          return [s2[0], ...s2.slice(1).map((ss) => this.parse(ss))];
        }
      }
      return s2.map((ss) => this.parse(ss));
    });
    this.debug(this.pattern, set4);
    this.set = set4.filter((s2) => s2.indexOf(false) === -1);
    if (this.isWindows) {
      for (let i2 = 0; i2 < this.set.length; i2++) {
        const p2 = this.set[i2];
        if (p2[0] === "" && p2[1] === "" && this.globParts[i2][2] === "?" && typeof p2[3] === "string" && /^[a-z]:$/i.test(p2[3])) {
          p2[2] = "?";
        }
      }
    }
    this.debug(this.pattern, this.set);
  }
  // various transforms to equivalent pattern sets that are
  // faster to process in a filesystem walk.  The goal is to
  // eliminate what we can, and push all ** patterns as far
  // to the right as possible, even if it increases the number
  // of patterns that we have to process.
  preprocess(globParts) {
    if (this.options.noglobstar) {
      for (let i2 = 0; i2 < globParts.length; i2++) {
        for (let j = 0; j < globParts[i2].length; j++) {
          if (globParts[i2][j] === "**") {
            globParts[i2][j] = "*";
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      globParts = this.firstPhasePreProcess(globParts);
      globParts = this.secondPhasePreProcess(globParts);
    } else if (optimizationLevel >= 1) {
      globParts = this.levelOneOptimize(globParts);
    } else {
      globParts = this.adjascentGlobstarOptimize(globParts);
    }
    return globParts;
  }
  // just get rid of adjascent ** portions
  adjascentGlobstarOptimize(globParts) {
    return globParts.map((parts) => {
      let gs = -1;
      while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
        let i2 = gs;
        while (parts[i2 + 1] === "**") {
          i2++;
        }
        if (i2 !== gs) {
          parts.splice(gs, i2 - gs);
        }
      }
      return parts;
    });
  }
  // get rid of adjascent ** and resolve .. portions
  levelOneOptimize(globParts) {
    return globParts.map((parts) => {
      parts = parts.reduce((set4, part) => {
        const prev = set4[set4.length - 1];
        if (part === "**" && prev === "**") {
          return set4;
        }
        if (part === "..") {
          if (prev && prev !== ".." && prev !== "." && prev !== "**") {
            set4.pop();
            return set4;
          }
        }
        set4.push(part);
        return set4;
      }, []);
      return parts.length === 0 ? [""] : parts;
    });
  }
  levelTwoFileOptimize(parts) {
    if (!Array.isArray(parts)) {
      parts = this.slashSplit(parts);
    }
    let didSomething = false;
    do {
      didSomething = false;
      if (!this.preserveMultipleSlashes) {
        for (let i2 = 1; i2 < parts.length - 1; i2++) {
          const p2 = parts[i2];
          if (i2 === 1 && p2 === "" && parts[0] === "")
            continue;
          if (p2 === "." || p2 === "") {
            didSomething = true;
            parts.splice(i2, 1);
            i2--;
          }
        }
        if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
          didSomething = true;
          parts.pop();
        }
      }
      let dd = 0;
      while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
        const p2 = parts[dd - 1];
        if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**") {
          didSomething = true;
          parts.splice(dd - 1, 2);
          dd -= 2;
        }
      }
    } while (didSomething);
    return parts.length === 0 ? [""] : parts;
  }
  // First phase: single-pattern processing
  // <pre> is 1 or more portions
  // <rest> is 1 or more portions
  // <p> is any portion other than ., .., '', or **
  // <e> is . or ''
  //
  // **/.. is *brutal* for filesystem walking performance, because
  // it effectively resets the recursive walk each time it occurs,
  // and ** cannot be reduced out by a .. pattern part like a regexp
  // or most strings (other than .., ., and '') can be.
  //
  // <pre>/**/../<p>/<p>/<rest> -> {<pre>/../<p>/<p>/<rest>,<pre>/**/<p>/<p>/<rest>}
  // <pre>/<e>/<rest> -> <pre>/<rest>
  // <pre>/<p>/../<rest> -> <pre>/<rest>
  // **/**/<rest> -> **/<rest>
  //
  // **/*/<rest> -> */**/<rest> <== not valid because ** doesn't follow
  // this WOULD be allowed if ** did follow symlinks, or * didn't
  firstPhasePreProcess(globParts) {
    let didSomething = false;
    do {
      didSomething = false;
      for (let parts of globParts) {
        let gs = -1;
        while (-1 !== (gs = parts.indexOf("**", gs + 1))) {
          let gss = gs;
          while (parts[gss + 1] === "**") {
            gss++;
          }
          if (gss > gs) {
            parts.splice(gs + 1, gss - gs);
          }
          let next = parts[gs + 1];
          const p2 = parts[gs + 2];
          const p22 = parts[gs + 3];
          if (next !== "..")
            continue;
          if (!p2 || p2 === "." || p2 === ".." || !p22 || p22 === "." || p22 === "..") {
            continue;
          }
          didSomething = true;
          parts.splice(gs, 1);
          const other = parts.slice(0);
          other[gs] = "**";
          globParts.push(other);
          gs--;
        }
        if (!this.preserveMultipleSlashes) {
          for (let i2 = 1; i2 < parts.length - 1; i2++) {
            const p2 = parts[i2];
            if (i2 === 1 && p2 === "" && parts[0] === "")
              continue;
            if (p2 === "." || p2 === "") {
              didSomething = true;
              parts.splice(i2, 1);
              i2--;
            }
          }
          if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
            didSomething = true;
            parts.pop();
          }
        }
        let dd = 0;
        while (-1 !== (dd = parts.indexOf("..", dd + 1))) {
          const p2 = parts[dd - 1];
          if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**") {
            didSomething = true;
            const needDot = dd === 1 && parts[dd + 1] === "**";
            const splin = needDot ? ["."] : [];
            parts.splice(dd - 1, 2, ...splin);
            if (parts.length === 0)
              parts.push("");
            dd -= 2;
          }
        }
      }
    } while (didSomething);
    return globParts;
  }
  // second phase: multi-pattern dedupes
  // {<pre>/*/<rest>,<pre>/<p>/<rest>} -> <pre>/*/<rest>
  // {<pre>/<rest>,<pre>/<rest>} -> <pre>/<rest>
  // {<pre>/**/<rest>,<pre>/<rest>} -> <pre>/**/<rest>
  //
  // {<pre>/**/<rest>,<pre>/**/<p>/<rest>} -> <pre>/**/<rest>
  // ^-- not valid because ** doens't follow symlinks
  secondPhasePreProcess(globParts) {
    for (let i2 = 0; i2 < globParts.length - 1; i2++) {
      for (let j = i2 + 1; j < globParts.length; j++) {
        const matched = this.partsMatch(globParts[i2], globParts[j], !this.preserveMultipleSlashes);
        if (!matched)
          continue;
        globParts[i2] = matched;
        globParts[j] = [];
      }
    }
    return globParts.filter((gs) => gs.length);
  }
  partsMatch(a2, b, emptyGSMatch = false) {
    let ai = 0;
    let bi = 0;
    let result = [];
    let which = "";
    while (ai < a2.length && bi < b.length) {
      if (a2[ai] === b[bi]) {
        result.push(which === "b" ? b[bi] : a2[ai]);
        ai++;
        bi++;
      } else if (emptyGSMatch && a2[ai] === "**" && b[bi] === a2[ai + 1]) {
        result.push(a2[ai]);
        ai++;
      } else if (emptyGSMatch && b[bi] === "**" && a2[ai] === b[bi + 1]) {
        result.push(b[bi]);
        bi++;
      } else if (a2[ai] === "*" && b[bi] && (this.options.dot || !b[bi].startsWith(".")) && b[bi] !== "**") {
        if (which === "b")
          return false;
        which = "a";
        result.push(a2[ai]);
        ai++;
        bi++;
      } else if (b[bi] === "*" && a2[ai] && (this.options.dot || !a2[ai].startsWith(".")) && a2[ai] !== "**") {
        if (which === "a")
          return false;
        which = "b";
        result.push(b[bi]);
        ai++;
        bi++;
      } else {
        return false;
      }
    }
    return a2.length === b.length && result;
  }
  parseNegate() {
    if (this.nonegate)
      return;
    const pattern = this.pattern;
    let negate = false;
    let negateOffset = 0;
    for (let i2 = 0; i2 < pattern.length && pattern.charAt(i2) === "!"; i2++) {
      negate = !negate;
      negateOffset++;
    }
    if (negateOffset)
      this.pattern = pattern.slice(negateOffset);
    this.negate = negate;
  }
  // set partial to true to test if, for example,
  // "/a/b" matches the start of "/*/b/*/d"
  // Partial means, if you run out of file before you run
  // out of pattern, then that's fine, as long as all
  // the parts match.
  matchOne(file, pattern, partial = false) {
    const options = this.options;
    if (this.isWindows) {
      const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
      const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
      const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
      const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
      const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
      const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
      if (typeof fdi === "number" && typeof pdi === "number") {
        const [fd, pd] = [file[fdi], pattern[pdi]];
        if (fd.toLowerCase() === pd.toLowerCase()) {
          pattern[pdi] = fd;
          if (pdi > fdi) {
            pattern = pattern.slice(pdi);
          } else if (fdi > pdi) {
            file = file.slice(fdi);
          }
        }
      }
    }
    const { optimizationLevel = 1 } = this.options;
    if (optimizationLevel >= 2) {
      file = this.levelTwoFileOptimize(file);
    }
    this.debug("matchOne", this, { file, pattern });
    this.debug("matchOne", file.length, pattern.length);
    for (var fi = 0, pi = 0, fl = file.length, pl = pattern.length; fi < fl && pi < pl; fi++, pi++) {
      this.debug("matchOne loop");
      var p2 = pattern[pi];
      var f2 = file[fi];
      this.debug(pattern, p2, f2);
      if (p2 === false) {
        return false;
      }
      if (p2 === GLOBSTAR) {
        this.debug("GLOBSTAR", [pattern, p2, f2]);
        var fr = fi;
        var pr = pi + 1;
        if (pr === pl) {
          this.debug("** at the end");
          for (; fi < fl; fi++) {
            if (file[fi] === "." || file[fi] === ".." || !options.dot && file[fi].charAt(0) === ".")
              return false;
          }
          return true;
        }
        while (fr < fl) {
          var swallowee = file[fr];
          this.debug("\nglobstar while", file, fr, pattern, pr, swallowee);
          if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
            this.debug("globstar found match!", fr, fl, swallowee);
            return true;
          } else {
            if (swallowee === "." || swallowee === ".." || !options.dot && swallowee.charAt(0) === ".") {
              this.debug("dot detected!", file, fr, pattern, pr);
              break;
            }
            this.debug("globstar swallow a segment, and continue");
            fr++;
          }
        }
        if (partial) {
          this.debug("\n>>> no match, partial?", file, fr, pattern, pr);
          if (fr === fl) {
            return true;
          }
        }
        return false;
      }
      let hit;
      if (typeof p2 === "string") {
        hit = f2 === p2;
        this.debug("string match", p2, f2, hit);
      } else {
        hit = p2.test(f2);
        this.debug("pattern match", p2, f2, hit);
      }
      if (!hit)
        return false;
    }
    if (fi === fl && pi === pl) {
      return true;
    } else if (fi === fl) {
      return partial;
    } else if (pi === pl) {
      return fi === fl - 1 && file[fi] === "";
    } else {
      throw new Error("wtf?");
    }
  }
  braceExpand() {
    return braceExpand(this.pattern, this.options);
  }
  parse(pattern) {
    assertValidPattern(pattern);
    const options = this.options;
    if (pattern === "**")
      return GLOBSTAR;
    if (pattern === "")
      return "";
    let m2;
    let fastTest = null;
    if (m2 = pattern.match(starRE)) {
      fastTest = options.dot ? starTestDot : starTest;
    } else if (m2 = pattern.match(starDotExtRE)) {
      fastTest = (options.nocase ? options.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options.dot ? starDotExtTestDot : starDotExtTest)(m2[1]);
    } else if (m2 = pattern.match(qmarksRE)) {
      fastTest = (options.nocase ? options.dot ? qmarksTestNocaseDot : qmarksTestNocase : options.dot ? qmarksTestDot : qmarksTest)(m2);
    } else if (m2 = pattern.match(starDotStarRE)) {
      fastTest = options.dot ? starDotStarTestDot : starDotStarTest;
    } else if (m2 = pattern.match(dotStarRE)) {
      fastTest = dotStarTest;
    }
    const re = AST.fromGlob(pattern, this.options).toMMPattern();
    return fastTest ? Object.assign(re, { test: fastTest }) : re;
  }
  makeRe() {
    if (this.regexp || this.regexp === false)
      return this.regexp;
    const set4 = this.set;
    if (!set4.length) {
      this.regexp = false;
      return this.regexp;
    }
    const options = this.options;
    const twoStar = options.noglobstar ? star : options.dot ? twoStarDot : twoStarNoDot;
    const flags = new Set(options.nocase ? ["i"] : []);
    let re = set4.map((pattern) => {
      const pp = pattern.map((p2) => {
        if (p2 instanceof RegExp) {
          for (const f2 of p2.flags.split(""))
            flags.add(f2);
        }
        return typeof p2 === "string" ? regExpEscape(p2) : p2 === GLOBSTAR ? GLOBSTAR : p2._src;
      });
      pp.forEach((p2, i2) => {
        const next = pp[i2 + 1];
        const prev = pp[i2 - 1];
        if (p2 !== GLOBSTAR || prev === GLOBSTAR) {
          return;
        }
        if (prev === void 0) {
          if (next !== void 0 && next !== GLOBSTAR) {
            pp[i2 + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
          } else {
            pp[i2] = twoStar;
          }
        } else if (next === void 0) {
          pp[i2 - 1] = prev + "(?:\\/|" + twoStar + ")?";
        } else if (next !== GLOBSTAR) {
          pp[i2 - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
          pp[i2 + 1] = GLOBSTAR;
        }
      });
      return pp.filter((p2) => p2 !== GLOBSTAR).join("/");
    }).join("|");
    const [open, close] = set4.length > 1 ? ["(?:", ")"] : ["", ""];
    re = "^" + open + re + close + "$";
    if (this.negate)
      re = "^(?!" + re + ").+$";
    try {
      this.regexp = new RegExp(re, [...flags].join(""));
    } catch (ex) {
      this.regexp = false;
    }
    return this.regexp;
  }
  slashSplit(p2) {
    if (this.preserveMultipleSlashes) {
      return p2.split("/");
    } else if (this.isWindows && /^\/\/[^\/]+/.test(p2)) {
      return ["", ...p2.split(/\/+/)];
    } else {
      return p2.split(/\/+/);
    }
  }
  match(f2, partial = this.partial) {
    this.debug("match", f2, this.pattern);
    if (this.comment) {
      return false;
    }
    if (this.empty) {
      return f2 === "";
    }
    if (f2 === "/" && partial) {
      return true;
    }
    const options = this.options;
    if (this.isWindows) {
      f2 = f2.split("\\").join("/");
    }
    const ff = this.slashSplit(f2);
    this.debug(this.pattern, "split", ff);
    const set4 = this.set;
    this.debug(this.pattern, "set", set4);
    let filename = ff[ff.length - 1];
    if (!filename) {
      for (let i2 = ff.length - 2; !filename && i2 >= 0; i2--) {
        filename = ff[i2];
      }
    }
    for (let i2 = 0; i2 < set4.length; i2++) {
      const pattern = set4[i2];
      let file = ff;
      if (options.matchBase && pattern.length === 1) {
        file = [filename];
      }
      const hit = this.matchOne(file, pattern, partial);
      if (hit) {
        if (options.flipNegate) {
          return true;
        }
        return !this.negate;
      }
    }
    if (options.flipNegate) {
      return false;
    }
    return this.negate;
  }
  static defaults(def) {
    return minimatch.defaults(def).Minimatch;
  }
}
minimatch.AST = AST;
minimatch.Minimatch = Minimatch;
minimatch.escape = escape;
minimatch.unescape = unescape;
function isNonEmptyString(arg) {
  return typeof arg === "string" && arg.length > 0;
}
const initDev = (obj, opts) => {
  return;
};
const _initDev = initDev;
class ErrorGroup extends Error$1 {
  constructor(props) {
    super("ErrorGroup", props);
    this.childErrors = [];
    this.childErrors = props.errors;
  }
}
function isError(arg) {
  return arg instanceof Error$1;
}
function toError(arg, props = {}) {
  if (isError(arg))
    return arg;
  if (isNonEmptyString(arg)) {
    return new Error$1(arg, props);
  }
  return new Error$1("UnknownError", {
    ...props,
    source: arg
  });
}
function sleep(timeout = 1e3) {
  return new Promise((res) => {
    setTimeout(res, timeout);
  });
}
const AbortedResult = [null, new Error$1("Aborted")];
const TimeoutResult = [null, new Error$1("Timeout")];
async function promisify(executor, opts = {}) {
  const {
    abortSignal,
    timeout
  } = opts;
  if (abortSignal == null ? void 0 : abortSignal.aborted)
    return AbortedResult;
  if (timeout === 0)
    return TimeoutResult;
  try {
    const promise = new Promise((resolve, reject) => {
      if (abortSignal) {
        abortSignal.addEventListener("abort", () => resolve(AbortedResult));
      }
      if (timeout) {
        sleep(timeout).then(() => resolve(TimeoutResult));
      }
      executor(resolve, reject);
    });
    const result = await promise;
    return result;
  } catch (rawErr) {
    if (isError(rawErr))
      return [null, rawErr];
    return [null, new Error$1("UnknownError", {
      source: rawErr
    })];
  }
}
var TaskStatus = /* @__PURE__ */ ((TaskStatus2) => {
  TaskStatus2["Idle"] = "Idle";
  TaskStatus2["Running"] = "Running";
  TaskStatus2["Completed"] = "Completed";
  TaskStatus2["Error"] = "Error";
  return TaskStatus2;
})(TaskStatus || {});
const PromiseRelayDefaultProps = {
  timeout: null,
  autoStart: false
};
class PromiseRelay {
  constructor(props = PromiseRelayDefaultProps) {
    this.isResolved = false;
    this.isRejected = false;
    this.timeout = null;
    this.autoStart = null;
    this.timeoutId = null;
    this.clearTimeout = () => {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
      }
    };
    this.handleTimeout = () => {
      if (this.isSettled)
        return console.warn(`PromiseRelay has already been settled but a timeout handler has been invoked.`);
      this.reject(new Error$1("Aborted"));
    };
    props = {
      ...PromiseRelayDefaultProps,
      ...props
    };
    this.promise = new Promise((res, rej) => {
      this.resolvePromise = res;
      this.rejectPromise = rej;
    });
    this.timeout = props.timeout ?? null;
    this.autoStart = props.autoStart ?? null;
    if (this.autoStart !== false)
      this.start();
  }
  get isSettled() {
    return this.isResolved || this.isRejected;
  }
  start() {
    const { timeout } = this;
    if (timeout)
      this.timeoutId = setTimeout(this.handleTimeout, timeout);
  }
  resolve(val) {
    if (this.isSettled) {
      return;
    }
    this.resolvePromise(val);
    this.isResolved = true;
    this.clearTimeout();
  }
  reject(err) {
    if (this.isSettled) {
      return;
    }
    this.rejectPromise(err);
    this.isRejected = true;
    this.clearTimeout();
  }
}
let Node$1 = class Node2 {
  constructor() {
    this.nodeId = nanoid();
  }
};
var __defProp$5 = Object.defineProperty;
var __getOwnPropDesc$5 = Object.getOwnPropertyDescriptor;
var __decorateClass$5 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$5(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$5(target, key, result);
  return result;
};
class TaskDelegate extends Node$1 {
  constructor(props = {}) {
    super();
    this.externalAbortSignal = null;
    this.abortController = new AbortController();
    this.promiseRelay = new PromiseRelay();
    this.status = TaskStatus.Idle;
    this.result = null;
    makeObservable(this);
    const { abortSignal } = props;
    this.externalAbortSignal = abortSignal ?? null;
    abortSignal == null ? void 0 : abortSignal.addEventListener("abort", () => {
      this.abortController.abort();
    });
    if (abortSignal == null ? void 0 : abortSignal.aborted)
      this.abortController.abort();
  }
  get abortSignal() {
    return this.abortController.signal;
  }
  get promise() {
    return this.promiseRelay.promise;
  }
  get value() {
    var _a2;
    return ((_a2 = this.result) == null ? void 0 : _a2[0]) ?? null;
  }
  get error() {
    var _a2;
    return ((_a2 = this.result) == null ? void 0 : _a2[1]) ?? null;
  }
  get isIdle() {
    return this.status === TaskStatus.Idle;
  }
  get isRunning() {
    return this.status === TaskStatus.Running;
  }
  get isCompleted() {
    return this.status === TaskStatus.Completed;
  }
  get isError() {
    return this.status === TaskStatus.Error;
  }
  get isSettled() {
    return this.isCompleted || this.isError;
  }
  get isAborted() {
    var _a2;
    return ((_a2 = this.error) == null ? void 0 : _a2.code) === "Aborted";
  }
  async run() {
    throw new Error$1("NotImplemented");
  }
  abort() {
    this.abortController.abort();
    return true;
  }
  setRunning() {
    if (this.isRunning)
      return [null, new Error$1("TaskAlreadyRunning")];
    this.status = TaskStatus.Running;
    this.result = null;
    return [true];
  }
  setResult(res) {
    this.result = res;
    const [val, err] = res;
    if (err)
      this.status = TaskStatus.Error;
    else
      this.status = TaskStatus.Completed;
    this.promiseRelay.resolve(res);
    return res;
  }
  setCompleted(val) {
    return this.setResult([val]);
  }
  setError(err) {
    const errObj = toError(err);
    return this.setResult([null, errObj]);
  }
  handleSubTaskErrors(errs) {
    const errGroup = new ErrorGroup({ errors: errs });
    return this.setError(errGroup);
  }
}
__decorateClass$5([
  observable
], TaskDelegate.prototype, "status", 2);
__decorateClass$5([
  observable.shallow
], TaskDelegate.prototype, "result", 2);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "value", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "error", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isIdle", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isRunning", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isCompleted", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isError", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isSettled", 1);
__decorateClass$5([
  computed
], TaskDelegate.prototype, "isAborted", 1);
__decorateClass$5([
  action
], TaskDelegate.prototype, "setRunning", 1);
__decorateClass$5([
  action
], TaskDelegate.prototype, "setResult", 1);
__decorateClass$5([
  action
], TaskDelegate.prototype, "setCompleted", 1);
__decorateClass$5([
  action
], TaskDelegate.prototype, "setError", 1);
__decorateClass$5([
  action
], TaskDelegate.prototype, "handleSubTaskErrors", 1);
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$4(target, key, result);
  return result;
};
class BaseTask extends Node$1 {
  constructor(props = {}) {
    super();
    this.id = nanoid();
    this.label = null;
    makeObservable(this);
    this.delegate = new TaskDelegate({
      abortSignal: props.abortSignal
    });
  }
  get promise() {
    return this.delegate.promise;
  }
  get abortSignal() {
    return this.delegate.abortSignal;
  }
  get status() {
    return this.delegate.status;
  }
  get result() {
    return this.delegate.result;
  }
  get value() {
    return this.delegate.value;
  }
  get error() {
    return this.delegate.error;
  }
  get isIdle() {
    return this.delegate.isIdle;
  }
  get isRunning() {
    return this.delegate.isRunning;
  }
  get isCompleted() {
    return this.delegate.isCompleted;
  }
  get isError() {
    return this.delegate.isError;
  }
  get isSettled() {
    return this.delegate.isSettled;
  }
  get isAborted() {
    return this.delegate.isAborted;
  }
  async run() {
    if (this.abortSignal.aborted)
      return this.delegate.setError(new Error$1("Aborted"));
    this.delegate.setRunning();
    const [res, err] = await this.runFunc();
    if (err) {
      this.delegate.setError(err);
      return [null, err];
    }
    this.delegate.setCompleted(res);
    return [res];
  }
  abort() {
    this.delegate.abort();
  }
  setError(err) {
    return this.delegate.setError(err);
  }
  setCompleted(res) {
    return this.delegate.setCompleted(res);
  }
}
__decorateClass$4([
  computed
], BaseTask.prototype, "status", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "result", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "value", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "error", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isIdle", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isRunning", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isCompleted", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isError", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isSettled", 1);
__decorateClass$4([
  computed
], BaseTask.prototype, "isAborted", 1);
__decorateClass$4([
  action
], BaseTask.prototype, "run", 1);
__decorateClass$4([
  action
], BaseTask.prototype, "abort", 1);
function getAppSyncAuthHeaders(params) {
  const { token } = params;
  const headers = {};
  if (isNonEmptyString(token))
    headers["Authorization"] = ["Bearer", token].join(" ");
  return headers;
}
function getApolloOperationName(doc) {
  var _a2;
  const opDef = doc.definitions.find((def) => def.kind === "OperationDefinition");
  if (opDef)
    return ((_a2 = opDef.name) == null ? void 0 : _a2.value) ?? null;
  return null;
}
function getApolloBaseOptions(params) {
  const {
    token
  } = params;
  const context = {};
  if (token)
    context.headers = getAppSyncAuthHeaders({ token });
  const { abortSignal } = params;
  if (abortSignal) {
    context.fetchOptions = {
      signal: abortSignal
    };
  }
  const baseOptions = {
    variables: params.variables ?? void 0,
    context,
    ...params.clientOptions
  };
  return baseOptions;
}
function decodeApolloResult(rawResult, rawError) {
  if (rawError) {
    const err = decodeApolloError(rawError);
    if (!err)
      return [null, new Error$1("Api.GraphQlError", { source: rawError })];
    return [null, err];
  }
  if (!rawResult)
    return [null, new Error$1("MalformedApiResponse")];
  const maybeQueryResult = rawResult;
  let errorSources = [];
  if (maybeQueryResult == null ? void 0 : maybeQueryResult.error)
    errorSources.push(maybeQueryResult.error);
  if (Array.isArray(rawResult.errors) && rawResult.errors.length > 0) {
    rawResult.errors.forEach((errSrc) => errorSources.push(errSrc));
  }
  if (errorSources.length > 0) {
    const error = decodeApolloErrors(errorSources, maybeQueryResult.data);
    return [null, error];
  }
  return [rawResult.data];
}
function decodeApolloErrors(errors, partialValue = null) {
  const fallback = () => new Error$1("Api.UnknownGraphQlError", { source: errors, partialValue });
  if (!Array.isArray(errors) || errors.length === 0)
    return fallback();
  if (errors.length === 1)
    return decodeApolloError(errors[0], partialValue);
  const decodedErrors = errors.map((err) => decodeApolloError(err)).filter((err) => isError(err));
  if (decodedErrors.length === 0)
    return fallback();
  if (decodedErrors.length === 1)
    return decodedErrors[0];
  return new ErrorGroup({
    errors: decodedErrors,
    partialValue
  });
}
function decodeApolloError(error, partialValue = null) {
  const fallback = () => new Error$1("Api.UnknownGraphQlError", { source: error, partialValue });
  if (!error)
    return fallback();
  const maybeApolloError = error;
  const maybeServerError = maybeApolloError == null ? void 0 : maybeApolloError.networkError;
  if ((maybeServerError == null ? void 0 : maybeServerError.statusCode) === 401)
    return new Error$1("Api.ProviderNotAuthorized", { source: error, partialValue });
  return new Error$1("Api.GraphQlError", { source: error, partialValue });
}
class ApolloQueryTask extends BaseTask {
  constructor(props) {
    super(props);
    this.client = props.client;
    this.params = props.params;
    _initDev(this, {
      instanceName: this.operationName,
      color: "green"
    });
  }
  get query() {
    return this.params.query;
  }
  get variables() {
    return this.params.variables ?? null;
  }
  get operationName() {
    return getApolloOperationName(this.query);
  }
  async runFunc() {
    const { abortSignal } = this;
    const { client, params } = this;
    const options = {
      ...getApolloBaseOptions(params),
      query: params.query,
      errorPolicy: "all"
    };
    const promisifyOpts = {
      abortSignal
    };
    return promisify(async (resolve) => {
      try {
        const rawResult = await client.query(options);
        const result = decodeApolloResult(rawResult);
        resolve(result);
      } catch (rawErr) {
        const result = decodeApolloResult(null, rawErr);
        resolve(result);
      }
    }, promisifyOpts);
  }
}
class ApolloMutationTask extends BaseTask {
  constructor(props) {
    super(props);
    this.client = props.client;
    this.params = props.params;
    _initDev(this, {
      instanceName: this.operationName,
      color: "green"
    });
  }
  get mutation() {
    return this.params.mutation;
  }
  get variables() {
    return this.params.variables ?? null;
  }
  get operationName() {
    return getApolloOperationName(this.mutation);
  }
  async runFunc() {
    const { abortSignal } = this;
    const { client, params } = this;
    const options = {
      ...getApolloBaseOptions(params),
      mutation: params.mutation,
      errorPolicy: "all"
    };
    const promisifyOpts = {
      abortSignal
    };
    return promisify(async (resolve) => {
      try {
        const rawResult = await client.mutate(options);
        const result = decodeApolloResult(rawResult);
        resolve(result);
      } catch (rawErr) {
        const result = decodeApolloResult(null, rawErr);
        resolve(result);
      }
    }, promisifyOpts);
  }
}
function assert(condition, msg) {
  if (!condition) {
    if (typeof msg === "string")
      throw new Error(`AssertionError: ${msg}`);
    else if (isDefinedObject(msg))
      throw msg;
    throw new Error(`AssertionError`);
  }
}
const ServiceConfig = Config.api;
const GraphQlConfig = ServiceConfig.graphql;
const ApolloConfig = ServiceConfig.apollo;
class ApolloAdapter extends Node$1 {
  constructor(props = {}) {
    super();
    this.enableCache = false;
    this.enableCache = props.enableCache ?? false;
    this.allowedOperationTypes = new Set(props.allowedOperationTypes ?? []);
    this.token = props.token ?? null;
    this.client = this.createClient();
  }
  get allowQueries() {
    return this.allowedOperationTypes.has(GraphQlOperationType.Query);
  }
  get allowMutations() {
    return this.allowedOperationTypes.has(GraphQlOperationType.Mutation);
  }
  get allowSubscriptions() {
    return this.allowedOperationTypes.has(GraphQlOperationType.Subscription);
  }
  get cache() {
    return this.client.cache;
  }
  get link() {
    return this.client.link;
  }
  setAllowedOperationTypes(val) {
    this.allowedOperationTypes = new Set(val ?? []);
  }
  setToken(val) {
    this.token = val;
  }
  sync() {
    this.cache.evict({});
    const link = this.createLink();
    this.client.setLink(link);
  }
  createCache() {
    const cacheConfig = {};
    const cache = new InMemoryCache(cacheConfig);
    return cache;
  }
  createLink() {
    const endpointUrl = Config.api.graphql.endpointUrl;
    const httpLink = new HttpLink({
      uri: endpointUrl
    });
    const httpAppSyncAuthLink = new ApolloLink((operation, forward) => {
      operation.setContext(({ headers }) => ({
        headers: {
          ...getAppSyncAuthHeaders({
            token: this.token
          }),
          ...headers
        }
      }));
      return forward(operation);
    });
    const link = ApolloLink.from([
      httpAppSyncAuthLink,
      httpLink
    ]);
    return link;
  }
  createClient() {
    const cache = this.createCache();
    const link = this.createLink();
    const client = new ApolloClient({
      uri: GraphQlConfig.endpointUrl,
      name: ApolloConfig.clientName,
      version: ApolloConfig.clientVersion,
      cache,
      link,
      queryDeduplication: false,
      connectToDevTools: false,
      defaultOptions: {
        query: {
          fetchPolicy: ApolloConfig.enableCache ? "cache-first" : "no-cache"
        },
        watchQuery: {
          fetchPolicy: ApolloConfig.enableCache ? "cache-and-network" : "no-cache"
        }
      }
    });
    return client;
  }
  createQueryTask(params) {
    assert(
      this.allowQueries,
      `Queries are not allowed by the adapter.`
    );
    const task = new ApolloQueryTask({
      client: this.client,
      params
    });
    return task;
  }
  async query(params) {
    const task = this.createQueryTask(params);
    return task.run();
  }
  createMutationTask(params) {
    assert(
      this.allowMutations,
      `Mutations are not allowed by the adapter.`
    );
    const task = new ApolloMutationTask({
      client: this.client,
      params
    });
    return task;
  }
  async mutate(params) {
    const task = this.createMutationTask(params);
    return task.run();
  }
}
function timeRegionsOverlapStrict(a2, b) {
  return a2.startTime < b.endTime && a2.endTime > b.startTime;
}
function momentsAreConnected(a2, b) {
  return a2.id !== b.id && timeRegionsOverlapStrict(a2, b);
}
async function fetchMoments() {
  const query = gql`

    query getMoments(
      $jobId: ID!
      $first: Int
    ) {
      getJob(id: $jobId) {
        media {
          hls {
            url
            signedUrl
            cookieCredentials {
              name
              value
              path
              domain
            }
            policy {
              resource
              expiresAt
              expiresIn
            }
          }
          basic
          subtitle
          liveStreamUrl
        }
      }

      getMoments(
        jobId: $jobId
        first: $first
      ) {
        edges {
          node {
            id
            jobId
            job {
              id
              source {
                url
              }
            }
            trackId
            clipType
            name
            startTime
            endTime
            createdAt
            createdBy
            lastUpdatedAt
            lastUpdatedBy
            archivedAt
            source
            momentType
            description
            importance
            sentiment
            keywords
            speakerId
            languageCode
          }
          cursor
        }
        pageInfo {
          totalCount
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
      }
    }
  `;
  const apollo = new ApolloAdapter({ allowedOperationTypes: [GraphQlOperationType.Query] });
  const [res, err] = await apollo.query({
    query,
    variables: {
      jobId: "7859738d-ffb4-4489-9412-a0b1fa5f174a"
    }
  });
  if (err)
    throw new Error("Failed to fetch");
  const moments = ((res == null ? void 0 : res.getMoments.edges.map((edge) => edge.node)) ?? []).sort((a2, b) => a2.startTime - b.startTime);
  return moments;
}
async function fetchTopics() {
  const moments = await fetchMoments();
  return moments.filter((moment) => moment.clipType === ClipType.Topic || moment.clipType === ClipType.SubTopic);
}
function isCurrentMoment(moment, currentTime) {
  const { startTime, endTime } = moment;
  const isCurrent = isDefined(startTime) && isDefined(endTime) && currentTime >= startTime && currentTime < endTime;
  return isCurrent;
}
class MomentClickEvent extends Event {
  constructor(moment) {
    super("moment-click", { bubbles: true, composed: true });
    this.moment = moment;
  }
}
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$3(target, key, result);
  return result;
};
let TranscriptsElement = class extends ObserverLitElement {
  constructor() {
    super();
    this.currentTime = 0;
    this.moments = observable.array([], { deep: false });
    makeObservable(this);
  }
  get transcripts() {
    return this.moments.filter((moment) => moment.clipType === ClipType.Transcript);
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const { transcripts, currentTime } = this;
    return x`
      <h2 id="heading">
        CLIPr Transcripts
      </h2>

      <div id="transcripts">
        ${transcripts.map((moment) => {
      return x`
            <div class="transcript" 
              data-moment-id=${moment.id}
              aria-current=${isCurrentMoment(moment, currentTime)}
              @click=${(evt) => this.handleMomentClick(evt, moment)}>
              
              ${moment.description} 
            </div>
          `;
    })} 
      </div>
    `;
  }
  updated() {
    var _a2;
    const { transcripts, currentTime } = this;
    const currentMoment = transcripts.find((moment) => isCurrentMoment(moment, currentTime));
    if (currentMoment) {
      const query = `[data-moment-id="${currentMoment.id}"]`;
      const momentElem = (_a2 = this.renderRoot) == null ? void 0 : _a2.querySelector(query);
      if (momentElem)
        momentElem.scrollIntoView();
    }
  }
  async init() {
    const moments = await fetchMoments();
    this.moments.replace(moments);
  }
  handleMomentClick(evt, topic) {
    const event = new MomentClickEvent(topic);
    this.dispatchEvent(event);
  }
};
TranscriptsElement.shadowRootOptions = {
  ...s.shadowRootOptions,
  mode: "closed"
};
TranscriptsElement.styles = r$2(styles$3);
__decorateClass$3([
  n$1({ type: Number, attribute: "current-time" })
], TranscriptsElement.prototype, "currentTime", 2);
__decorateClass$3([
  computed
], TranscriptsElement.prototype, "transcripts", 1);
__decorateClass$3([
  action
], TranscriptsElement.prototype, "handleMomentClick", 1);
TranscriptsElement = __decorateClass$3([
  e$1("clipr-transcripts")
], TranscriptsElement);
const styles$2 = '@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Prompt:wght@300;400;500;600;700;800&display=swap");\n:host {\n  display: grid;\n  grid-template-columns: [player] 2fr [right] 1fr;\n  grid-template-rows: [player] 2fr [bottom] 1fr;\n  gap: 16px;\n  padding: 5vh 5vw;\n  height: 90vh;\n}\n.player-cell {\n  grid-column: player;\n  grid-row: player;\n  min-width: 0;\n  min-height: 0;\n}\n.right-cell {\n  grid-column: right;\n  grid-row: player/span 2;\n  min-width: 0;\n  min-height: 0;\n}\n.bottom-cell {\n  grid-column: player;\n  grid-row: bottom;\n  min-width: 0;\n  min-height: 0;\n}';
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$2(target, key, result);
  return result;
};
let TheaterElement = class extends ObserverLitElement {
  constructor() {
    super();
    this.player = null;
    this.handlePlayerSlotChange = (evt) => {
      const videojs = window["videojs"];
      if (videojs) {
        const firstVideoElem = this.getElementsByTagName("video")[0];
        if (firstVideoElem) {
          const player = videojs.getPlayer(firstVideoElem);
          if (player) {
            if (this.player)
              this.player.off("timeupdate", this.handleVideoTimeUpdate);
            this.player = player;
            player.on("timeupdate", this.handleVideoTimeUpdate);
          }
        }
      }
    };
    this.handleVideoTimeUpdate = () => {
      var _a2;
      const currentTime = (_a2 = this.player) == null ? void 0 : _a2.currentTime();
      if (typeof currentTime !== "number")
        return;
      const elems = [
        ...this.getElementsByTagName("clipr-transcripts"),
        ...this.getElementsByTagName("clipr-captions"),
        ...this.getElementsByTagName("clipr-topics")
      ];
      for (const elem of elems)
        elem.currentTime = currentTime;
    };
    makeObservable(this);
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("moment-click", (event) => {
      var _a2;
      (_a2 = this.player) == null ? void 0 : _a2.currentTime(event.moment.startTime);
    });
  }
  render() {
    return x`
      <div class="player-cell">
        <slot name="player" @slotchange=${this.handlePlayerSlotChange}></slot>
      </div>

      <div class="right-cell">
        <slot name="right"></slot>
      </div>

      <div class="bottom-cell">
        <slot name="bottom"></slot>
      </div>
    `;
  }
};
TheaterElement.shadowRootOptions = {
  ...s.shadowRootOptions,
  mode: "closed"
};
TheaterElement.styles = r$2(styles$2);
TheaterElement = __decorateClass$2([
  e$1("clipr-theater")
], TheaterElement);
const styles$1 = ":host {\n  font-family: Poppins, sans-serif;\n  background-color: #ECEFF1;\n  color: black;\n  font-size: 16px;\n  padding: 16px;\n  box-sizing: border-box;\n  height: 100%;\n  display: grid;\n  grid-template-rows: [heading] min-content [content] 1fr;\n}\n\n#topics {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow-y: auto;\n}\n\n.topic {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.topic[aria-current=true] .topic-name {\n  background-color: #EF6C00;\n  color: white;\n}\n\n.topic-name {\n  padding: 8px;\n  background-color: #B0BEC5;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: opacity 0.1s;\n}\n.topic-name:hover {\n  opacity: 0.75;\n}\n\n.topic-sub-topics {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.sub-topic {\n  margin-left: 24px;\n}\n.sub-topic[aria-current=true] .sub-topic-name {\n  background-color: #F57C00;\n  color: white;\n}\n\n.sub-topic-name {\n  padding: 8px;\n  background-color: #CFD8DC;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: opacity 0.1s;\n}\n.sub-topic-name:hover {\n  opacity: 0.75;\n}";
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp$1(target, key, result);
  return result;
};
let TopicsElement = class extends ObserverLitElement {
  constructor() {
    super();
    this.currentTime = 0;
    this.moments = observable.array([], { deep: false });
    makeObservable(this);
  }
  get topics() {
    return this.moments.filter((moment) => moment.clipType === ClipType.Topic);
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const { moments, topics, currentTime } = this;
    return x`
      <h2 id="heading">
        CLIPr Topics
      </h2>

      <div id="topics">
        ${topics.map((topic) => {
      const subTopics = moments.filter((mom) => momentsAreConnected(mom, topic));
      const subTopicHtml = subTopics.length > 0 ? x`
            <div class="topic-sub-topics">
              ${subTopics.map((subTopic) => {
        return x`
                  <div class="sub-topic"
                    aria-current=${isCurrentMoment(subTopic, currentTime)}>

                    <div class="sub-topic-name"
                      @click=${(evt) => this.handleMomentClick(evt, subTopic)}>

                      ${subTopic.name}
                    </div>
                  </div>
                `;
      })}
            </div>` : null;
      return x`
            <div class="topic" 
              aria-current=${isCurrentMoment(topic, currentTime)}>

              <div class="topic-name"
                @click=${(evt) => this.handleMomentClick(evt, topic)}>

                ${topic.name}
              </div> 
              
              ${subTopicHtml}
            </div>
          `;
    })}
      </div>
    `;
  }
  async init() {
    const moments = await fetchTopics();
    this.moments.replace(moments);
  }
  handleMomentClick(evt, topic) {
    const event = new MomentClickEvent(topic);
    this.dispatchEvent(event);
  }
};
TopicsElement.shadowRootOptions = {
  ...s.shadowRootOptions,
  mode: "closed"
};
TopicsElement.styles = r$2(styles$1);
__decorateClass$1([
  n$1({ type: Number, attribute: "current-time" })
], TopicsElement.prototype, "currentTime", 2);
__decorateClass$1([
  computed
], TopicsElement.prototype, "topics", 1);
__decorateClass$1([
  action
], TopicsElement.prototype, "handleMomentClick", 1);
TopicsElement = __decorateClass$1([
  e$1("clipr-topics")
], TopicsElement);
const styles = ":host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n}\n\n.caption-container {\n  max-width: 80%;\n  transition: opacity 0.05s, visibility 0.05s;\n}\n.caption-container[aria-hidden=true] {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.caption-text {\n  background-color: rgba(0, 0, 0, 0.6);\n  padding: 16px;\n  text-align: center;\n}";
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
    if (decorator = decorators[i2])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
let CaptionsElement = class extends ObserverLitElement {
  constructor() {
    super();
    this.currentTime = 0;
    this.moments = observable.array();
    makeObservable(this);
  }
  get transcripts() {
    return this.moments.filter((moment) => moment.clipType === ClipType.Transcript);
  }
  connectedCallback() {
    super.connectedCallback();
    this.init();
  }
  render() {
    const { transcripts, currentTime } = this;
    const currMom = transcripts.find((moment) => isCurrentMoment(moment, currentTime));
    return x`
      <div class="caption-container" aria-hidden=${!currMom}>
        <div class="caption-text">
          ${currMom == null ? void 0 : currMom.description}
        </div>
      </div>
    `;
  }
  async init() {
    const moments = await fetchMoments();
    this.moments.replace(moments);
  }
};
CaptionsElement.shadowRootOptions = {
  ...s.shadowRootOptions,
  mode: "closed"
};
CaptionsElement.styles = r$2(styles);
__decorateClass([
  n$1({ type: Number, attribute: "current-time" })
], CaptionsElement.prototype, "currentTime", 2);
__decorateClass([
  computed
], CaptionsElement.prototype, "transcripts", 1);
CaptionsElement = __decorateClass([
  e$1("clipr-captions")
], CaptionsElement);
function install() {
  if (typeof window === "undefined")
    return;
  const videojs = window["videojs"];
  const Component = videojs.getComponent("Component");
  class VideoJsCaptionsComponent extends Component {
    constructor(player) {
      super(player);
      player.on("timeupdate", () => {
        const elem = this.el();
        if (elem)
          elem.currentTime = player.currentTime();
      });
    }
    createEl() {
      const elem = document.createElement("clipr-captions");
      return elem;
    }
  }
  videojs.registerComponent("CLIPrCaptions", VideoJsCaptionsComponent);
}
install();
const styleElem = document.createElement("style");
styleElem.innerHTML = `
html, body { height: 100%; margin: 0; padding: 0; }
.video-js { width: 100%; height: 100%; }
`;
document.head.appendChild(styleElem);
