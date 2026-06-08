import {Meta, StoryFn} from '@storybook/react-vite';
import {HelperText} from '@hotcakes/ui-react/HelperText';

export default {
    title: 'HelperText'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
        <HelperText>{'This field is required'}</HelperText>
        <HelperText icon={'info'}>{'Supported formats: PNG, JPG, SVG'}</HelperText>
        <HelperText icon={'warning'} center>{'Centered helper text'}</HelperText>
    </div>
);
