import { styled, css } from 'styled-components';

interface Props {
    area: 'snippet' | 'glyph' | 'characters';
    children: React.ReactNode;
    title: React.ReactNode;
    helperText?: React.ReactNode;
}

const Root = styled.div<{ $area: Props['area'] }>((props) => css`
    grid-area: ${props.$area};
`);

export const FontDisplaySection: React.FC<Props> = (props) => (
    <Root $area={props.area}>
        <span className="h5">{props.title}</span>
        <hr className="border border-dashed" />
        <div data-font>
            {props.children}
        </div>
        {props.helperText}
    </Root>
);
