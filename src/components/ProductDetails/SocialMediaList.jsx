import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'
import './SocialMediaList.css'

function SocialMediaList ({isVisible}) {
    return (
        <div className={`sm-buttons-container ${isVisible ? 'show': ''}`}>
          <WhatsappShareButton className='sm-button' url={'https://ibuy-three.vercel.app/'}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          <FacebookShareButton className='sm-button' url={'https://ibuy-three.vercel.app/'}>
            <FacebookIcon size={32} round={true}/>
         </FacebookShareButton>
         <TwitterShareButton className='sm-button' url={'https://ibuy-three.vercel.app/'}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </div>
    )
}

export { SocialMediaList }