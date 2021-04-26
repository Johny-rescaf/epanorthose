import Link from "next/link";
import { Navbar, Nav, Dropdown, Icon, InputGroup, Input, Avatar } from "rsuite";

const CustomInput = ({ ...props }) => <Input {...props} />;

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
  let onSelect = () => {
    console.log("Here");
  };
  return (
    <> 
      <Navbar appearance="inverse" style={{ }}>
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
            <Dropdown title="Francais">
              <Dropdown.Item eventKey="4">Francais</Dropdown.Item>
              <Dropdown.Item eventKey="5">English</Dropdown.Item>
            </Dropdown>

            <Dropdown
              title="Account"
              placement="bottomEnd"
              renderTitle={children => {
                return <Avatar size="sm" style={{marginTop: '.9rem', marginRight: '.9rem', marginLeft: '.9rem'}} circle>JK</Avatar>;
              }}
            >
              <Link href="/account">
                <Dropdown.Item>
                    <><Icon icon="user" /> Account</>
                </Dropdown.Item>
              </Link>

              <Dropdown.Item>
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
