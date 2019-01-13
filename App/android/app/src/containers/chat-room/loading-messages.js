import { connect } from 'react-redux'
import LoadingMessages from '../../components/chat-room/loading-messages';

const mapStateToProps = (state) =>{
    return {
        loading: state.messagesReducer.status.loading
    }
} 

export default connect(mapStateToProps,null)(LoadingMessages)

