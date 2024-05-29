(function (designSystem, React, reactRedux, styledComponents, adminjs, FeatherIcons) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var React__default = /*#__PURE__*/_interopDefault(React);
    var FeatherIcons__namespace = /*#__PURE__*/_interopNamespace(FeatherIcons);

    const TopBar = () => {
      const versions = reactRedux.useSelector(state => state.versions);
      const GITHUB_URL = window.AdminJS.env.GITHUB_URL;
      const SLACK_URL = window.AdminJS.env.SLACK_URL;
      const DOCUMENTATION_URL = window.AdminJS.env.DOCUMENTATION_URL;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true,
        flexGrow: 1,
        justifyContent: "end",
        alignItems: "center"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        ml: "xl",
        mr: "auto"
      }, versions.admin), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        color: "text",
        as: "a",
        href: SLACK_URL,
        target: "_blank"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "Slack"
      }), "Slack"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        color: "text",
        as: "a",
        href: GITHUB_URL,
        target: "_blank"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "GitHub"
      }), "GitHub"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        color: "text",
        as: "a",
        href: DOCUMENTATION_URL,
        target: "_blank"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "BookOpen"
      }), "Documentation"));
    };

    const AuthUsers = [{
      email: 'admin@example.com',
      password: 'password',
      title: 'Admin',
      theme: 'light'
    }, {
      email: 'dark@example.com',
      password: 'password',
      title: 'AdminJS dark theme',
      theme: 'dark'
    }, {
      email: 'no-sidebar@example.com',
      password: 'password',
      title: 'AdminJS no-sidebar theme',
      theme: 'no-sidebar'
    }, {
      email: 'custom@example.com',
      password: 'password',
      title: 'AdminJS custom theme',
      theme: 'custom-theme'
    }];

    const Wrapper$1 = styledComponents.styled(designSystem.Box)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
    const StyledLogo = styledComponents.styled.img`
  max-width: 200px;
  margin: ${designSystem.themeGet('space', 'md')} 0;
`;
    styledComponents.styled(designSystem.Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & svg [stroke='#3B3552'] {
    stroke: rgba(255, 255, 255, 0.5);
  }
  & svg [fill='#3040D6'] {
    fill: rgba(255, 255, 255, 1);
  }
`;
    const Login = props => {
      const {
        action,
        errorMessage
      } = props;
      const {
        translateComponent,
        translateMessage
      } = adminjs.useTranslation();
      const [defaultUser] = AuthUsers;
      const branding = reactRedux.useSelector(state => state.branding);
      const message = `Email: ${defaultUser.email}\nPassword: ${defaultUser.password}`;
      return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(Wrapper$1, {
        flex: true,
        variant: "grey"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        bg: "white",
        height: "480px",
        flex: true,
        boxShadow: "login",
        width: [1, 2 / 3, 'auto']
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        as: "form",
        action: action,
        method: "POST",
        p: "x3",
        flexGrow: 1,
        width: ['100%', '100%', '480px']
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
        marginBottom: "xxl"
      }, branding.logo ? /*#__PURE__*/React__default.default.createElement(StyledLogo, {
        src: branding.logo,
        alt: branding.companyName
      }) : branding.companyName), /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
        my: "lg",
        message: message,
        variant: "info",
        style: {
          whiteSpace: 'pre-wrap'
        }
      }), errorMessage && ( /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
        my: "lg",
        message: errorMessage.split(' ').length > 1 ? errorMessage : translateMessage(errorMessage),
        variant: "danger"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        required: true
      }, translateComponent('Login.properties.email')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        name: "email",
        placeholder: translateComponent('Login.properties.email'),
        defaultValue: defaultUser.email
      })), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        required: true
      }, translateComponent('Login.properties.password')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        type: "password",
        name: "password",
        placeholder: translateComponent('Login.properties.password'),
        autoComplete: "new-password",
        defaultValue: defaultUser.password
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        mt: "xl",
        textAlign: "center"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "contained"
      }, translateComponent('Login.loginButton'))))), branding.withMadeWithLove ? ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mt: "xxl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.MadeWithLove, null))) : null));
    };

    const SidebarResourceSection = ({
      resources
    }) => {
      const elements = adminjs.useNavigationResources(resources);
      return /*#__PURE__*/React__default.default.createElement(designSystem.Navigation, {
        elements: elements
      });
    };

    const DontTouchThis = props => {
      const {
        record
      } = props;
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true,
        flexDirection: ['column', 'column', 'column', 'row'],
        style: {
          gap: 16
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container",
        boxShadow: "card"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H3, null, "Example of a simple page"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Where you can put almost everything like this:"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        as: "div"
      }, /*#__PURE__*/React__default.default.createElement("img", {
        src: "https://i.redd.it/rd39yuiy9ns21.jpg",
        alt: "stupid cat",
        width: 300
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container",
        boxShadow: "card"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Or (more likely), operate on a returned record:"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        maxHeight: 500,
        overflowY: "scroll"
      }, /*#__PURE__*/React__default.default.createElement("pre", {
        style: {
          fontFamily: 'monospace'
        }
      }, JSON.stringify(record, null, 2)))));
    };

    const DetailedStats = props => {
      return /*#__PURE__*/React__default.default.createElement(designSystem.DrawerContent, null, /*#__PURE__*/React__default.default.createElement(adminjs.ActionHeader, {
        ...props,
        omitActions: true
      }), /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
        mt: "xxl"
      }, "Custom action example"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Where you can do whatever you like..."));
    };

    const Thumb = props => {
      const {
        record,
        property
      } = props;
      const value = record.params[property.name];
      return /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: value ? 'ThumbsUp' : 'ThumbsDown'
      });
    };

    const api = new adminjs.ApiClient();
    const CustomPage = () => {
      const [text, setText] = React.useState();
      const addNotice = adminjs.useNotice();
      const {
        tc,
        tm,
        i18n: {
          language
        }
      } = adminjs.useTranslation();
      React.useEffect(() => {
        api.getPage({
          pageName: 'customPage'
        }).then(res => {
          setText(tm(res.data.text, {
            defaultValue: res.data.text
          }));
        });
      }, [language]);
      const sendSimpleNotice = () => addNotice({
        message: 'CustomPage.message',
        type: 'success'
      });
      const sendTranslatedNotice = () => addNotice({
        message: 'CustomPage.messageWithInterpolation',
        options: {
          someParams: ['param 1', 'param2'].join(', ')
        },
        body: ( /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, tm('CustomPage.message'), " ", /*#__PURE__*/React__default.default.createElement(designSystem.Link, null, tc('CustomPage.button'))))
      });
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "transparent"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H3, null, tc('CustomPage.header')), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true,
        flexDirection: "column",
        style: {
          gap: '1rem'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, tc('CustomPage.introduction')), text ? JSON.stringify(text, null, 2) : /*#__PURE__*/React__default.default.createElement(designSystem.Placeholder, {
        style: {
          width: 400,
          height: 14
        }
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, tc('CustomPage.ending'))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true,
        style: {
          gap: 16
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "contained",
        mt: "xl",
        onClick: sendSimpleNotice
      }, tc('CustomPage.button')), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "contained",
        mt: "xl",
        onClick: sendTranslatedNotice
      }, tc('CustomPage.noticeWithInterpolation')))));
    };

    const BlogPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return blogPage; }));
    const ButtonsPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return buttonsPage; }));
    const FormPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return formPage; }));
    const IconsPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return iconsPage; }));
    const IllustrationPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return illustrationsPage; }));
    const MessagesPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return messagesPage; }));
    const ModalPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return modalPage; }));
    const TabsPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return tabsPage; }));
    const TypographyPage$1 = /*#__PURE__*/React.lazy(() => Promise.resolve().then(function () { return typographyPage; }));
    const DesignSystemPage = () => {
      const STORYBOOK_URL = window.AdminJS.env.STORYBOOK_URL;
      return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "storyook",
        "data-css": "design-system-examples"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#storyook"
      }, "Storybook"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "For more examples visit our Storybook", /*#__PURE__*/React__default.default.createElement(designSystem.Link, {
        href: STORYBOOK_URL,
        ml: "md"
      }, STORYBOOK_URL)))), /*#__PURE__*/React__default.default.createElement(React.Suspense, {
        fallback: /*#__PURE__*/React__default.default.createElement(DesignSytemPagePlaceholder, null)
      }, /*#__PURE__*/React__default.default.createElement(ButtonsPage$1, null), /*#__PURE__*/React__default.default.createElement(TypographyPage$1, null), /*#__PURE__*/React__default.default.createElement(ModalPage$1, null), /*#__PURE__*/React__default.default.createElement(TabsPage$1, null), /*#__PURE__*/React__default.default.createElement(MessagesPage$1, null), /*#__PURE__*/React__default.default.createElement(IllustrationPage$1, null), /*#__PURE__*/React__default.default.createElement(IconsPage$1, null), /*#__PURE__*/React__default.default.createElement(FormPage$1, null), /*#__PURE__*/React__default.default.createElement(BlogPage$1, null)));
    };
    const DesignSytemPagePlaceholder = () => ( /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, Array.from({
      length: 3
    }).map((_, index) => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      key: index
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Placeholder, {
      height: 33,
      width: 240
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "container"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Placeholder, null)))))));

    AdminJS.UserComponents = {};
    AdminJS.env.STORYBOOK_URL = undefined;
    AdminJS.env.GITHUB_URL = "https://github.com";
    AdminJS.env.SLACK_URL = undefined;
    AdminJS.env.DOCUMENTATION_URL = undefined;
    AdminJS.UserComponents.Version = TopBar;
    AdminJS.UserComponents.Login = Login;
    AdminJS.UserComponents.SidebarResourceSection = SidebarResourceSection;
    AdminJS.UserComponents.CustomAction = DontTouchThis;
    AdminJS.UserComponents.DetailedStats = DetailedStats;
    AdminJS.UserComponents.Thumb = Thumb;
    AdminJS.UserComponents.CustomPage = CustomPage;
    AdminJS.UserComponents.DesignSystemPage = DesignSystemPage;

    const BlogPage = () => {
      const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);
      const handler = html => {
        console.log(html);
      };
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "blog"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#blog"
      }, "Blog"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: 1
      }, isDrawerVisible && ( /*#__PURE__*/React__default.default.createElement(designSystem.Drawer, null, /*#__PURE__*/React__default.default.createElement(designSystem.DrawerContent, null, /*#__PURE__*/React__default.default.createElement(designSystem.Header.H3, null, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        size: "icon",
        rounded: true,
        mr: "lg",
        onClick: () => setIsDrawerVisible(false)
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "X"
      })), "Article settings"), /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Drop splash screen"), /*#__PURE__*/React__default.default.createElement(designSystem.DropZone, null)))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        flex: true,
        flexDirection: "row-reverse",
        mb: "xl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        size: "icon",
        onClick: () => setIsDrawerVisible(true)
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "Settings"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        variant: "contained",
        mr: "default"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "Share"
      }), "Publish"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        mr: "default"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: "Save"
      }), "Save")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        mb: "xxl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        variant: "xxl",
        borderless: true,
        width: 1,
        placeholder: "Rich text editor example page"
      })), /*#__PURE__*/React__default.default.createElement(designSystem.RichTextEditor, {
        value: "",
        onChange: handler
      }))));
    };

    var blogPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: BlogPage
    });

    const Wrapper = ({
      children,
      title
    }) => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      mb: "md"
    }, title), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      flex: true,
      flexDirection: "row",
      alignItems: "center",
      style: {
        gap: 16
      }
    }, children)));
    const colors = ['primary', 'secondary', 'success', 'info', 'danger', 'text'];
    const [primary] = colors;
    const ButtonsPage = () => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      id: "buttons"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
      as: "a",
      href: "#buttons"
    }, "Buttons"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "container"
    }, /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Text (default)"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "text",
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Text rounded"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "text",
      rounded: true,
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Contained"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "contained",
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Contained rounded"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "contained",
      rounded: true,
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Outlined"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "outlined",
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Outlined rounded"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "outlined",
      rounded: true,
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Light"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "light",
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Light rounded"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "light",
      rounded: true,
      color: color
    }, color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Sizes (small, medium, large)"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      variant: "outlined",
      size: "sm",
      color: primary
    }, primary), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      variant: "outlined",
      color: primary
    }, primary), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      variant: "outlined",
      size: "lg",
      color: primary
    }, primary)), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "With icon"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      rounded: true,
      color: color
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "Plus"
    }), color)))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Icon only"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      rounded: true,
      size: "icon",
      color: color
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "Home"
    }))))), /*#__PURE__*/React__default.default.createElement(Wrapper, {
      title: "Icon only (outlined)"
    }, colors.map(color => ( /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      key: color,
      variant: "outlined",
      rounded: true,
      size: "icon",
      color: color
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
      icon: "Heart"
    }))))))));

    var buttonsPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: ButtonsPage
    });

    const FormPage = () => {
      const [value, setValue] = React.useState();
      const [date, setDate] = React.useState('2021-06-17');
      const options = [{
        value: '1',
        label: 'Office 1'
      }, {
        value: '2',
        label: 'Office 2'
      }];
      const {
        translateComponent
      } = adminjs.useTranslation();
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "form"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#form"
      }, "Form"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        p: "xl",
        flex: true,
        justifyContent: "space-between",
        style: {
          gap: 16
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        htmlFor: "firstName"
      }, "First name"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        id: "firstName",
        width: 1
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        htmlFor: "lastName"
      }, "Last name"), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
        id: "lastName",
        width: 1
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        htmlFor: "phone"
      }, "Phone"), /*#__PURE__*/React__default.default.createElement(designSystem.PhoneInput, {
        id: "phone"
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        p: "xl",
        flex: true,
        justifyContent: "space-between",
        style: {
          gap: 16
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Select"), /*#__PURE__*/React__default.default.createElement(designSystem.Select, {
        value: value,
        onChange: selected => setValue(selected),
        options: options
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Date of birth"), /*#__PURE__*/React__default.default.createElement(designSystem.DatePicker, {
        propertyType: "date",
        onChange: setDate,
        value: date
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "100%"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        htmlFor: "currency"
      }, "Salary"), /*#__PURE__*/React__default.default.createElement(designSystem.CurrencyInput, {
        id: "currency",
        intlConfig: {
          locale: 'en-US',
          currency: 'GBP'
        }
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        p: "xl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        htmlFor: "textarea1"
      }, "Additional"), /*#__PURE__*/React__default.default.createElement(designSystem.TextArea, {
        id: "textarea1",
        width: 1
      })), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        p: "xl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.CheckBox, {
        id: "isActive"
      }), /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
        inline: true,
        htmlFor: "isActive",
        ml: "default"
      }, "Active")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        p: "xl"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, null, "Attachment"), /*#__PURE__*/React__default.default.createElement(designSystem.DropZone, {
        validate: {
          maxSize: 102400,
          mimeTypes: ['application/pdf', 'image/png']
        },
        translations: translateComponent('DropZone', {
          returnObjects: true
        })
      }))));
    };

    var formPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: FormPage
    });

    const IconsPage = () => {
      const IconsSet = Object.keys(FeatherIcons__namespace).filter(name => name !== 'default').map(iconName => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        width: "120px",
        height: "120px",
        key: iconName,
        style: {
          textAlign: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement(designSystem.H6, null, iconName), /*#__PURE__*/React__default.default.createElement(designSystem.Icon, {
        icon: iconName,
        size: 32
      }))));
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "icons"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#icons"
      }, "Icons"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container",
        flex: true,
        flexWrap: "wrap",
        justifyContent: "center",
        style: {
          gap: '16px'
        }
      }, IconsSet));
    };

    var iconsPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: IconsPage
    });

    const variants = ['Accept', 'Cup', 'Bag', 'Beware', 'Notebook', 'NotFound', 'Padlock', 'Photos', 'Plug', 'RocketNew', 'Tags', 'Folder', 'Box', 'Calendar', 'Cancel', 'Cards', 'Clip', 'Cloud', 'Details', 'Docs', 'Drawer', 'IdentityCard'];
    const IllustrationPage = () => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      id: "illustrations"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
      as: "a",
      href: "#illustrations"
    }, "Illustrations"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "container",
      flex: true,
      flexWrap: "wrap",
      style: {
        rowGap: 32
      }
    }, variants.map(variant => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: variant,
      width: 200,
      height: 200,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Illustration, {
      variant: variant
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, variant)))))));

    var illustrationsPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: IllustrationPage
    });

    const MessagesPage = () => {
      const variants = ['info', 'danger', 'success', 'warning'];
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "modal"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#modal"
      }, "Messages"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, variants.map(variant => ( /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
        key: variant,
        message: variant,
        variant: variant,
        mb: "lg",
        onCloseClick: () => {}
      }))), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
        my: "xl"
      }, "With extra body"), variants.map(variant => ( /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
        key: variant,
        message: variant,
        variant: variant,
        mb: "lg",
        onCloseClick: () => {}
      }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga itaque quaerat quia eum ratione ipsum deleniti. Officiis nisi non necessitatibus laudantium blanditiis inventore.")))));
    };

    var messagesPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: MessagesPage
    });

    const ModalExample = () => {
      const [showModal, setShowModal] = React.useState(false);
      const handleButtonClick = React.useCallback(() => setShowModal(true), []);
      const modalProps = {
        variant: 'primary',
        label: 'Modal header',
        icon: 'Bookmark',
        title: 'Modal title',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        buttons: [{
          label: 'Cancel'
        }, {
          label: 'Delete',
          color: 'danger'
        }],
        onClose: () => setShowModal(false),
        onOverlayClick: () => setShowModal(false)
      };
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
        onClick: handleButtonClick
      }, "Show modal"), showModal && /*#__PURE__*/React__default.default.createElement(designSystem.Modal, {
        ...modalProps
      }));
    };

    const ModalPage = () => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      id: "modal"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
      as: "a",
      href: "#modal"
    }, "Modal"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "container"
    }, /*#__PURE__*/React__default.default.createElement(ModalExample, null))));

    var modalPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: ModalPage
    });

    const TabsPage = () => {
      const [selectedTab, setSelectedTab] = React.useState('first');
      return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "grey",
        id: "tabs"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
        as: "a",
        href: "#tabs"
      }, "Tabs"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
        variant: "container"
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Tabs, {
        currentTab: selectedTab,
        onChange: setSelectedTab
      }, /*#__PURE__*/React__default.default.createElement(designSystem.Tab, {
        id: "first",
        label: "First tab"
      }, "First"), /*#__PURE__*/React__default.default.createElement(designSystem.Tab, {
        id: "second",
        label: "Second tab"
      }, "Second"), /*#__PURE__*/React__default.default.createElement(designSystem.Tab, {
        id: "third",
        label: "Third tab"
      }, "Third"))));
    };

    var tabsPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: TabsPage
    });

    const TypographyPage = () => ( /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "grey",
      id: "typography"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Header, {
      as: "a",
      href: "#typography"
    }, "Typography"), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      variant: "container"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H1, null, "This is H1 header"), /*#__PURE__*/React__default.default.createElement(designSystem.H2, null, "This is H2 header"), /*#__PURE__*/React__default.default.createElement(designSystem.H3, null, "This is H3 header"), /*#__PURE__*/React__default.default.createElement(designSystem.H4, null, "This is H4 header"), /*#__PURE__*/React__default.default.createElement(designSystem.H5, null, "This is H5 header"), /*#__PURE__*/React__default.default.createElement(designSystem.H6, null, "This is H6 header"), /*#__PURE__*/React__default.default.createElement(designSystem.Header, null), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg"
    }, "Sed tempus tempor dictum. Integer in lacus lacus. Curabitur sit amet ante eget ipsum finibus gravida. Donec viverra aliquet libero. Integer a nisl ac neque tempor pharetra. Donec sapien tortor, fermentum eu justo sed, egestas ultricies lacus. Pellentesque eget tincidunt nibh. Ut non lectus varius, semper lorem vel, porta orci. Duis id risus eu arcu efficitur bibendum. In eget eros ex. Integer et malesuada tellus."), /*#__PURE__*/React__default.default.createElement(designSystem.Header, null), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis semper massa a rhoncus. Praesent eu rutrum leo. Donec malesuada quis metus vel pulvinar. Quisque in vehicula nulla. Nam vestibulum facilisis lorem, ac mattis odio aliquet et. Suspendisse enim ligula, ultricies pellentesque ligula id, molestie sodales quam. Etiam in lectus ut nibh laoreet consequat."), /*#__PURE__*/React__default.default.createElement(designSystem.Header, null), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "sm"
    }, "Suspendisse efficitur, urna sit amet tempor dignissim, ex est feugiat ex, sed molestie ante erat eget dolor. Duis purus orci, commodo non semper sed, laoreet quis nisl. Donec a bibendum arcu. Donec eget justo nunc. Nunc elementum augue et bibendum molestie. Duis tincidunt pellentesque enim ac mattis. Nunc congue, ante id efficitur gravida, turpis velit porta nunc, at egestas urna odio eget arcu. Ut enim metus, fringilla eu risus eu, sodales venenatis lacus."), /*#__PURE__*/React__default.default.createElement(designSystem.Header, null), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "xs"
    }, "Donec vel malesuada turpis. Curabitur ultricies neque a sapien ullamcorper, quis faucibus felis porta. Etiam fermentum odio at rutrum pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse aliquet suscipit turpis at placerat. Cras quis sem vitae velit vehicula congue et nec libero. Curabitur aliquam, est id dapibus egestas, felis augue suscipit est, eu venenatis leo justo vel sapien. Donec id dignissim diam. Nulla feugiat ex sit amet augue sollicitudin pulvinar. Pellentesque id felis rhoncus, varius sem et, condimentum ligula. Proin accumsan sit amet nisl ac vehicula. Nulla facilisi. Ut pharetra vel tortor vel lacinia. Nulla sit amet neque lectus. Mauris tristique justo in sem tempus, at sagittis lectus molestie. Phasellus sit amet nulla id mi rutrum varius in eu nisi."))));

    var typographyPage = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: TypographyPage
    });

})(AdminJSDesignSystem, React, ReactRedux, styled, AdminJS, FeatherIcons);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvdG9wLWJhci5qcyIsIi4uL2Rpc3QvYWRtaW4vY29uc3RhbnRzL2F1dGhVc2Vycy5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9sb2dpbi5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9zaWRlYmFyLXJlc291cmNlLXNlY3Rpb24uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvZG9udC10b3VjaC10aGlzLWFjdGlvbi5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9kZXRhaWxlZC1zdGF0cy5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy90aHVtYi5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvY3VzdG9tLXBhZ2UuanMiLCIuLi9kaXN0L2FkbWluL3BhZ2VzL2Rlc2lnbi1zeXN0ZW0tZXhhbXBsZXMvaW5kZXguanMiLCJlbnRyeS5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy9ibG9nLXBhZ2UuanMiLCIuLi9kaXN0L2FkbWluL3BhZ2VzL2Rlc2lnbi1zeXN0ZW0tZXhhbXBsZXMvYnV0dG9ucy1wYWdlLmpzIiwiLi4vZGlzdC9hZG1pbi9wYWdlcy9kZXNpZ24tc3lzdGVtLWV4YW1wbGVzL2Zvcm0tcGFnZS5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy9pY29ucy1wYWdlLmpzIiwiLi4vZGlzdC9hZG1pbi9wYWdlcy9kZXNpZ24tc3lzdGVtLWV4YW1wbGVzL2lsbHVzdHJhdGlvbnMtcGFnZS5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy9tZXNzYWdlcy1wYWdlLmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0tZXhhbXBsZXMvbW9kYWwtZXhhbXBsZS5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy9tb2RhbC1wYWdlLmpzIiwiLi4vZGlzdC9hZG1pbi9wYWdlcy9kZXNpZ24tc3lzdGVtLWV4YW1wbGVzL3RhYnMtcGFnZS5qcyIsIi4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy90eXBvZ3JhcGh5LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24sIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcbiAgICBjb25zdCB2ZXJzaW9ucyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudmVyc2lvbnMpO1xuICAgIGNvbnN0IEdJVEhVQl9VUkwgPSB3aW5kb3cuQWRtaW5KUy5lbnYuR0lUSFVCX1VSTDtcbiAgICBjb25zdCBTTEFDS19VUkwgPSB3aW5kb3cuQWRtaW5KUy5lbnYuU0xBQ0tfVVJMO1xuICAgIGNvbnN0IERPQ1VNRU5UQVRJT05fVVJMID0gd2luZG93LkFkbWluSlMuZW52LkRPQ1VNRU5UQVRJT05fVVJMO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgZmxleDogdHJ1ZSwgZmxleEdyb3c6IDEsIGp1c3RpZnlDb250ZW50OiBcImVuZFwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyBtbDogXCJ4bFwiLCBtcjogXCJhdXRvXCIgfSwgdmVyc2lvbnMuYWRtaW4pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJ0ZXh0XCIsIGFzOiBcImFcIiwgaHJlZjogU0xBQ0tfVVJMLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIlNsYWNrXCIgfSksXG4gICAgICAgICAgICBcIlNsYWNrXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJ0ZXh0XCIsIGFzOiBcImFcIiwgaHJlZjogR0lUSFVCX1VSTCwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJHaXRIdWJcIiB9KSxcbiAgICAgICAgICAgIFwiR2l0SHViXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBjb2xvcjogXCJ0ZXh0XCIsIGFzOiBcImFcIiwgaHJlZjogRE9DVU1FTlRBVElPTl9VUkwsIHRhcmdldDogXCJfYmxhbmtcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiQm9va09wZW5cIiB9KSxcbiAgICAgICAgICAgIFwiRG9jdW1lbnRhdGlvblwiKSkpO1xufTtcbmV4cG9ydCB7IFRvcEJhciB9O1xuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dG9wLWJhci5qcy5tYXAiLCJleHBvcnQgY29uc3QgQXV0aFVzZXJzID0gW1xuICAgIHtcbiAgICAgICAgZW1haWw6ICdhZG1pbkBleGFtcGxlLmNvbScsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICB0aXRsZTogJ0FkbWluJyxcbiAgICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVtYWlsOiAnZGFya0BleGFtcGxlLmNvbScsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICB0aXRsZTogJ0FkbWluSlMgZGFyayB0aGVtZScsXG4gICAgICAgIHRoZW1lOiAnZGFyaycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVtYWlsOiAnbm8tc2lkZWJhckBleGFtcGxlLmNvbScsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQnLFxuICAgICAgICB0aXRsZTogJ0FkbWluSlMgbm8tc2lkZWJhciB0aGVtZScsXG4gICAgICAgIHRoZW1lOiAnbm8tc2lkZWJhcicsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGVtYWlsOiAnY3VzdG9tQGV4YW1wbGUuY29tJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gICAgICAgIHRpdGxlOiAnQWRtaW5KUyBjdXN0b20gdGhlbWUnLFxuICAgICAgICB0aGVtZTogJ2N1c3RvbS10aGVtZScsXG4gICAgfSxcbl07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXRoVXNlcnMuanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQm94LCBINSwgTGFiZWwsIElucHV0LCBGb3JtR3JvdXAsIEJ1dHRvbiwgVGV4dCwgTWVzc2FnZUJveCwgTWFkZVdpdGhMb3ZlLCB0aGVtZUdldCwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCB7IEF1dGhVc2VycyB9IGZyb20gJy4uL2NvbnN0YW50cy9hdXRoVXNlcnMuanMnO1xuY29uc3QgV3JhcHBlciA9IHN0eWxlZChCb3gpIGBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbmA7XG5jb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkLmltZyBgXG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogJHt0aGVtZUdldCgnc3BhY2UnLCAnbWQnKX0gMDtcbmA7XG5jb25zdCBJbGx1c3RyYXRpb25zV3JhcHBlciA9IHN0eWxlZChCb3gpIGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJiBzdmcgW3N0cm9rZT0nIzNCMzU1MiddIHtcbiAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICAmIHN2ZyBbZmlsbD0nIzMwNDBENiddIHtcbiAgICBmaWxsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IExvZ2luID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIGVycm9yTWVzc2FnZSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVDb21wb25lbnQsIHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW2RlZmF1bHRVc2VyXSA9IEF1dGhVc2VycztcbiAgICBjb25zdCBicmFuZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYnJhbmRpbmcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgRW1haWw6ICR7ZGVmYXVsdFVzZXIuZW1haWx9XFxuUGFzc3dvcmQ6ICR7ZGVmYXVsdFVzZXIucGFzc3dvcmR9YDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyBmbGV4OiB0cnVlLCB2YXJpYW50OiBcImdyZXlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgYmc6IFwid2hpdGVcIiwgaGVpZ2h0OiBcIjQ4MHB4XCIsIGZsZXg6IHRydWUsIGJveFNoYWRvdzogXCJsb2dpblwiLCB3aWR0aDogWzEsIDIgLyAzLCAnYXV0byddIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgYXM6IFwiZm9ybVwiLCBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiBcIlBPU1RcIiwgcDogXCJ4M1wiLCBmbGV4R3JvdzogMSwgd2lkdGg6IFsnMTAwJScsICcxMDAlJywgJzQ4MHB4J10gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChINSwgeyBtYXJnaW5Cb3R0b206IFwieHhsXCIgfSwgYnJhbmRpbmcubG9nbyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVkTG9nbywgeyBzcmM6IGJyYW5kaW5nLmxvZ28sIGFsdDogYnJhbmRpbmcuY29tcGFueU5hbWUgfSkgOiBicmFuZGluZy5jb21wYW55TmFtZSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZUJveCwgeyBteTogXCJsZ1wiLCBtZXNzYWdlOiBtZXNzYWdlLCB2YXJpYW50OiBcImluZm9cIiwgc3R5bGU6IHsgd2hpdGVTcGFjZTogJ3ByZS13cmFwJyB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZUJveCwgeyBteTogXCJsZ1wiLCBtZXNzYWdlOiBlcnJvck1lc3NhZ2Uuc3BsaXQoJyAnKS5sZW5ndGggPiAxID8gZXJyb3JNZXNzYWdlIDogdHJhbnNsYXRlTWVzc2FnZShlcnJvck1lc3NhZ2UpLCB2YXJpYW50OiBcImRhbmdlclwiIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IHJlcXVpcmVkOiB0cnVlIH0sIHRyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5lbWFpbCcpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIHsgbmFtZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLmVtYWlsJyksIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFVzZXIuZW1haWwgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHsgcmVxdWlyZWQ6IHRydWUgfSwgdHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5wcm9wZXJ0aWVzLnBhc3N3b3JkJykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgeyB0eXBlOiBcInBhc3N3b3JkXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IHRyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5wYXNzd29yZCcpLCBhdXRvQ29tcGxldGU6IFwibmV3LXBhc3N3b3JkXCIsIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFVzZXIucGFzc3dvcmQgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgbXQ6IFwieGxcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiIH0sIHRyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ubG9naW5CdXR0b24nKSkpKSksXG4gICAgICAgICAgICBicmFuZGluZy53aXRoTWFkZVdpdGhMb3ZlID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG10OiBcInh4bFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYWRlV2l0aExvdmUsIG51bGwpKSkgOiBudWxsKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bG9naW4uanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHVzZU5hdmlnYXRpb25SZXNvdXJjZXMgfSBmcm9tICdhZG1pbmpzJztcbmNvbnN0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gPSAoeyByZXNvdXJjZXMgfSkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdXNlTmF2aWdhdGlvblJlc291cmNlcyhyZXNvdXJjZXMpO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb24sIHsgZWxlbWVudHM6IGVsZW1lbnRzIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaWRlYmFyLXJlc291cmNlLXNlY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgQm94LCBIMywgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IERvbnRUb3VjaFRoaXMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY29yZCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBmbGV4OiB0cnVlLCBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdjb2x1bW4nLCAnY29sdW1uJywgJ3JvdyddLCBzdHlsZTogeyBnYXA6IDE2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiwgYm94U2hhZG93OiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMywgbnVsbCwgXCJFeGFtcGxlIG9mIGEgc2ltcGxlIHBhZ2VcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiV2hlcmUgeW91IGNhbiBwdXQgYWxtb3N0IGV2ZXJ5dGhpbmcgbGlrZSB0aGlzOlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGFzOiBcImRpdlwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJodHRwczovL2kucmVkZC5pdC9yZDM5eXVpeTluczIxLmpwZ1wiLCBhbHQ6IFwic3R1cGlkIGNhdFwiLCB3aWR0aDogMzAwIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiY29udGFpbmVyXCIsIGJveFNoYWRvdzogXCJjYXJkXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgXCJPciAobW9yZSBsaWtlbHkpLCBvcGVyYXRlIG9uIGEgcmV0dXJuZWQgcmVjb3JkOlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG1heEhlaWdodDogNTAwLCBvdmVyZmxvd1k6IFwic2Nyb2xsXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHsgc3R5bGU6IHsgZm9udEZhbWlseTogJ21vbm9zcGFjZScgfSB9LCBKU09OLnN0cmluZ2lmeShyZWNvcmQsIG51bGwsIDIpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRG9udFRvdWNoVGhpcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRvbnQtdG91Y2gtdGhpcy1hY3Rpb24uanMubWFwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEg1LCBUZXh0LCBEcmF3ZXJDb250ZW50IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICdhZG1pbmpzJztcbmNvbnN0IERldGFpbGVkU3RhdHMgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJhd2VyQ29udGVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpb25IZWFkZXIsIHsgLi4ucHJvcHMsIG9taXRBY3Rpb25zOiB0cnVlIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEg1LCB7IG10OiBcInh4bFwiIH0sIFwiQ3VzdG9tIGFjdGlvbiBleGFtcGxlXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIFwiV2hlcmUgeW91IGNhbiBkbyB3aGF0ZXZlciB5b3UgbGlrZS4uLlwiKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IERldGFpbGVkU3RhdHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRhaWxlZC1zdGF0cy5qcy5tYXAiLCJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgVGh1bWIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY29yZCwgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5uYW1lXTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IHZhbHVlID8gJ1RodW1ic1VwJyA6ICdUaHVtYnNEb3duJyB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaHVtYjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRodW1iLmpzLm1hcCIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBIMywgTGluaywgUGxhY2Vob2xkZXIsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IEFwaUNsaWVudCwgdXNlTm90aWNlLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KCk7XG5jb25zdCBDdXN0b21QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKCk7XG4gICAgY29uc3QgeyB0YywgdG0sIGkxOG46IHsgbGFuZ3VhZ2UgfSwgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXBpLmdldFBhZ2UoeyBwYWdlTmFtZTogJ2N1c3RvbVBhZ2UnIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgc2V0VGV4dCh0bShyZXMuZGF0YS50ZXh0LCB7IGRlZmF1bHRWYWx1ZTogcmVzLmRhdGEudGV4dCB9KSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtsYW5ndWFnZV0pO1xuICAgIGNvbnN0IHNlbmRTaW1wbGVOb3RpY2UgPSAoKSA9PiBhZGROb3RpY2Uoe1xuICAgICAgICBtZXNzYWdlOiAnQ3VzdG9tUGFnZS5tZXNzYWdlJyxcbiAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgIH0pO1xuICAgIGNvbnN0IHNlbmRUcmFuc2xhdGVkTm90aWNlID0gKCkgPT4gYWRkTm90aWNlKHtcbiAgICAgICAgbWVzc2FnZTogJ0N1c3RvbVBhZ2UubWVzc2FnZVdpdGhJbnRlcnBvbGF0aW9uJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc29tZVBhcmFtczogWydwYXJhbSAxJywgJ3BhcmFtMiddLmpvaW4oJywgJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgdG0oJ0N1c3RvbVBhZ2UubWVzc2FnZScpLFxuICAgICAgICAgICAgXCIgXCIsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExpbmssIG51bGwsIHRjKCdDdXN0b21QYWdlLmJ1dHRvbicpKSkpLFxuICAgIH0pO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJ0cmFuc3BhcmVudFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDMsIG51bGwsIHRjKCdDdXN0b21QYWdlLmhlYWRlcicpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IGZsZXg6IHRydWUsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIHN0eWxlOiB7IGdhcDogJzFyZW0nIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHRjKCdDdXN0b21QYWdlLmludHJvZHVjdGlvbicpKSxcbiAgICAgICAgICAgICAgICB0ZXh0ID8gSlNPTi5zdHJpbmdpZnkodGV4dCwgbnVsbCwgMikgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFBsYWNlaG9sZGVyLCB7IHN0eWxlOiB7IHdpZHRoOiA0MDAsIGhlaWdodDogMTQgfSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIG51bGwsIHRjKCdDdXN0b21QYWdlLmVuZGluZycpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBmbGV4OiB0cnVlLCBzdHlsZTogeyBnYXA6IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBtdDogXCJ4bFwiLCBvbkNsaWNrOiBzZW5kU2ltcGxlTm90aWNlIH0sIHRjKCdDdXN0b21QYWdlLmJ1dHRvbicpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBtdDogXCJ4bFwiLCBvbkNsaWNrOiBzZW5kVHJhbnNsYXRlZE5vdGljZSB9LCB0YygnQ3VzdG9tUGFnZS5ub3RpY2VXaXRoSW50ZXJwb2xhdGlvbicpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWN1c3RvbS1wYWdlLmpzLm1hcCIsImltcG9ydCB7IEJveCwgSGVhZGVyLCBMaW5rLCBQbGFjZWhvbGRlciwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IFJlYWN0LCB7IGxhenksIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQmxvZ1BhZ2UgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9ibG9nLXBhZ2UuanMnKSk7XG5jb25zdCBCdXR0b25zUGFnZSA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL2J1dHRvbnMtcGFnZS5qcycpKTtcbmNvbnN0IEZvcm1QYWdlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vZm9ybS1wYWdlLmpzJykpO1xuY29uc3QgSWNvbnNQYWdlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vaWNvbnMtcGFnZS5qcycpKTtcbmNvbnN0IElsbHVzdHJhdGlvblBhZ2UgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9pbGx1c3RyYXRpb25zLXBhZ2UuanMnKSk7XG5jb25zdCBNZXNzYWdlc1BhZ2UgPSBsYXp5KCgpID0+IGltcG9ydCgnLi9tZXNzYWdlcy1wYWdlLmpzJykpO1xuY29uc3QgTW9kYWxQYWdlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vbW9kYWwtcGFnZS5qcycpKTtcbmNvbnN0IFRhYnNQYWdlID0gbGF6eSgoKSA9PiBpbXBvcnQoJy4vdGFicy1wYWdlLmpzJykpO1xuY29uc3QgVHlwb2dyYXBoeVBhZ2UgPSBsYXp5KCgpID0+IGltcG9ydCgnLi90eXBvZ3JhcGh5LXBhZ2UuanMnKSk7XG5jb25zdCBEZXNpZ25TeXN0ZW1QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFNUT1JZQk9PS19VUkwgPSB3aW5kb3cuQWRtaW5KUy5lbnYuU1RPUllCT09LX1VSTDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJzdG9yeW9va1wiLCBcImRhdGEtY3NzXCI6IFwiZGVzaWduLXN5c3RlbS1leGFtcGxlc1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgeyBhczogXCJhXCIsIGhyZWY6IFwiI3N0b3J5b29rXCIgfSwgXCJTdG9yeWJvb2tcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIkZvciBtb3JlIGV4YW1wbGVzIHZpc2l0IG91ciBTdG9yeWJvb2tcIixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCB7IGhyZWY6IFNUT1JZQk9PS19VUkwsIG1sOiBcIm1kXCIgfSwgU1RPUllCT09LX1VSTCkpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3VzcGVuc2UsIHsgZmFsbGJhY2s6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVzaWduU3l0ZW1QYWdlUGxhY2Vob2xkZXIsIG51bGwpIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbnNQYWdlLCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHlwb2dyYXBoeVBhZ2UsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbFBhZ2UsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzUGFnZSwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2VzUGFnZSwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElsbHVzdHJhdGlvblBhZ2UsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uc1BhZ2UsIG51bGwpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtUGFnZSwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJsb2dQYWdlLCBudWxsKSkpKTtcbn07XG5jb25zdCBEZXNpZ25TeXRlbVBhZ2VQbGFjZWhvbGRlciA9ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0pLm1hcCgoXywgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImdyZXlcIiwga2V5OiBpbmRleCB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIHsgaGVpZ2h0OiAzMywgd2lkdGg6IDI0MCB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIG51bGwpKSkpKSkpO1xuZXhwb3J0IGRlZmF1bHQgRGVzaWduU3lzdGVtUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuQWRtaW5KUy5lbnYuU1RPUllCT09LX1VSTCA9IHVuZGVmaW5lZFxuQWRtaW5KUy5lbnYuR0lUSFVCX1VSTCA9IFwiaHR0cHM6Ly9naXRodWIuY29tXCJcbkFkbWluSlMuZW52LlNMQUNLX1VSTCA9IHVuZGVmaW5lZFxuQWRtaW5KUy5lbnYuRE9DVU1FTlRBVElPTl9VUkwgPSB1bmRlZmluZWRcbmltcG9ydCBWZXJzaW9uIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy90b3AtYmFyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5WZXJzaW9uID0gVmVyc2lvblxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9sb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2lkZWJhclJlc291cmNlU2VjdGlvbiA9IFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cbmltcG9ydCBDdXN0b21BY3Rpb24gZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2RvbnQtdG91Y2gtdGhpcy1hY3Rpb24nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkN1c3RvbUFjdGlvbiA9IEN1c3RvbUFjdGlvblxuaW1wb3J0IERldGFpbGVkU3RhdHMgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2RldGFpbGVkLXN0YXRzJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EZXRhaWxlZFN0YXRzID0gRGV0YWlsZWRTdGF0c1xuaW1wb3J0IFRodW1iIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy90aHVtYidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVGh1bWIgPSBUaHVtYlxuaW1wb3J0IEN1c3RvbVBhZ2UgZnJvbSAnLi4vZGlzdC9hZG1pbi9wYWdlcy9jdXN0b20tcGFnZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ3VzdG9tUGFnZSA9IEN1c3RvbVBhZ2VcbmltcG9ydCBEZXNpZ25TeXN0ZW1QYWdlIGZyb20gJy4uL2Rpc3QvYWRtaW4vcGFnZXMvZGVzaWduLXN5c3RlbS1leGFtcGxlcy9pbmRleCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGVzaWduU3lzdGVtUGFnZSA9IERlc2lnblN5c3RlbVBhZ2UiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRHJhd2VyLCBEcmF3ZXJDb250ZW50LCBEcm9wWm9uZSwgSGVhZGVyLCBJY29uLCBJbnB1dCwgTGFiZWwsIFJpY2hUZXh0RWRpdG9yLCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQmxvZ1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzRHJhd2VyVmlzaWJsZSwgc2V0SXNEcmF3ZXJWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVyID0gKGh0bWwpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJibG9nXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHsgYXM6IFwiYVwiLCBocmVmOiBcIiNibG9nXCIgfSwgXCJCbG9nXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogMSB9LFxuICAgICAgICAgICAgaXNEcmF3ZXJWaXNpYmxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KERyYXdlciwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyYXdlckNvbnRlbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLkgzLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgc2l6ZTogXCJpY29uXCIsIHJvdW5kZWQ6IHRydWUsIG1yOiBcImxnXCIsIG9uQ2xpY2s6ICgpID0+IHNldElzRHJhd2VyVmlzaWJsZShmYWxzZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJYXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcnRpY2xlIHNldHRpbmdzXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIkRyb3Agc3BsYXNoIHNjcmVlblwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZSwgbnVsbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgZmxleDogdHJ1ZSwgZmxleERpcmVjdGlvbjogXCJyb3ctcmV2ZXJzZVwiLCBtYjogXCJ4bFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHNpemU6IFwiaWNvblwiLCBvbkNsaWNrOiAoKSA9PiBzZXRJc0RyYXdlclZpc2libGUodHJ1ZSkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIlNldHRpbmdzXCIgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCBtcjogXCJkZWZhdWx0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIlNoYXJlXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlB1Ymxpc2hcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG1yOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiU2F2ZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJTYXZlXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBtYjogXCJ4eGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IHZhcmlhbnQ6IFwieHhsXCIsIGJvcmRlcmxlc3M6IHRydWUsIHdpZHRoOiAxLCBwbGFjZWhvbGRlcjogXCJSaWNoIHRleHQgZWRpdG9yIGV4YW1wbGUgcGFnZVwiIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0RWRpdG9yLCB7IHZhbHVlOiBcIlwiLCBvbkNoYW5nZTogaGFuZGxlciB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ibG9nLXBhZ2UuanMubWFwIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIEhlYWRlciwgSWNvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IFdyYXBwZXIgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IG1iOiBcInhsXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgbWI6IFwibWRcIiB9LCB0aXRsZSksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgZmxleDogdHJ1ZSwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgc3R5bGU6IHsgZ2FwOiAxNiB9IH0sIGNoaWxkcmVuKSkpO1xuY29uc3QgY29sb3JzID0gWydwcmltYXJ5JywgJ3NlY29uZGFyeScsICdzdWNjZXNzJywgJ2luZm8nLCAnZGFuZ2VyJywgJ3RleHQnXTtcbmNvbnN0IFtwcmltYXJ5XSA9IGNvbG9ycztcbmNvbnN0IEJ1dHRvbnNQYWdlID0gKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJidXR0b25zXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgeyBhczogXCJhXCIsIGhyZWY6IFwiI2J1dHRvbnNcIiB9LCBcIkJ1dHRvbnNcIiksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsgdGl0bGU6IFwiVGV4dCAoZGVmYXVsdClcIiB9LCBjb2xvcnMubWFwKChjb2xvcikgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGtleTogY29sb3IsIHZhcmlhbnQ6IFwidGV4dFwiLCBjb2xvcjogY29sb3IgfSwgY29sb3IpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsgdGl0bGU6IFwiVGV4dCByb3VuZGVkXCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCB2YXJpYW50OiBcInRleHRcIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IGNvbG9yIH0sIGNvbG9yKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIkNvbnRhaW5lZFwiIH0sIGNvbG9ycy5tYXAoKGNvbG9yKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsga2V5OiBjb2xvciwgdmFyaWFudDogXCJjb250YWluZWRcIiwgY29sb3I6IGNvbG9yIH0sIGNvbG9yKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIkNvbnRhaW5lZCByb3VuZGVkXCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCB2YXJpYW50OiBcImNvbnRhaW5lZFwiLCByb3VuZGVkOiB0cnVlLCBjb2xvcjogY29sb3IgfSwgY29sb3IpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsgdGl0bGU6IFwiT3V0bGluZWRcIiB9LCBjb2xvcnMubWFwKChjb2xvcikgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGtleTogY29sb3IsIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgY29sb3I6IGNvbG9yIH0sIGNvbG9yKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIk91dGxpbmVkIHJvdW5kZWRcIiB9LCBjb2xvcnMubWFwKChjb2xvcikgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IGtleTogY29sb3IsIHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgcm91bmRlZDogdHJ1ZSwgY29sb3I6IGNvbG9yIH0sIGNvbG9yKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIkxpZ2h0XCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCB2YXJpYW50OiBcImxpZ2h0XCIsIGNvbG9yOiBjb2xvciB9LCBjb2xvcikpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyB0aXRsZTogXCJMaWdodCByb3VuZGVkXCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCB2YXJpYW50OiBcImxpZ2h0XCIsIHJvdW5kZWQ6IHRydWUsIGNvbG9yOiBjb2xvciB9LCBjb2xvcikpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlciwgeyB0aXRsZTogXCJTaXplcyAoc21hbGwsIG1lZGl1bSwgbGFyZ2UpXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgc2l6ZTogXCJzbVwiLCBjb2xvcjogcHJpbWFyeSB9LCBwcmltYXJ5KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IHZhcmlhbnQ6IFwib3V0bGluZWRcIiwgY29sb3I6IHByaW1hcnkgfSwgcHJpbWFyeSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyB2YXJpYW50OiBcIm91dGxpbmVkXCIsIHNpemU6IFwibGdcIiwgY29sb3I6IHByaW1hcnkgfSwgcHJpbWFyeSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdyYXBwZXIsIHsgdGl0bGU6IFwiV2l0aCBpY29uXCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCByb3VuZGVkOiB0cnVlLCBjb2xvcjogY29sb3IgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIlBsdXNcIiB9KSxcbiAgICAgICAgICAgIGNvbG9yKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIkljb24gb25seVwiIH0sIGNvbG9ycy5tYXAoKGNvbG9yKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsga2V5OiBjb2xvciwgcm91bmRlZDogdHJ1ZSwgc2l6ZTogXCJpY29uXCIsIGNvbG9yOiBjb2xvciB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IFwiSG9tZVwiIH0pKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVyLCB7IHRpdGxlOiBcIkljb24gb25seSAob3V0bGluZWQpXCIgfSwgY29sb3JzLm1hcCgoY29sb3IpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBrZXk6IGNvbG9yLCB2YXJpYW50OiBcIm91dGxpbmVkXCIsIHJvdW5kZWQ6IHRydWUsIHNpemU6IFwiaWNvblwiLCBjb2xvcjogY29sb3IgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkhlYXJ0XCIgfSkpKSkpKSkpO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uc1BhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1idXR0b25zLXBhZ2UuanMubWFwIiwiaW1wb3J0IHsgQm94LCBDaGVja0JveCwgQ3VycmVuY3lJbnB1dCwgRGF0ZVBpY2tlciwgRHJvcFpvbmUsIEhlYWRlciwgSW5wdXQsIExhYmVsLCBQaG9uZUlucHV0LCBTZWxlY3QsIFRleHRBcmVhLCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEZvcm1QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbZGF0ZSwgc2V0RGF0ZV0gPSB1c2VTdGF0ZSgnMjAyMS0wNi0xNycpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICAgIHsgdmFsdWU6ICcxJywgbGFiZWw6ICdPZmZpY2UgMScgfSxcbiAgICAgICAgeyB2YWx1ZTogJzInLCBsYWJlbDogJ09mZmljZSAyJyB9LFxuICAgIF07XG4gICAgY29uc3QgeyB0cmFuc2xhdGVDb21wb25lbnQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImdyZXlcIiwgaWQ6IFwiZm9ybVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7IGFzOiBcImFcIiwgaHJlZjogXCIjZm9ybVwiIH0sIFwiRm9ybVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCJ4bFwiLCBmbGV4OiB0cnVlLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIHN0eWxlOiB7IGdhcDogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCB7IGh0bWxGb3I6IFwiZmlyc3ROYW1lXCIgfSwgXCJGaXJzdCBuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IGlkOiBcImZpcnN0TmFtZVwiLCB3aWR0aDogMSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgd2lkdGg6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHsgaHRtbEZvcjogXCJsYXN0TmFtZVwiIH0sIFwiTGFzdCBuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7IGlkOiBcImxhc3ROYW1lXCIsIHdpZHRoOiAxIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBodG1sRm9yOiBcInBob25lXCIgfSwgXCJQaG9uZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQaG9uZUlucHV0LCB7IGlkOiBcInBob25lXCIgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwieGxcIiwgZmxleDogdHJ1ZSwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBzdHlsZTogeyBnYXA6IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgXCJTZWxlY3RcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCB7IHZhbHVlOiB2YWx1ZSwgb25DaGFuZ2U6IChzZWxlY3RlZCkgPT4gc2V0VmFsdWUoc2VsZWN0ZWQpLCBvcHRpb25zOiBvcHRpb25zIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgXCJEYXRlIG9mIGJpcnRoXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERhdGVQaWNrZXIsIHsgcHJvcGVydHlUeXBlOiBcImRhdGVcIiwgb25DaGFuZ2U6IHNldERhdGUsIHZhbHVlOiBkYXRlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgeyBodG1sRm9yOiBcImN1cnJlbmN5XCIgfSwgXCJTYWxhcnlcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ3VycmVuY3lJbnB1dCwgeyBpZDogXCJjdXJyZW5jeVwiLCBpbnRsQ29uZmlnOiB7IGxvY2FsZTogJ2VuLVVTJywgY3VycmVuY3k6ICdHQlAnIH0gfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHA6IFwieGxcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHsgaHRtbEZvcjogXCJ0ZXh0YXJlYTFcIiB9LCBcIkFkZGl0aW9uYWxcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0QXJlYSwgeyBpZDogXCJ0ZXh0YXJlYTFcIiwgd2lkdGg6IDEgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgcDogXCJ4bFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja0JveCwgeyBpZDogXCJpc0FjdGl2ZVwiIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIHsgaW5saW5lOiB0cnVlLCBodG1sRm9yOiBcImlzQWN0aXZlXCIsIG1sOiBcImRlZmF1bHRcIiB9LCBcIkFjdGl2ZVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyBwOiBcInhsXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCBcIkF0dGFjaG1lbnRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZSwgeyB2YWxpZGF0ZTogeyBtYXhTaXplOiAxMDI0MDAsIG1pbWVUeXBlczogWydhcHBsaWNhdGlvbi9wZGYnLCAnaW1hZ2UvcG5nJ10gfSwgdHJhbnNsYXRpb25zOiB0cmFuc2xhdGVDb21wb25lbnQoJ0Ryb3Bab25lJywgeyByZXR1cm5PYmplY3RzOiB0cnVlIH0pIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGb3JtUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvcm0tcGFnZS5qcy5tYXAiLCJpbXBvcnQgeyBCb3gsIEg2LCBIZWFkZXIsIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBGZWF0aGVySWNvbnMgZnJvbSAncmVhY3QtZmVhdGhlcic7XG5jb25zdCBJY29uc1BhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgSWNvbnNTZXQgPSBPYmplY3Qua2V5cyhGZWF0aGVySWNvbnMpXG4gICAgICAgIC5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICdkZWZhdWx0JylcbiAgICAgICAgLm1hcCgoaWNvbk5hbWUpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB3aWR0aDogXCIxMjBweFwiLCBoZWlnaHQ6IFwiMTIwcHhcIiwga2V5OiBpY29uTmFtZSwgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSDYsIG51bGwsIGljb25OYW1lKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGljb246IGljb25OYW1lLCBzaXplOiAzMiB9KSkpKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJpY29uc1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7IGFzOiBcImFcIiwgaHJlZjogXCIjaWNvbnNcIiB9LCBcIkljb25zXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImNvbnRhaW5lclwiLCBmbGV4OiB0cnVlLCBmbGV4V3JhcDogXCJ3cmFwXCIsIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLCBzdHlsZTogeyBnYXA6ICcxNnB4JyB9IH0sIEljb25zU2V0KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEljb25zUGFnZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWljb25zLXBhZ2UuanMubWFwIiwiaW1wb3J0IHsgQm94LCBIZWFkZXIsIElsbHVzdHJhdGlvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmNvbnN0IHZhcmlhbnRzID0gW1xuICAgICdBY2NlcHQnLFxuICAgICdDdXAnLFxuICAgICdCYWcnLFxuICAgICdCZXdhcmUnLFxuICAgICdOb3RlYm9vaycsXG4gICAgJ05vdEZvdW5kJyxcbiAgICAnUGFkbG9jaycsXG4gICAgJ1Bob3RvcycsXG4gICAgJ1BsdWcnLFxuICAgICdSb2NrZXROZXcnLFxuICAgICdUYWdzJyxcbiAgICAnRm9sZGVyJyxcbiAgICAnQm94JyxcbiAgICAnQ2FsZW5kYXInLFxuICAgICdDYW5jZWwnLFxuICAgICdDYXJkcycsXG4gICAgJ0NsaXAnLFxuICAgICdDbG91ZCcsXG4gICAgJ0RldGFpbHMnLFxuICAgICdEb2NzJyxcbiAgICAnRHJhd2VyJyxcbiAgICAnSWRlbnRpdHlDYXJkJyxcbl07XG5jb25zdCBJbGx1c3RyYXRpb25QYWdlID0gKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJpbGx1c3RyYXRpb25zXCIgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgeyBhczogXCJhXCIsIGhyZWY6IFwiI2lsbHVzdHJhdGlvbnNcIiB9LCBcIklsbHVzdHJhdGlvbnNcIiksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiwgZmxleDogdHJ1ZSwgZmxleFdyYXA6IFwid3JhcFwiLCBzdHlsZTogeyByb3dHYXA6IDMyIH0gfSwgdmFyaWFudHMubWFwKCh2YXJpYW50KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsga2V5OiB2YXJpYW50LCB3aWR0aDogMjAwLCBoZWlnaHQ6IDIwMCwgc3R5bGU6IHsgdGV4dEFsaWduOiAnY2VudGVyJyB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWxsdXN0cmF0aW9uLCB7IHZhcmlhbnQ6IHZhcmlhbnQgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgbnVsbCwgdmFyaWFudCkpKSkpKSk7XG5leHBvcnQgZGVmYXVsdCBJbGx1c3RyYXRpb25QYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWxsdXN0cmF0aW9ucy1wYWdlLmpzLm1hcCIsImltcG9ydCB7IEJveCwgSGVhZGVyLCBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuY29uc3QgTWVzc2FnZXNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHZhcmlhbnRzID0gWydpbmZvJywgJ2RhbmdlcicsICdzdWNjZXNzJywgJ3dhcm5pbmcnXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJtb2RhbFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7IGFzOiBcImFcIiwgaHJlZjogXCIjbW9kYWxcIiB9LCBcIk1lc3NhZ2VzXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2VCb3gsIHsga2V5OiB2YXJpYW50LCBtZXNzYWdlOiB2YXJpYW50LCB2YXJpYW50OiB2YXJpYW50LCBtYjogXCJsZ1wiLCBvbkNsb3NlQ2xpY2s6ICgpID0+IHsgfSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IG15OiBcInhsXCIgfSwgXCJXaXRoIGV4dHJhIGJvZHlcIiksXG4gICAgICAgICAgICB2YXJpYW50cy5tYXAoKHZhcmlhbnQpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2VCb3gsIHsga2V5OiB2YXJpYW50LCBtZXNzYWdlOiB2YXJpYW50LCB2YXJpYW50OiB2YXJpYW50LCBtYjogXCJsZ1wiLCBvbkNsb3NlQ2xpY2s6ICgpID0+IHsgfSB9LCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdhIGl0YXF1ZSBxdWFlcmF0IHF1aWEgZXVtIHJhdGlvbmUgaXBzdW0gZGVsZW5pdGkuIE9mZmljaWlzIG5pc2kgbm9uIG5lY2Vzc2l0YXRpYnVzIGxhdWRhbnRpdW0gYmxhbmRpdGlpcyBpbnZlbnRvcmUuXCIpKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXNQYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVzc2FnZXMtcGFnZS5qcy5tYXAiLCJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgTW9kYWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBNb2RhbEV4YW1wbGUgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHNldFNob3dNb2RhbCh0cnVlKSwgW10pO1xuICAgIGNvbnN0IG1vZGFsUHJvcHMgPSB7XG4gICAgICAgIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgICAgICAgbGFiZWw6ICdNb2RhbCBoZWFkZXInLFxuICAgICAgICBpY29uOiAnQm9va21hcmsnLFxuICAgICAgICB0aXRsZTogJ01vZGFsIHRpdGxlJyxcbiAgICAgICAgc3ViVGl0bGU6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LicsXG4gICAgICAgIGJ1dHRvbnM6IFt7IGxhYmVsOiAnQ2FuY2VsJyB9LCB7IGxhYmVsOiAnRGVsZXRlJywgY29sb3I6ICdkYW5nZXInIH1dLFxuICAgICAgICBvbkNsb3NlOiAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpLFxuICAgICAgICBvbk92ZXJsYXlDbGljazogKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKSxcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7IG9uQ2xpY2s6IGhhbmRsZUJ1dHRvbkNsaWNrIH0sIFwiU2hvdyBtb2RhbFwiKSxcbiAgICAgICAgc2hvd01vZGFsICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTW9kYWwsIHsgLi4ubW9kYWxQcm9wcyB9KSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1vZGFsRXhhbXBsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZGFsLWV4YW1wbGUuanMubWFwIiwiaW1wb3J0IHsgQm94LCBIZWFkZXIgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbEV4YW1wbGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rlc2lnbi1zeXN0ZW0tZXhhbXBsZXMvaW5kZXguanMnO1xuY29uc3QgTW9kYWxQYWdlID0gKCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiZ3JleVwiLCBpZDogXCJtb2RhbFwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHsgYXM6IFwiYVwiLCBocmVmOiBcIiNtb2RhbFwiIH0sIFwiTW9kYWxcIiksXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1vZGFsRXhhbXBsZSwgbnVsbCkpKSk7XG5leHBvcnQgZGVmYXVsdCBNb2RhbFBhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tb2RhbC1wYWdlLmpzLm1hcCIsImltcG9ydCB7IEJveCwgVGFiLCBUYWJzLCBIZWFkZXIgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFRhYnNQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGUoJ2ZpcnN0Jyk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImdyZXlcIiwgaWQ6IFwidGFic1wiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCB7IGFzOiBcImFcIiwgaHJlZjogXCIjdGFic1wiIH0sIFwiVGFic1wiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCb3gsIHsgdmFyaWFudDogXCJjb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJzLCB7IGN1cnJlbnRUYWI6IHNlbGVjdGVkVGFiLCBvbkNoYW5nZTogc2V0U2VsZWN0ZWRUYWIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYiwgeyBpZDogXCJmaXJzdFwiLCBsYWJlbDogXCJGaXJzdCB0YWJcIiB9LCBcIkZpcnN0XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFiLCB7IGlkOiBcInNlY29uZFwiLCBsYWJlbDogXCJTZWNvbmQgdGFiXCIgfSwgXCJTZWNvbmRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWIsIHsgaWQ6IFwidGhpcmRcIiwgbGFiZWw6IFwiVGhpcmQgdGFiXCIgfSwgXCJUaGlyZFwiKSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGFic1BhZ2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YWJzLXBhZ2UuanMubWFwIiwiaW1wb3J0IHsgQm94LCBIMSwgSDIsIEgzLCBINCwgSDUsIEg2LCBIZWFkZXIsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5jb25zdCBUeXBvZ3JhcGh5UGFnZSA9ICgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgeyB2YXJpYW50OiBcImdyZXlcIiwgaWQ6IFwidHlwb2dyYXBoeVwiIH0sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHsgYXM6IFwiYVwiLCBocmVmOiBcIiN0eXBvZ3JhcGh5XCIgfSwgXCJUeXBvZ3JhcGh5XCIpLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCB7IHZhcmlhbnQ6IFwiY29udGFpbmVyXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMSwgbnVsbCwgXCJUaGlzIGlzIEgxIGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMiwgbnVsbCwgXCJUaGlzIGlzIEgyIGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIMywgbnVsbCwgXCJUaGlzIGlzIEgzIGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChINCwgbnVsbCwgXCJUaGlzIGlzIEg0IGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChINSwgbnVsbCwgXCJUaGlzIGlzIEg1IGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChINiwgbnVsbCwgXCJUaGlzIGlzIEg2IGhlYWRlclwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHQsIHsgdmFyaWFudDogXCJsZ1wiIH0sIFwiU2VkIHRlbXB1cyB0ZW1wb3IgZGljdHVtLiBJbnRlZ2VyIGluIGxhY3VzIGxhY3VzLiBDdXJhYml0dXIgc2l0IGFtZXQgYW50ZSBlZ2V0IGlwc3VtIGZpbmlidXMgZ3JhdmlkYS4gRG9uZWMgdml2ZXJyYSBhbGlxdWV0IGxpYmVyby4gSW50ZWdlciBhIG5pc2wgYWMgbmVxdWUgdGVtcG9yIHBoYXJldHJhLiBEb25lYyBzYXBpZW4gdG9ydG9yLCBmZXJtZW50dW0gZXUganVzdG8gc2VkLCBlZ2VzdGFzIHVsdHJpY2llcyBsYWN1cy4gUGVsbGVudGVzcXVlIGVnZXQgdGluY2lkdW50IG5pYmguIFV0IG5vbiBsZWN0dXMgdmFyaXVzLCBzZW1wZXIgbG9yZW0gdmVsLCBwb3J0YSBvcmNpLiBEdWlzIGlkIHJpc3VzIGV1IGFyY3UgZWZmaWNpdHVyIGJpYmVuZHVtLiBJbiBlZ2V0IGVyb3MgZXguIEludGVnZXIgZXQgbWFsZXN1YWRhIHRlbGx1cy5cIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCBudWxsLCBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCB2ZW5lbmF0aXMgc2VtcGVyIG1hc3NhIGEgcmhvbmN1cy4gUHJhZXNlbnQgZXUgcnV0cnVtIGxlby4gRG9uZWMgbWFsZXN1YWRhIHF1aXMgbWV0dXMgdmVsIHB1bHZpbmFyLiBRdWlzcXVlIGluIHZlaGljdWxhIG51bGxhLiBOYW0gdmVzdGlidWx1bSBmYWNpbGlzaXMgbG9yZW0sIGFjIG1hdHRpcyBvZGlvIGFsaXF1ZXQgZXQuIFN1c3BlbmRpc3NlIGVuaW0gbGlndWxhLCB1bHRyaWNpZXMgcGVsbGVudGVzcXVlIGxpZ3VsYSBpZCwgbW9sZXN0aWUgc29kYWxlcyBxdWFtLiBFdGlhbSBpbiBsZWN0dXMgdXQgbmliaCBsYW9yZWV0IGNvbnNlcXVhdC5cIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUZXh0LCB7IHZhcmlhbnQ6IFwic21cIiB9LCBcIlN1c3BlbmRpc3NlIGVmZmljaXR1ciwgdXJuYSBzaXQgYW1ldCB0ZW1wb3IgZGlnbmlzc2ltLCBleCBlc3QgZmV1Z2lhdCBleCwgc2VkIG1vbGVzdGllIGFudGUgZXJhdCBlZ2V0IGRvbG9yLiBEdWlzIHB1cnVzIG9yY2ksIGNvbW1vZG8gbm9uIHNlbXBlciBzZWQsIGxhb3JlZXQgcXVpcyBuaXNsLiBEb25lYyBhIGJpYmVuZHVtIGFyY3UuIERvbmVjIGVnZXQganVzdG8gbnVuYy4gTnVuYyBlbGVtZW50dW0gYXVndWUgZXQgYmliZW5kdW0gbW9sZXN0aWUuIER1aXMgdGluY2lkdW50IHBlbGxlbnRlc3F1ZSBlbmltIGFjIG1hdHRpcy4gTnVuYyBjb25ndWUsIGFudGUgaWQgZWZmaWNpdHVyIGdyYXZpZGEsIHR1cnBpcyB2ZWxpdCBwb3J0YSBudW5jLCBhdCBlZ2VzdGFzIHVybmEgb2RpbyBlZ2V0IGFyY3UuIFV0IGVuaW0gbWV0dXMsIGZyaW5naWxsYSBldSByaXN1cyBldSwgc29kYWxlcyB2ZW5lbmF0aXMgbGFjdXMuXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dCwgeyB2YXJpYW50OiBcInhzXCIgfSwgXCJEb25lYyB2ZWwgbWFsZXN1YWRhIHR1cnBpcy4gQ3VyYWJpdHVyIHVsdHJpY2llcyBuZXF1ZSBhIHNhcGllbiB1bGxhbWNvcnBlciwgcXVpcyBmYXVjaWJ1cyBmZWxpcyBwb3J0YS4gRXRpYW0gZmVybWVudHVtIG9kaW8gYXQgcnV0cnVtIHByZXRpdW0uIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBTdXNwZW5kaXNzZSBhbGlxdWV0IHN1c2NpcGl0IHR1cnBpcyBhdCBwbGFjZXJhdC4gQ3JhcyBxdWlzIHNlbSB2aXRhZSB2ZWxpdCB2ZWhpY3VsYSBjb25ndWUgZXQgbmVjIGxpYmVyby4gQ3VyYWJpdHVyIGFsaXF1YW0sIGVzdCBpZCBkYXBpYnVzIGVnZXN0YXMsIGZlbGlzIGF1Z3VlIHN1c2NpcGl0IGVzdCwgZXUgdmVuZW5hdGlzIGxlbyBqdXN0byB2ZWwgc2FwaWVuLiBEb25lYyBpZCBkaWduaXNzaW0gZGlhbS4gTnVsbGEgZmV1Z2lhdCBleCBzaXQgYW1ldCBhdWd1ZSBzb2xsaWNpdHVkaW4gcHVsdmluYXIuIFBlbGxlbnRlc3F1ZSBpZCBmZWxpcyByaG9uY3VzLCB2YXJpdXMgc2VtIGV0LCBjb25kaW1lbnR1bSBsaWd1bGEuIFByb2luIGFjY3Vtc2FuIHNpdCBhbWV0IG5pc2wgYWMgdmVoaWN1bGEuIE51bGxhIGZhY2lsaXNpLiBVdCBwaGFyZXRyYSB2ZWwgdG9ydG9yIHZlbCBsYWNpbmlhLiBOdWxsYSBzaXQgYW1ldCBuZXF1ZSBsZWN0dXMuIE1hdXJpcyB0cmlzdGlxdWUganVzdG8gaW4gc2VtIHRlbXB1cywgYXQgc2FnaXR0aXMgbGVjdHVzIG1vbGVzdGllLiBQaGFzZWxsdXMgc2l0IGFtZXQgbnVsbGEgaWQgbWkgcnV0cnVtIHZhcml1cyBpbiBldSBuaXNpLlwiKSkpKTtcbmV4cG9ydCBkZWZhdWx0IFR5cG9ncmFwaHlQYWdlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwb2dyYXBoeS1wYWdlLmpzLm1hcCJdLCJuYW1lcyI6WyJUb3BCYXIiLCJ2ZXJzaW9ucyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJHSVRIVUJfVVJMIiwid2luZG93IiwiQWRtaW5KUyIsImVudiIsIlNMQUNLX1VSTCIsIkRPQ1VNRU5UQVRJT05fVVJMIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQm94IiwiZmxleCIsImZsZXhHcm93IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiVGV4dCIsIm1sIiwibXIiLCJhZG1pbiIsIkJ1dHRvbiIsImNvbG9yIiwiYXMiLCJocmVmIiwidGFyZ2V0IiwiSWNvbiIsImljb24iLCJBdXRoVXNlcnMiLCJlbWFpbCIsInBhc3N3b3JkIiwidGl0bGUiLCJ0aGVtZSIsIldyYXBwZXIiLCJzdHlsZWQiLCJTdHlsZWRMb2dvIiwiaW1nIiwidGhlbWVHZXQiLCJMb2dpbiIsInByb3BzIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwidHJhbnNsYXRlQ29tcG9uZW50IiwidHJhbnNsYXRlTWVzc2FnZSIsInVzZVRyYW5zbGF0aW9uIiwiZGVmYXVsdFVzZXIiLCJicmFuZGluZyIsIm1lc3NhZ2UiLCJGcmFnbWVudCIsInZhcmlhbnQiLCJiZyIsImhlaWdodCIsImJveFNoYWRvdyIsIndpZHRoIiwibWV0aG9kIiwicCIsIkg1IiwibWFyZ2luQm90dG9tIiwibG9nbyIsInNyYyIsImFsdCIsImNvbXBhbnlOYW1lIiwiTWVzc2FnZUJveCIsIm15Iiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJGb3JtR3JvdXAiLCJMYWJlbCIsInJlcXVpcmVkIiwiSW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIiwiYXV0b0NvbXBsZXRlIiwibXQiLCJ0ZXh0QWxpZ24iLCJ3aXRoTWFkZVdpdGhMb3ZlIiwiTWFkZVdpdGhMb3ZlIiwiU2lkZWJhclJlc291cmNlU2VjdGlvbiIsInJlc291cmNlcyIsImVsZW1lbnRzIiwidXNlTmF2aWdhdGlvblJlc291cmNlcyIsIk5hdmlnYXRpb24iLCJEb250VG91Y2hUaGlzIiwicmVjb3JkIiwiZmxleERpcmVjdGlvbiIsImdhcCIsIkgzIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3dZIiwiZm9udEZhbWlseSIsIkpTT04iLCJzdHJpbmdpZnkiLCJEZXRhaWxlZFN0YXRzIiwiRHJhd2VyQ29udGVudCIsIkFjdGlvbkhlYWRlciIsIm9taXRBY3Rpb25zIiwiVGh1bWIiLCJwcm9wZXJ0eSIsInZhbHVlIiwicGFyYW1zIiwiYXBpIiwiQXBpQ2xpZW50IiwiQ3VzdG9tUGFnZSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJhZGROb3RpY2UiLCJ1c2VOb3RpY2UiLCJ0YyIsInRtIiwiaTE4biIsImxhbmd1YWdlIiwidXNlRWZmZWN0IiwiZ2V0UGFnZSIsInBhZ2VOYW1lIiwidGhlbiIsInJlcyIsImRhdGEiLCJzZW5kU2ltcGxlTm90aWNlIiwic2VuZFRyYW5zbGF0ZWROb3RpY2UiLCJvcHRpb25zIiwic29tZVBhcmFtcyIsImpvaW4iLCJib2R5IiwiTGluayIsIlBsYWNlaG9sZGVyIiwib25DbGljayIsIkJsb2dQYWdlIiwibGF6eSIsIkJ1dHRvbnNQYWdlIiwiRm9ybVBhZ2UiLCJJY29uc1BhZ2UiLCJJbGx1c3RyYXRpb25QYWdlIiwiTWVzc2FnZXNQYWdlIiwiTW9kYWxQYWdlIiwiVGFic1BhZ2UiLCJUeXBvZ3JhcGh5UGFnZSIsIkRlc2lnblN5c3RlbVBhZ2UiLCJTVE9SWUJPT0tfVVJMIiwiaWQiLCJIZWFkZXIiLCJTdXNwZW5zZSIsImZhbGxiYWNrIiwiRGVzaWduU3l0ZW1QYWdlUGxhY2Vob2xkZXIiLCJBcnJheSIsImZyb20iLCJtYXAiLCJfIiwiaW5kZXgiLCJrZXkiLCJVc2VyQ29tcG9uZW50cyIsInVuZGVmaW5lZCIsIlZlcnNpb24iLCJDdXN0b21BY3Rpb24iLCJpc0RyYXdlclZpc2libGUiLCJzZXRJc0RyYXdlclZpc2libGUiLCJoYW5kbGVyIiwiaHRtbCIsImNvbnNvbGUiLCJsb2ciLCJEcmF3ZXIiLCJzaXplIiwicm91bmRlZCIsIkRyb3Bab25lIiwibWIiLCJib3JkZXJsZXNzIiwiUmljaFRleHRFZGl0b3IiLCJvbkNoYW5nZSIsImNoaWxkcmVuIiwiY29sb3JzIiwicHJpbWFyeSIsInNldFZhbHVlIiwiZGF0ZSIsInNldERhdGUiLCJsYWJlbCIsImh0bWxGb3IiLCJQaG9uZUlucHV0IiwiU2VsZWN0Iiwic2VsZWN0ZWQiLCJEYXRlUGlja2VyIiwicHJvcGVydHlUeXBlIiwiQ3VycmVuY3lJbnB1dCIsImludGxDb25maWciLCJsb2NhbGUiLCJjdXJyZW5jeSIsIlRleHRBcmVhIiwiQ2hlY2tCb3giLCJpbmxpbmUiLCJ2YWxpZGF0ZSIsIm1heFNpemUiLCJtaW1lVHlwZXMiLCJ0cmFuc2xhdGlvbnMiLCJyZXR1cm5PYmplY3RzIiwiSWNvbnNTZXQiLCJPYmplY3QiLCJrZXlzIiwiRmVhdGhlckljb25zIiwiZmlsdGVyIiwiaWNvbk5hbWUiLCJINiIsImZsZXhXcmFwIiwidmFyaWFudHMiLCJyb3dHYXAiLCJJbGx1c3RyYXRpb24iLCJvbkNsb3NlQ2xpY2siLCJNb2RhbEV4YW1wbGUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVCdXR0b25DbGljayIsInVzZUNhbGxiYWNrIiwibW9kYWxQcm9wcyIsInN1YlRpdGxlIiwiYnV0dG9ucyIsIm9uQ2xvc2UiLCJvbk92ZXJsYXlDbGljayIsIk1vZGFsIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsIlRhYnMiLCJjdXJyZW50VGFiIiwiVGFiIiwiSDEiLCJIMiIsIkg0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUtBLE1BQU1BLE1BQU0sR0FBT0EsTUFBSztNQUN0QixNQUFNQyxRQUFRLEdBQUdDLHNCQUFXLENBQUVDLEtBQWlCLElBQUtBLEtBQUssQ0FBQ0YsUUFBUSxDQUFDLENBQUE7TUFDbkUsTUFBTUcsVUFBVSxHQUFJQyxNQUFjLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxVQUFVLENBQUE7TUFDekQsTUFBTUksU0FBUyxHQUFJSCxNQUFjLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFTLENBQUE7TUFDdkQsTUFBTUMsaUJBQWlCLEdBQUlKLE1BQWMsQ0FBQ0MsT0FBTyxDQUFD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
