import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from 'flowbite-react';

function EndFooter() {
  return (
    <Footer container className='font-DM font-medium'>
      <FooterCopyright href="#" by="Khajaa Oumaima™" year={2024} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}

export default EndFooter