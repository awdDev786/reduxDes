/**
 * @flow
 */
import { connect } from 'react-redux';
import Header from '../components/Header';
import { toggleDbModal, toggleTableModal, toggleRoleModal } from '../actions/ActionCreators';


const mapDispatchToProps = (dispatch) => ({
    toggleDbModal: (editMode = false) => {
        dispatch(toggleDbModal(editMode));
    },
    toggleTableModal: () => {
        dispatch(toggleTableModal());
    },
    toggleRoleModal: () => {
        dispatch(toggleRoleModal());
    }
});

export default connect(mapDispatchToProps)(Header);
