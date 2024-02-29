import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const footerStyle = {
  background:
    "linear-gradient(196deg, rgba(1,67,19,1) 0%, rgba(0,0,0,0.9780287114845938) 86%)",
  color: "white",
  padding: "20px",
  height: "45vh",
  width: "100%",
};

const displayStyle = {
  justifyContent: "space-evenly",
  display: "flex",

}

export default function Footer() {
  return (
    <div style={footerStyle}>
      <div style={displayStyle} >
        <div>
          <img src="" alt="Agro-Biz" />
          <div style={{ display: "flex" }}>
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
          </div>
        </div>
        <div>
          <h3 style={{ color: "#00b207" }}>Links</h3>
          <ul style={{ listStyleType: "none", padding: "0", lineHeight: "2" }}>
            <li>Home</li>
            <li>Market Place</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#00b207" }}>About us</h3>
          <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
            <li>Mission</li>
            <li>Vision</li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: "#00b207" }}>Contact</h3>

          <p
            style={{
              lineHeight: "2",
              display: "flex",
            }}
          >
            <LocationOnIcon></LocationOnIcon>
            Mest Africa, East Legon <br />
            19 Aluguntugui Street
          </p>

          <p style={{ display: "flex" }}>
            <PhoneIcon></PhoneIcon>
            +233 590453789/+233 507652435
          </p>

          <p style={{ display: "flex" }}>
            <EmailIcon></EmailIcon>
            agrobiz@gmail.com
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "gray",
          paddingTop: "50px",
        }}
      >
       Copyright &#169; Agrobiz Inc. 2024
      </div>
    </div>
  );
}
