"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 4185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavOptions)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8442);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3819);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7934);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7163);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6248);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2845);
/* harmony import */ var _mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_9__);










const NavIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)("div")(({ theme  })=>{
    return `
        padding-left: ${theme.spacing(2)};
        text-align: right;
        color: #333;
        .btn-nav {
            width: 32px;
            height: 32px;
            transform: rotate(0deg);
            transition: .5s ease-in-out;
            cursor: pointer;

            &.close {
                color: white;
            }
        }
    `;
});
const StyledDrawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_5___default()))(({ theme  })=>{
    return `
        flex-shrink: 0;

        .links {

            button {
                display: block;
                background: none;
                padding-left: 0;
                &:focus {
                    text-decoration: underline;
                }
                &:active {
                    text-decoration: none;
                }
            }

            .MuiTypography-h3 {
                display: block;
                color: #fff;
                text-align: left;
                width: 100%;
            }
        }

        .links.top {
            margin-top: ${theme.spacing(5)};
        }

        .divider {
            padding: 0 100px;
            margin: ${theme.spacing(1, 0)};
            background: #fff;
            opacity: 0.2;
        }

        .nav-drawer-paper {
            width: 300px;
            background: #333;
            color: #fff;
            padding: ${theme.spacing(4, 3)};

            .MuiDrawer-paperAnchorLeft {
                left: auto;
                right: 0;
            }
            
        }

        a {
            text-decoration: none;
        }

        & .buttons-ct {
            & .button-link {
                margin-top: ${theme.spacing(2)};
                a {
                    text-decoration: none;
                }
                & .login-btn {
                    border: 1px solid #fff;
                }
            }
            .link {
                margin: ${theme.spacing(0, 2)};

                a {
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                        text-decoration: none;
                        cursor: pointer;
                    }
                }

                button {
                    cursor: pointer;
                    color: #fff;
                    background: none;
                    text-transform: none;
                    font-size: ${theme.spacing(2)};
                    padding: ${theme.spacing(2, 0)};
                    &:hover {
                        color: #2774EE;
                    }
                    &:focus {
                        color: #2774EE;
                        text-decoration: none;
                    }
                    &:active {
                        color: #2774EE;
                        text-decoration: none;
                    }

                    p {
                        font-weight: 400;
                        font-size: 1.25em;
                    }
                }
            }
        }
    `;
});
function NavOptions() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleDrawer = (bool)=>{
        setOpen(bool);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavIcon, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                    color: "inherit",
                    "aria-label": "open drawer",
                    className: "btn-nav menu",
                    disableRipple: true,
                    disableFocusRipple: true,
                    onClick: ()=>{
                        handleDrawer(!open);
                    },
                    size: "large",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {})
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledDrawer, {
                variant: "temporary",
                anchor: "right",
                open: open,
                classes: {
                    paper: "nav-drawer-paper"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavIcon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {
                            "aria-label": "close drawer",
                            className: "btn-nav close",
                            disableRipple: true,
                            disableFocusRipple: true,
                            onClick: ()=>{
                                handleDrawer(false);
                            },
                            size: "large",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_CloseOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {})
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                        className: "buttons-ct",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "link",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    disableRipple: true,
                                    disableFocusRipple: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "body1",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "link",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    disableRipple: true,
                                    disableFocusRipple: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "body1",
                                        children: "About Us"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "link",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    disableRipple: true,
                                    disableFocusRipple: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        variant: "body1",
                                        children: "Services"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;