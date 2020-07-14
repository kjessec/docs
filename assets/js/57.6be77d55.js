(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{433:function(a,t,s){"use strict";s.r(t);var e=s(5),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"validator-tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#validator-tasks"}},[a._v("#")]),a._v(" Validator Tasks")]),a._v(" "),s("h2",{attrs:{id:"edit-validator-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-validator-description"}},[a._v("#")]),a._v(" Edit Validator Description")]),a._v(" "),s("p",[a._v("You can edit your validator's public description. This info is to identify your validator, and will be relied on by delegators to decide which validators to stake to. Make sure to provide input for every flag below, otherwise the field will default to empty ("),s("code",[a._v("--moniker")]),a._v(" defaults to the machine name).")]),a._v(" "),s("p",[a._v("The "),s("code",[a._v("--identity")]),a._v(" can be used as to verify identity with systems like Keybase or UPort. When using with Keybase "),s("code",[a._v("--identity")]),a._v(" should be populated with a 16-digit string that is generated with a "),s("a",{attrs:{href:"https://keybase.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("keybase.io"),s("OutboundLink")],1),a._v(" account. It's a cryptographically secure method of verifying your identity across multiple online networks. The Keybase API allows us to retrieve your Keybase avatar. This is how you can add a logo to your validator profile.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli tx staking edit-validator "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --moniker"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"choose a moniker"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --website"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://terra.money"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --identity"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("6A0D65E29A4CBC8E "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --details"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"To infinity and beyond!"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --commission-rate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"0.10"')]),a._v("\n")])])]),s("p",[s("strong",[a._v("Note")]),a._v(": The "),s("code",[a._v("commission-rate")]),a._v(" value must adhere to the following invariants:")]),a._v(" "),s("ul",[s("li",[a._v("Must be between 0 and the validator's "),s("code",[a._v("commission-max-rate")])]),a._v(" "),s("li",[a._v("Must not exceed the validator's "),s("code",[a._v("commission-max-change-rate")]),a._v(" which is maximum % point change rate "),s("strong",[a._v("per day")]),a._v(". In other words, a validator can only change its commission once per day and within "),s("code",[a._v("commission-max-change-rate")]),a._v(" bounds.")])]),a._v(" "),s("h2",{attrs:{id:"view-validator-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#view-validator-description"}},[a._v("#")]),a._v(" View Validator Description")]),a._v(" "),s("p",[a._v("View the validator's information with this command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query staking validator "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_terra"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"track-validator-signing-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#track-validator-signing-information"}},[a._v("#")]),a._v(" Track Validator Signing Information")]),a._v(" "),s("p",[a._v("In order to keep track of a validator's signatures in the past you can do so by using the "),s("code",[a._v("signing-info")]),a._v(" command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli query slashing signing-info "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("validator-pubkey"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"unjail-validator"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unjail-validator"}},[a._v("#")]),a._v(" Unjail Validator")]),a._v(" "),s("p",[a._v('When a validator is "jailed" for downtime, you must submit an '),s("code",[a._v("Unjail")]),a._v(" transaction from the operator account in order to be able to get block proposer rewards again (depends on the zone fee distribution).")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("terracli tx slashing unjail "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);