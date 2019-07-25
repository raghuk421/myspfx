import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'Myspfxwp1WebPartStrings';
import Myspfxwp1 from './components/Myspfxwp1';
import { IMyspfxwp1Props } from './components/IMyspfxwp1Props';

export interface IMyspfxwp1WebPartProps {
  description: string;
}

export default class Myspfxwp1WebPart extends BaseClientSideWebPart<IMyspfxwp1WebPartProps> {

  public render(): void {
    const element: React.ReactElement<IMyspfxwp1Props > = React.createElement(
      Myspfxwp1,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
