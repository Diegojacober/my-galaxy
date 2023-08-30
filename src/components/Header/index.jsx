import { Menu, Title } from './styles';
import img from '../../assets/logo.svg';

export default function Header() {
    return(
        <Menu>
            <img src={img} alt="Brand logo" />
            <Title>my galaxy day</Title>
        </Menu>
    )
}
