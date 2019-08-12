import * as React from 'react';
import styles from './Myspfxwp1.module.scss';
import { IMyspfxwp1Props } from './IMyspfxwp1Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Myspfxwp1 extends React.Component<IMyspfxwp1Props, {}> {
  public render(): React.ReactElement<IMyspfxwp1Props> {
    return (
      <div className={ styles.myspfxwp1 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>this is third update RRRR</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
