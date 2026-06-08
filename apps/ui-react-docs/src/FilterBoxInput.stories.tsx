import {Meta, StoryFn} from '@storybook/react-vite';
import {FilterBoxInput} from '@hotcakes/ui-react/FilterBoxInput';
import {FilterRadio} from '@hotcakes/ui-react/FilterRadio';

export default {
    title: 'FilterBoxInput'
} satisfies Meta;

export const Primary: StoryFn = () => (
    <FilterBoxInput label={'Tags'} helperText={'Filter by tag'}>
        <FilterRadio id={'react'} name={'tag'} value={'react'} defaultChecked>{'React'}</FilterRadio>
        <FilterRadio id={'typescript'} name={'tag'} value={'typescript'}>{'TypeScript'}</FilterRadio>
        <FilterRadio id={'figma'} name={'tag'} value={'figma'}>{'Figma'}</FilterRadio>
        <FilterRadio id={'css'} name={'tag'} value={'css'}>{'CSS'}</FilterRadio>
    </FilterBoxInput>
);
