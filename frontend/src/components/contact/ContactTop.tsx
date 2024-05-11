import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';

export default function ContactTop() {
  return (
    <SectionWrapper height='inherit' bgColor='whitesmoke'>
      <PageTitle full>Contact</PageTitle>
      <PageTitle full variant='h6'>
        Please fill the form and we'll get back to you within 3 business days.
      </PageTitle>
    </SectionWrapper>
  )
}