import React, { FunctionComponent } from "react";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Github } from "react-bootstrap-icons";

export interface FooterData {
  header: string;
  imprintLinkText: string;
  disclaimerLinkText: string;
  cookiePolicyLinkText: string;
  contactLinkText: string;
  githubLink: string;
  linkedinLink: string;
  instagramLink: string;
  facebookLink: string;
}

const Footer: FunctionComponent<FooterData> = ({
  header,
  imprintLinkText,
  disclaimerLinkText,
  cookiePolicyLinkText,
  contactLinkText,
  linkedinLink,
  instagramLink,
  facebookLink,
  githubLink,
}) => {
  return (
    <div className="container-fluid h-100 footer">
      <div className="row p-5">
        <div className="col-12 col-sm-6">
          <h5>{header}</h5>
          <ul className="footer-link-list">
            <FooterLink linkText={imprintLinkText} linkURL="/" />
            <FooterLink linkText={disclaimerLinkText} linkURL="/" />
            <FooterLink linkText={cookiePolicyLinkText} linkURL="/" />
            <FooterLink linkText={contactLinkText} linkURL="/" />
          </ul>
        </div>
        <div className="col-12 col-sm-6">
          <div className="row float-sm-end">
            <IconLink linkURL={githubLink}>
              <Github size={32} />
            </IconLink>
            <IconLink linkURL={linkedinLink}>
              <Linkedin size={32} />
            </IconLink>
            <IconLink linkURL={instagramLink}>
              <Instagram size={32} />
            </IconLink>
            <IconLink linkURL={facebookLink}>
              <Facebook size={32} />
            </IconLink>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FooterLinkData {
  linkText: string;
  linkURL: string;
}

const FooterLink: FunctionComponent<FooterLinkData> = ({
  linkText,
  linkURL,
}) => {
  return (
    <li className="footer-link-list-item">
      <Link href={linkURL}>
        <a className="footer-link">{linkText}</a>
      </Link>
    </li>
  );
};

interface IconLinkData {
  linkURL: string;
}

const IconLink: FunctionComponent<IconLinkData> = ({ children, linkURL }) => {
  return (
    <div className="col-1 m-3">
      <a
        href={linkURL}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        {children}
      </a>
    </div>
  );
};

export default Footer;
