/* eslint-disable indent */
import { ImageLoader } from '@/components/common';
import { ACCOUNT_EDIT } from '@/constants/routes';
import { displayDate } from '@/helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const UserProfile = (props) => {
  const profile = useSelector((state) => state.profile);

  return (
    <div className="user-profile">
      <div className="user-profile-block">
        <div className="user-profile-banner">
          <div className="user-profile-banner-wrapper">
            <ImageLoader
              alt="Banner"
              className="user-profile-banner-img"
              src={profile.banner}
            />
          </div>
          <div className="user-profile-avatar-wrapper">
            <ImageLoader
              alt="Avatar"
              className="user-profile-img"
              src={profile.avatar}
            />
          </div>
          <button
            className="button button-small user-profile-edit"
            onClick={() => props.history.push(ACCOUNT_EDIT)}
            type="button"
          >
            Edit Account
          </button>
        </div>
        <div className="user-profile-details">
          <h2 className="user-profile-name">{profile.fullname}</h2>
          <div className="grid grid-product grid-count-2">
            <div className="grid-col">
              <span>Email</span>
              <br />
              <h5>{profile.email}</h5>
              <span>Address</span>
              <br />
              {profile.address ? (
                  <h5>{profile.address}</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Address not set</h5>
              )}
              <span>Mobile</span>
              <br />
              {profile.mobile ? (
                  <h5>{profile.mobile.value}</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Mobile not set</h5>
              )}
              <span>Date Joined</span>
              <br />
              {profile.dateJoined ? (
                  <h5>{displayDate(profile.dateJoined)}</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Not available</h5>
              )}
              <br/>
            </div>
            <div className="grid-col">
              <span>Your height: </span>
              {profile.height ? (
                  <h5>{profile.height} cm</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Not available</h5>
              )}
              <br/>
              <span>Your hip size: </span>
              {profile.hip ? (
                  <h5>{profile.hip} cm</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Not available</h5>
              )}
              <br/>
              <span>Your waist size: </span>
              {profile.waist ? (
                  <h5>{profile.waist} cm</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Not available</h5>
              )}
              <br/>
              <span>Your chest size: </span>
              {profile.chest ? (
                  <h5>{profile.chest} cm</h5>
              ) : (
                  <h5 className="text-subtle text-italic">Not available</h5>
              )}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default withRouter(UserProfile);
