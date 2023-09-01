import {Logo, LogoBar, LogoText, TopBar} from "./Header.styled.tsx";

export function Header() {
    return (
        <TopBar>
            <LogoBar>
                <Logo/>
                <div>
                    <LogoText>TASKMASTER</LogoText>
                </div>
            </LogoBar>
        </TopBar>
    )
}