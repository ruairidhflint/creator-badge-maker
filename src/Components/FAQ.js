import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const faqs = [
  {
    question: 'How do I add the badge to my project?',
    answer:
      'Currently you can copy either the standard HTML code or a React component from the section above. The React component can be copied into a new file and imported into the main App component of your project. The standard HTML can be added to the top level of any basic web project or injected in where possible. Both versions use inline styles for ease but there is nothing complicated going on; feel free to extract the styles into a stylesheet, CSS-in-JS or whatever system you are using.',
  },
  {
    question: 'Can I customise the badge?',
    answer:
      'For sure! This app is just a thin layer of UX to quickly generate the badges, nothing complicated is going on. The component itself should be fairly easy to dissect and play with but if not, feel free to send me a message.',
  },
  {
    question: 'Can I use it in Vue/Angular/Other Framework?',
    answer:
      'Sure! I imagine it is fairly easy to convert the HTML to a component in any other framework - if you do so, please message me to submit a pull request here and I’ll add it as an option!',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function FAQs() {
  return (
    <div className="w-full ">
      <div className="w-full mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className=" mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Instructions & FAQ</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
