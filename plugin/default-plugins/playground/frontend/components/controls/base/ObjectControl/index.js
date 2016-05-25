/**
 * ObjectControl
 *
 * Renders an information field mentioning that this property can't be generated.
 */

import renderControls from '../../../../utils/renderControls';
import getControl from '../../../../utils/getControl';
import React from 'react';
import mapValues from 'lodash/mapValues';
import Label from '../../../common/Label';
import randomValue from './randomValue';
import styles from './styles.css';

const ObjectControl = ({ label, propTypeData, value, onUpdate, isNested }) => {
  const updatePropertyValues = (values) => {
    onUpdate({ value: values });
  };

  const normalizedPropsWithControls = mapValues(propTypeData.value, (prop) => {
    prop.control = getControl(prop); // eslint-disable-line no-param-reassign
    return prop;
  });

  let controlWrapperClassName = styles.nestedControls;
  if (!label && isNested) {
    controlWrapperClassName = styles['nestedDeeperThanOneLevel--without-label'];
  } else if (isNested) {
    controlWrapperClassName = styles.nestedDeeperThanOneLevel;
  }

  return (
    <div className={styles.wrapper}>
      {/* inside arrays there is no label for the object */}
      {(label) && (
        <Label
          text={label}
          isNested={isNested}
          onRandomClick={() => onUpdate({
            value: ObjectControl.randomValue(propTypeData),
          })}
        />
      )}
      <div className={controlWrapperClassName}>
        {renderControls(normalizedPropsWithControls, value, updatePropertyValues, true)}
      </div>
    </div>
  );
};

ObjectControl.randomValue = randomValue;

export default ObjectControl;