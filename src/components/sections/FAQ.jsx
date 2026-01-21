import React from 'react';
import { Container, SectionTitle, Accordion } from '../ui';

const FAQ = () => {
  const faqItems = [
    {
      title: 'Do I need a reservation?',
      content: 'While walk-ins are welcome, we highly recommend making a reservation, especially for weekends and holidays. You can easily book a table through our website or by calling us directly.',
    },
    {
      title: 'What are your opening hours?',
      content: 'We are open Monday to Friday from 11:00 AM to 10:00 PM, and Saturday to Sunday from 10:00 AM to 11:00 PM. We are closed on major holidays.',
    },
    {
      title: 'Do you accommodate dietary restrictions?',
      content: 'Absolutely! We offer vegetarian, vegan, gluten-free, and dairy-free options. Please inform your server about any allergies or dietary requirements, and our chef will be happy to accommodate your needs.',
    },
    {
      title: 'Is there parking available?',
      content: 'Yes, we have a dedicated parking lot for our guests. Additionally, street parking is available nearby. Valet service is also offered during peak hours.',
    },
    {
      title: 'Do you offer private dining for events?',
      content: 'Yes, we have a beautiful private dining room that can accommodate up to 40 guests. It\'s perfect for birthdays, anniversaries, corporate events, and other special occasions. Contact us for more details and booking.',
    },
    {
      title: 'Can I order takeout or delivery?',
      content: 'Yes, we offer both takeout and delivery services. You can place an order by phone or through our website. Delivery is available within a 5-mile radius.',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
          align="center"
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
