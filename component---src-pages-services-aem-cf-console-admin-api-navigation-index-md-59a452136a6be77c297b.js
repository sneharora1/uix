"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[8893],{16249:function(n,t,e){e.r(t),e.d(t,{_frontmatter:function(){return c},default:function(){return s}});var a=e(87462),i=e(45987),o=(e(15007),e(64983)),r=e(91515);const p=["components"],c={},m={_frontmatter:c},d=r.Z;function s(n){let{components:t}=n,e=(0,i.Z)(n,p);return(0,o.mdx)(d,(0,a.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"navigation"},"Navigation"),(0,o.mdx)("p",null,"Describes basic methods for navigating within an extension."),(0,o.mdx)("h2",{id:"api-to-open-content-fragment-from-an-extension"},"API to open Content Fragment from an extension"),(0,o.mdx)("p",null,"Default editor for your organization will be used to open Content Fragment."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import { useEffect } from "react";\nimport { Text } from "@adobe/react-spectrum"\nimport { extensionId } from "./Constants"\nimport { register } from "@adobe/uix-guest";\n\nfunction ExtensionRegistration() {\n    useEffect(() => {\n        const init = async () => {\n            const registrationConfig = {\n                id: extensionId,\n                methods: {\n                    actionBar: {\n                        getButtons() {\n                            return [\n                                {\n                                    id: "example.open_in_editor",\n                                    label: "UIX Open In Editor",\n                                    icon: \'Export\',\n                                    variant: "primary",\n                                    onClick: (selections) => {\n                                        console.log("UIX Open In Editor has been pressed.");\n                                        console.log(selections[0].id);\n                                        // or any other content fragment path\n                                        \n                                        guestConnection.host.navigation.openEditor(selections[0].id);\n                                    },\n                                },\n                            ];\n                        },\n                    },\n                },\n            };\n            const guestConnection = await register(registrationConfig);\n        }\n        init().catch(console.error)\n    }, []);\n    return <Text>IFrame for integration with Host (AEM)...</Text>\n}\n\nexport default ExtensionRegistration;\n')),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/0e5ccff228af617c89713849ac841b1a/5530d/navigation.admin.open_in_editor.webp 320w","/uix/static/0e5ccff228af617c89713849ac841b1a/0c8fb/navigation.admin.open_in_editor.webp 640w","/uix/static/0e5ccff228af617c89713849ac841b1a/94b1e/navigation.admin.open_in_editor.webp 1280w","/uix/static/0e5ccff228af617c89713849ac841b1a/0b34d/navigation.admin.open_in_editor.webp 1920w","/uix/static/0e5ccff228af617c89713849ac841b1a/a5062/navigation.admin.open_in_editor.webp 2478w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/uix/static/0e5ccff228af617c89713849ac841b1a/dd4a7/navigation.admin.open_in_editor.png 320w","/uix/static/0e5ccff228af617c89713849ac841b1a/0f09e/navigation.admin.open_in_editor.png 640w","/uix/static/0e5ccff228af617c89713849ac841b1a/bbbf7/navigation.admin.open_in_editor.png 1280w","/uix/static/0e5ccff228af617c89713849ac841b1a/ac7a9/navigation.admin.open_in_editor.png 1920w","/uix/static/0e5ccff228af617c89713849ac841b1a/9c596/navigation.admin.open_in_editor.png 2478w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/0e5ccff228af617c89713849ac841b1a/bbbf7/navigation.admin.open_in_editor.png",alt:"navigation admin open in editor",title:"navigation admin open in editor",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"API Reference")),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Field"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Required"),(0,o.mdx)("th",{parentName:"tr",align:null},"Default"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"fragmentPath"),(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"string")),(0,o.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null},"The path of the CF to be open.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-console-admin-api-navigation-index-md-59a452136a6be77c297b.js.map