import React from 'react';
import Screen from '../../lock/screen';
import EmailPane from '../email/email_pane';
import SocialButtonsPane from '../social/social_buttons_pane';
import PaneSeparator from '../../panes/pane_separator';

import { requestPasswordlessEmail } from '../../passwordless/actions';
import {
  renderEmailSentConfirmation,
  renderSignedInConfirmation
} from '../../modes/shared';

export default class AskSocialNetworkOrEmail extends Screen {

  constructor(lock, isDone) {
    super("networkOrEmail", lock, isDone)
  }

  submitHandler() {
    return requestPasswordlessEmail;
  }

  renderAuxiliaryPane() {
    return renderEmailSentConfirmation(this.lock)
      || renderSignedInConfirmation(this.lock);
  }

  render() {
    return (
      <div>
        <SocialButtonsPane lock={this.lock} />
        <PaneSeparator />
        <EmailPane
          lock={this.lock}
          placeholder={this.t(["emailInputPlaceholder"], {__textOnly: true})}
          tabIndex={1}
        />
      </div>
    );
  }

}
