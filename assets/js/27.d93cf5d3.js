(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{402:function(a,t,e){"use strict";e.r(t);var s=e(5),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"running-a-local-testnet"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-a-local-testnet"}},[a._v("#")]),a._v(" Running a Local Testnet")]),a._v(" "),e("p",[a._v("After you've gotten the latest version of Terra Core installed, you can set up a private Terra network to get your bearings in running a Terra full node before "),e("a",{attrs:{href:""}},[a._v("joining an existing network")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"single-node-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-node-setup"}},[a._v("#")]),a._v(" Single Node Setup")]),a._v(" "),e("p",[a._v("The simplest Terra network you can set up will be a local testnet with just a single node. You will create one account and be the sole validator signing blocks for the network.")]),a._v(" "),e("h3",{attrs:{id:"step-1-create-network-and-account"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-network-and-account"}},[a._v("#")]),a._v(" Step 1. Create network and account")]),a._v(" "),e("p",[a._v("First, initialize your genesis file that will bootstrap the network. Set a name for your local testnet, and provide a moniker to refer to your node.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ terrad init --chain-id"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("testnet_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("node_moniker"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("You will need a Terra account to start. You can generate one with:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ terracli keys "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("h3",{attrs:{id:"step-2-add-account-to-genesis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-add-account-to-genesis"}},[a._v("#")]),a._v(" Step 2. Add account to genesis")]),a._v(" "),e("p",[a._v("Next, you need to add your account to the genesis. The following commands add your account and set the initial balance:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ terrad add-genesis-account "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("terracli keys show "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("account_name"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" -a"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v(" 100000000uluna,1000usd\n$ terrad gentx --name my_account --amount 10000000uluna\n$ terrad collect-gentxs\n")])])]),e("h3",{attrs:{id:"step-3-run-terra-daemon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-run-terra-daemon"}},[a._v("#")]),a._v(" Step 3. Run Terra daemon")]),a._v(" "),e("p",[a._v("Now, you can start your private Terra network:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("$ terrad start\n")])])]),e("p",[a._v("Your "),e("code",[a._v("terrad")]),a._v(" node should now be running a node on "),e("code",[a._v("tcp://localhost:26656")]),a._v(", listening for incoming transactions and signing blocks. You've successfully set up your local Terra network!")])])}),[],!1,null,null,null);t.default=r.exports}}]);