import FaqItem from '../FaqItem/index'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="faqs-bcg-container">
      <div className="faqs-container">
        <h1 className="faqs-heading"> FAQs </h1>
        <ul className="faqs-unordered-container">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} eachFaq={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
