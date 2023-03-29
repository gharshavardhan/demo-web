"use strict";
exports.id = 489;
exports.ids = [489];
exports.modules = {

/***/ 9489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FullFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/icons-material/CallOutlined"
var CallOutlined_ = __webpack_require__(4214);
var CallOutlined_default = /*#__PURE__*/__webpack_require__.n(CallOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/EmailOutlined"
var EmailOutlined_ = __webpack_require__(5386);
var EmailOutlined_default = /*#__PURE__*/__webpack_require__.n(EmailOutlined_);
// EXTERNAL MODULE: external "@mui/icons-material/LocationOnOutlined"
var LocationOnOutlined_ = __webpack_require__(3804);
var LocationOnOutlined_default = /*#__PURE__*/__webpack_require__.n(LocationOnOutlined_);
;// CONCATENATED MODULE: ./src/components/Copyright.tsx




function Copyright() {
    return /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
        className: "copyright",
        textAlign: "center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
            variant: "caption",
            children: [
                "\xa9 ",
                new Date().getFullYear(),
                " Drutaya Semiconductors Pvt. Ltd. All rights reserved."
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Footer.tsx












const StyledBox = (0,styles_.styled)((Box_default()))(({ theme  })=>({
        "&.footer": {
            padding: "24px",
            background: "#0D2727",
            color: "#fff",
            [theme.breakpoints.down("md")]: {
                textAlign: "center",
                flexDirection: "column",
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingBottom: "48px"
            },
            "& .footerGrid": {
                paddingLeft: 0,
                textAlign: "left",
                flexDirection: "row-reverse",
                [theme.breakpoints.down("md")]: {
                    flexDirection: "column-reverse"
                }
            },
            "& .copyright": {
                paddingTop: "30px",
                opacity: ".7",
                [theme.breakpoints.down("md")]: {
                    paddingTop: "16px"
                }
            },
            "& .divider": {
                background: "#fff",
                opacity: 0.2,
                margin: theme.spacing(2, 0)
            },
            "& .level1Links": {
                paddingBottom: "24px",
                [theme.breakpoints.down("md")]: {
                    paddingTop: "56px",
                    paddingBottom: "36px"
                },
                "& a": {
                    color: "#fff",
                    textDecoration: "none"
                },
                "& .links": {
                    paddingRight: "24px",
                    display: "inline",
                    [theme.breakpoints.down("md")]: {
                        display: "block",
                        paddingRight: 0
                    },
                    "& h3": {
                        display: "inline",
                        [theme.breakpoints.down("md")]: {
                            display: "block"
                        }
                    },
                    "&.social-icons": {
                        display: "inline-block",
                        paddingTop: theme.spacing(1),
                        paddingRight: "0px",
                        [theme.breakpoints.up("md")]: {
                            float: "right"
                        }
                    }
                }
            }
        }
    }));
function FullFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledBox, {
        className: "footer",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Container_default()), {
            disableGutters: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    spacing: 5,
                    className: "footerGrid",
                    alignItems: "start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            className: "level1Links",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                className: "address",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                        container: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                            item: true,
                                            xs: 12,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h5",
                                                        children: "Contact Us"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                                        variant: "fullWidth",
                                                        className: "divider",
                                                        light: true
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 2,
                                        alignItems: "center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((CallOutlined_default()), {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "h6",
                                                        children: "Phone"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                        variant: "body1",
                                                        children: "+918970377121"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                        py: 1,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                            container: true,
                                            spacing: 2,
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                    item: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((EmailOutlined_default()), {})
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                    item: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            children: "Email"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:info@drutaya.com",
                                                                children: "info@drutaya.com"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                    item: true,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            children: "Careers"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body1",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:careers@drutaya.com",
                                                                children: "careers@drutaya.com"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                        container: true,
                                        spacing: 2,
                                        alignItems: "start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                                                item: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((LocationOnOutlined_default()), {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                                                item: true,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "h6",
                                                            children: "Address"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                            variant: "body1",
                                                            children: "Drutaya Semiconductors Pvt. Ltd."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                                                        variant: "body1",
                                                        component: "div",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                children: "Ajmera Aditya Summit, 5th Floor, "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                children: "3rd Cross Road, 3rd Block, "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                children: "Koramangala, Bangalore - 560034, "
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                                children: "India."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "h5",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                        variant: "fullWidth",
                                        className: "divider",
                                        light: true
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                        variant: "body1",
                                        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                variant: "fullWidth",
                                className: "divider",
                                light: true
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xs: 12,
                            md: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {})
                        })
                    ]
                })
            ]
        })
    });
}


/***/ })

};
;