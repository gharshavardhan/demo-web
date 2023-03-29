"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 3978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LandingCarousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3622);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9980);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7930);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_6__);







const AutoPlaySwipeableViews = (0,react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_6__.autoPlay)((react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default()));
const highlightColor = "#cc2d28";
const members = [
    {
        image: "/img/slide-1.jpg",
        header: "There are many variations of passages of Lorem Ipsum available, but the majority",
        subheader: "passages of Lorem Ipsum available"
    },
    {
        image: "/img/slide-2.jpg",
        header: "All the Lorem Ipsum generators on the Internet tend to repeat predefined",
        subheader: "on the Internet tend to repeat."
    },
    {
        image: "/img/slide-3.jpg",
        header: "VerThe standard chunk of Lorem Ipsumonica",
        subheader: "Never chunk of Lorem Ipsumonica! Thank!!!"
    }
];
const PREFIX = "LandingCarousel";
const classes = {
    mainCt: `${PREFIX}-mainCt`,
    root: `${PREFIX}-root`,
    about: `${PREFIX}-about`,
    quote: `${PREFIX}-quote`,
    savings: `${PREFIX}-savings`,
    impact: `${PREFIX}-impact`,
    carouselRoot: `${PREFIX}-carouselRoot`,
    mwDotsRow: `${PREFIX}-mwDotsRow`,
    buttonArrow: `${PREFIX}-buttonArrow`,
    right: `${PREFIX}-right`,
    landingCarouselRoot: `${PREFIX}-landingCarouselRoot`,
    legal: `${PREFIX}-legal`
};
const SlideBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        [`&.${classes.root}`]: {
            padding: theme.spacing(4),
            [theme.breakpoints.down("lg")]: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2)
            },
            "& .background-img": {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50%",
                [theme.breakpoints.down("lg")]: {
                    height: "400px"
                }
            }
        }
    }));
const CarouselBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        [`&.${classes.carouselRoot}`]: {
            flexGrow: 1,
            position: "relative",
            transform: "matrix(-1, 0, 0, 1, 0, 0)",
            "& .carousel-ct": {
                position: "absolute",
                top: "50%",
                width: "100%",
                "& .MuiMobileStepper-dots": {
                    alignItems: "center",
                    "& .MuiMobileStepper-dotActive": {
                        color: highlightColor,
                        backgroundColor: highlightColor
                    }
                },
                "& button": {
                    display: "none"
                }
            },
            "&& > div": {
                transform: "matrix(-1, 0, 0, 1, 0, 0)"
            }
        }
    }));
const LandingCarouselBox = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box)(({ theme  })=>({
        [`& .${classes.landingCarouselRoot}`]: {
            borderRadius: "12px",
            backgroundColor: "#fff",
            minHeight: "740px",
            marginBottom: "24px",
            paddingTop: "40px",
            backgroundImage: "url('/img/blue-hexagon.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            padding: "32px 0",
            "& img": {
                width: "100%",
                height: "100%",
                top: "40px",
                position: "relative",
                right: "250px",
                [theme.breakpoints.down("lg")]: {
                    right: 0
                }
            },
            [theme.breakpoints.down("lg")]: {
                margin: "48px auto 0px"
            },
            [theme.breakpoints.down("md")]: {
                borderRadius: 0,
                margin: "48px -16px 0px"
            },
            [`& .${classes.mwDotsRow}`]: {
                background: "transparent",
                color: highlightColor,
                width: "300px",
                margin: "0 auto",
                paddingTop: "80px",
                "& .MuiMobileStepper-dots": {
                    alignItems: "center",
                    "& .MuiMobileStepper-dotActive": {
                        color: highlightColor,
                        backgroundColor: highlightColor
                    }
                }
            },
            [`& .${classes.buttonArrow}`]: {
                border: `2px solid ${highlightColor}`,
                borderRadius: "50%",
                minWidth: " 32px",
                minHeight: "32px",
                padding: "4px",
                color: highlightColor
            },
            [`& .${classes.right}`]: {
                transform: "rotate(-180deg)"
            }
        },
        [`& .${classes.legal}`]: {
            maxWidth: "540px",
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(5),
            [theme.breakpoints.down("md")]: {
                backgroundColor: "#fff",
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                marginRight: theme.spacing(-2),
                marginLeft: theme.spacing(-2)
            }
        }
    }));
function Slide({ index  }) {
    const user = members[index];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SlideBox, {
        className: classes.root,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                container: true,
                spacing: 5,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h4",
                                children: user?.header
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
                                variant: "h6",
                                pt: 2,
                                children: user?.subheader
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                        item: true,
                        xs: 12,
                        md: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/img/semiconductor-vector.png",
                                priority: true,
                                alt: "Microchip",
                                width: "400",
                                height: "400"
                            })
                        })
                    })
                ]
            })
        })
    });
}
function Carousel({ maxSteps , children  }) {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleNext = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep + 1);
    };
    const handleBack = ()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep - 1);
    };
    const handleStepChange = (step)=>{
        setActiveStep(step);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CarouselBox, {
                className: classes.carouselRoot,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AutoPlaySwipeableViews, {
                    axis: theme.direction === "rtl" ? "x-reverse" : "x",
                    index: activeStep,
                    onChangeIndex: handleStepChange,
                    enableMouseEvents: true,
                    interval: 5000,
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: "carousel-ct",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.MobileStepper, {
                    steps: maxSteps,
                    variant: "dots",
                    position: "static",
                    activeStep: activeStep,
                    className: classes.mwDotsRow,
                    nextButton: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        size: "small",
                        onClick: handleNext,
                        className: classes.buttonArrow,
                        disabled: activeStep === maxSteps - 1,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small",
                            className: classes.right
                        })
                    }),
                    backButton: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        size: "small",
                        onClick: handleBack,
                        className: classes.buttonArrow,
                        disabled: activeStep === 0,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default()), {
                            fontSize: "small"
                        })
                    })
                })
            })
        ]
    });
}
function LandingCarousel() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LandingCarouselBox, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
                className: classes.landingCarouselRoot,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Carousel, {
                    maxSteps: 3,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                            index: 0
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                            index: 1
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                            index: 2
                        })
                    ]
                })
            })
        })
    });
}


/***/ })

};
;