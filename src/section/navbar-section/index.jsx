import Navbar from 'react-bootstrap/Navbar';
import { useTheme } from 'styled-components';
import { Icon, Link } from '@/component/element';
import {
	FacebookIcon,
	InstagramIcon,
	YoutubeIcon,
	LogoPng,
} from '@/asset';
import {
	Style,
	Container,
	RWDImg,
	RWDText,
	RWDIconLayout,
	RWDLinkLayout,
} from './style'

const NavBarSection = () => {
	const { primaryTheme} = useTheme();

  return (
		<Style>
			<Navbar>
				<Container>
					<Navbar.Brand href="#home" >
						<RWDImg
							src={LogoPng}
						/>
						<RWDText 
							$color={primaryTheme}
							$weight="700"
						>
							喵立翰 Miao Li-Han
						</RWDText>
					</Navbar.Brand>
					<RWDLinkLayout>
						<Link href="#advocacy">
							候選人主張
						</Link>
						<Link href="#events">
							最新活動
						</Link>
						<Link href="#issues">
							政策議題
						</Link>
						<Link href="#donate">
							小額捐款
						</Link>
						<Link href="#service">
							民眾服務信箱
						</Link>
					</RWDLinkLayout>
					<RWDIconLayout>
						<Icon
							src={FacebookIcon}
						/>
						<Icon
							src={InstagramIcon}
						/>
						<Icon
							src={YoutubeIcon}
						/>
					</RWDIconLayout>
				</Container>
			</Navbar>
		</Style>
  );
}

export default NavBarSection;
