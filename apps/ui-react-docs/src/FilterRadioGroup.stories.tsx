import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterRadioGroup} from '@hotcakes/ui-react/FilterRadioGroup';
import {FilterRadio} from '@hotcakes/ui-react/FilterRadio';

export default {
    title: 'FilterRadioGroup'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <FilterRadioGroup label={'Category'} helperText={'Select one category'}>
        <FilterRadio id={'all'} name={'category'} value={'all'} defaultChecked>{'All'}</FilterRadio>
        <FilterRadio id={'design'} name={'category'} value={'design'}>{'Design'}</FilterRadio>
        <FilterRadio id={'development'} name={'category'} value={'development'}>{'Development'}</FilterRadio>
        <FilterRadio id={'branding'} name={'category'} value={'branding'}>{'Branding'}</FilterRadio>
    </FilterRadioGroup>
);
