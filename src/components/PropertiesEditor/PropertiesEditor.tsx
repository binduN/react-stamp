/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 ThoughtClan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import * as React from 'react';
import { IShape } from '../../entities/IShape';
import classNames from 'classnames';

import './PropertiesEditor.scss';

export interface IPropertiesEditorProps {
  selectedShape: IShape|null;
  onPropertiesChanged: (shape: IShape) => void;
}

export default function PropertiesEditor({
  selectedShape,
  onPropertiesChanged,
}: IPropertiesEditorProps) {
  const renderEditor = () => {
    return (
        <React.Fragment>
          <div className="properties-group">
            <div className="header">
              <h4 className="title">Layout</h4>
            </div>

            <div className="editors">
              {`X: ${selectedShape?.x}, Y: ${selectedShape?.y}`}
            </div>
          </div>

          <div className="properties-group">
            <div className="header">
              <h4 className="title">Appearance</h4>
            </div>

            <div className="editors">

            </div>
          </div>
        </React.Fragment>
    );
  };

  return (
    <div
      className={classNames({
        'properties-editor': true,
        'properties-editor--empty': selectedShape === null,
      })}
    >
      {
        selectedShape === null
          ? <h4>No shape selected.</h4>
          : renderEditor()
      }
    </div>
  )
}
