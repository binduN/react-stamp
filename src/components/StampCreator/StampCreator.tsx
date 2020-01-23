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
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Stencil from '../Stencil';
import DroppableCanvas, { IDroppableCanvasProps } from '../DroppableCanvas';
import PropertiesEditor, { IPropertiesEditorProps } from '../PropertiesEditor';
import { IShape } from '../../entities/IShape';

import SelectedShapeContext from '../../contexts/SelectedShapeContext';

import './StampCreator.scss';

export interface IStampCreatorProps {}

// TODO: move canvas and property editor props into separate objects in stamp creator props
export default function StampCreator(props: IStampCreatorProps & IDroppableCanvasProps & IPropertiesEditorProps) {
  const [selectedShape, setSelectedShape] = React.useState<IShape|null>(null);

  const onPropertiesChanged = (shape: IShape) => {
    const index = props.canvasData?.shapes.findIndex(s => s.id === shape.id);

    if (!isNaN(index)) {
      const newData = { ...props.canvasData };

      newData.shapes.splice(index, 1, shape);

      props.onCanvasChanged(newData);
    }
  };

  return (
    <div className="stamp-creator">
      <DndProvider backend={HTML5Backend}>
        <Stencil />

        <SelectedShapeContext.Provider value={selectedShape}>
          <DroppableCanvas {...props} onSelectShape={setSelectedShape} />
          <PropertiesEditor onPropertiesChanged={onPropertiesChanged} />
        </SelectedShapeContext.Provider>
      </DndProvider>
    </div>
  )
}
