import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterRadio} from '@hotcakes/ui-react/FilterRadio';

export default {
    title: 'FilterRadio'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <div style={{display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
        <FilterRadio id={'all'} name={'filter'} value={'all'} defaultChecked>{'All'}</FilterRadio>
        <FilterRadio id={'design'} name={'filter'} value={'design'}>{'Design'}</FilterRadio>
        <FilterRadio id={'development'} name={'filter'} value={'development'}>{'Development'}</FilterRadio>
        <FilterRadio id={'branding'} name={'filter'} value={'branding'}>{'Branding'}</FilterRadio>
    </div>
);
