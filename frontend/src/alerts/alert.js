import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import alerts from '../reducers/alerts'

const Alert = ({ alerts }) => {
     return alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
    </div>
));
     }

Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    alerts: state.alerts
});

export default connect(mapStateToProps)(Alert)
