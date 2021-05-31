import Link from "next/link";
import { Navbar, Nav, Dropdown, Icon, InputGroup, Input, Avatar, SelectPicker } from "rsuite";
import { useRouter } from "next/router";

const CustomInput = ({ ...props }) => <Input {...props} />;


let data = [
  {
    "label": <>
      <img
        src="https://flagcdn.com/20x15/us.png"
        srcset="https://flagcdn.com/40x30/us.png 2x,
        https://flagcdn.com/60x45/us.png 3x"
        width="20"
        height="15"
        alt="En" />&nbsp;
      English
    </>,
    "value": "us",
  },
  {
    "label": <>
      <img
        src="https://flagcdn.com/20x15/fr.png"
        srcset="https://flagcdn.com/40x30/fr.png 2x,
        https://flagcdn.com/60x45/fr.png 3x"
        width="20"
        height="15"
        alt="En" />&nbsp;
      French
    </>,
    "value": "fr",
  },
]

const CustomInputGroup = ({ placeholder, ...props }) => (
  <InputGroup {...props}>
    <Input placeholder={placeholder} />
    <InputGroup.Addon>
      <Icon icon="search" />
    </InputGroup.Addon>
  </InputGroup>
);

const CustomInputGroupWidthButton = ({ placeholder, ...props }) => (
  <InputGroup {...props} inside>
    <Input placeholder={placeholder} />
    <InputGroup.Button>
      <Icon icon="search" />
    </InputGroup.Button>
  </InputGroup>
);
// boxShadow: '0px 4px 8px #aaa' 
function Header() {
  const router = useRouter();

  let onSelect = () => {
    console.log("Here");
  };

  function logOut(){
    localStorage.removeItem('jtoken');
    router.push('/login')
  }
  return (
    <>
      <Navbar appearance="inverse" style={{}} className="header-nav">
        <Navbar.Header>
          <Link href="/">
            <a className="navbar-brand logo site-logo px-3">
              Epanorthose
            </a>
          </Link>
        </Navbar.Header>
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            minWidth: "320px",
            width: "30%",
            marginTop: ".7rem",
          }}
        >
          <CustomInputGroup size="md" placeholder="Medium" />
        </div>
        <Navbar.Body>
          <Nav pullRight>

            <Nav.Item icon={<Icon icon="cog" />}>Apropos</Nav.Item>

            <Nav.Item eventKey="2">contact</Nav.Item>

            <SelectPicker
              data={data}
              appearance="subtle"
              placeholder="Subtle"
              defaultValue="fr"
              placement="bottomEnd"
              style={{ marginTop: '.7rem', marginRight: '.5rem', marginLeft: '.5rem' }}
            />
            {/* <Dropdown 
              title="Francais">
              <Dropdown.Item eventKey="4">
              <img
                src="https://flagcdn.com/20x15/fr.png"
                srcset="https://flagcdn.com/40x30/fr.png 2x,
                  https://flagcdn.com/60x45/fr.png 3x"
                width="20"
                height="15"
                alt="Fr" />&nbsp;
                Francais
              </Dropdown.Item>
              
              <Dropdown.Item eventKey="5">
                <img
                  src="https://flagcdn.com/20x15/us.png"
                  srcset="https://flagcdn.com/40x30/us.png 2x,
                    https://flagcdn.com/60x45/us.png 3x"
                  width="20"
                  height="15"
                  alt="En" />&nbsp;
                English
              </Dropdown.Item>
            </Dropdown> */}

            <Dropdown
              title="Account"
              placement="bottomEnd"
              renderTitle={children => {
                return <Avatar size="sm" style={{ marginTop: '.9rem', marginRight: '.9rem', marginLeft: '.9rem' }} circle>JK</Avatar>;
              }}
            >
              <Link href="/account">
                <Dropdown.Item>
                  <><Icon icon="user" /> Account</>
                </Dropdown.Item>
              </Link>

              <Dropdown.Item onSelect={logOut}>
                <Icon icon="sign-out" /> Logout
              </Dropdown.Item>
            </Dropdown>

          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
}

export default Header;
