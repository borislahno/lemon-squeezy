import { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { Category, Costs, MonthlyReportData, MonthlyReportForm } from '../CreateMonthlyReportForm';
import { twMerge } from 'tailwind-merge';
import { ReactComponent as CheckMark } from '../../../../../assets/svg/check-mark.svg';
import { UseFieldArrayUpdate, useWatch } from 'react-hook-form';
import { usePopper } from 'react-popper';
import { useAppSelector } from '../../../../../hooks/useAppSelector';
import { useAppDispatch } from '../../../../../hooks/useAppDispatch';
import { addCategory } from '../../../../../store/reducers/CategorySlice';

type CategoryComboBoxProps = {
  index: number,
  update: UseFieldArrayUpdate<MonthlyReportData>,
  isError: boolean,
} & Omit<MonthlyReportForm, 'register' | 'setValue'>

const CategoryComboBox: React.FC<CategoryComboBoxProps> = ({index, control, getValues, update, isError, clearErrors}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [popperRef, setPopperRef] = useState<HTMLUListElement | null>(null);
  const {styles: popperStyle, attributes} = usePopper(containerRef, popperRef, {
    placement: 'bottom-start',
    strategy: 'absolute',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-start'],
        }
      },
    ]
  });
  const [query, setQuery] = useState('');
  const {categories} = useAppSelector(state => state.categoryReducer);
  const dispatch = useAppDispatch();
  const selectedCategory = useWatch({control, name: `costs.${index}.category`})

  const filteredCategories =
    query !== '' ?
      categories.filter(({name}) =>
        name.toLowerCase().split(' ').map((word, index, array) => [word, ...array.slice(index + 1)].join(' '))
          .some(word => word.startsWith(query.trim().toLowerCase())))
      : categories;

  const onCategoryChange = (category: Category) => {
    update(index, {...getValues(`costs.${index}`), category});
    clearErrors(`costs.${index}`);
  }

  const addNewCategory = () => {
    const newCategory = {
      id: crypto.randomUUID(),
      name: query.trim(),
    }
    dispatch(addCategory(newCategory))
    update(index, {...getValues(`costs.${index}`), category: newCategory});
    clearErrors(`costs.${index}`);
  }

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && filteredCategories.length === 0) {
      addNewCategory();
    }
  }

  const onOpenReasonClick = () => setQuery('');

  const isAlreadySelected = (category: Category): boolean =>
    getValues('costs')?.some(({category: currentCategory}: Costs) => currentCategory?.id === category.id && currentCategory?.id !== selectedCategory?.id);

  return (
    <Combobox value={selectedCategory?.id ? selectedCategory : null} by="id" onChange={onCategoryChange} nullable>
      {({open, value}) => (
        <div className="relative w-[300px] grow-0 shrink-0" ref={ref => setContainerRef(ref)}>
          <div>
            <>
              {open ? (
                <Combobox.Input
                  className={twMerge("form-input h-[40px] focus:shadow-[inset_0_0_0_1px_#0a0a2e29,0_1px_1px_0_#0a0a0b0f]")}
                  onChange={(event) => setQuery(event.target.value)}
                  value={query}
                  displayValue={(category: Category) => category?.name}
                  placeholder="Search for an category..."
                  onKeyDown={onInputKeyDown}
                  autoFocus
                />
              ) : (
                <Combobox.Button
                  className={
                    twMerge(
                      "flex items-center w-full h-[40px] py-[8px] px-[16px] rounded-md text-sm font-normal",
                      value ? 'text-black-300' : 'text-grey',
                      isError ? 'form-input-error' : 'shadow-[inset_0_0_0_1px_#0a0a2e29,0_1px_1px_0_#0a0a0b0f]'
                    )
                  }
                  onClick={onOpenReasonClick}
                >
                  {value ? (value as Category)?.name : 'Category'}
                </Combobox.Button>
              )}
            </>
          </div>
          {open && (
            <Combobox.Options
              className="absolute z-[100] w-full p-[8px] pr-[4px] mt-[3px] rounded-md bg-white dropdown-shadow"
              style={popperStyle.popper}
              {...attributes.popper}
              ref={(ref: HTMLUListElement) => setPopperRef(ref)}
            >
              <div className="max-h-[220px] pr-[4px] overflow-y-auto list-box-scroll-bar">
                {filteredCategories.length === 0 && query !== '' ? (
                  <div className="text-sm font-normal text-grey-500">
                    Click Enter to create new category
                  </div>
                ) : (
                  filteredCategories.map(category => (
                    <Combobox.Option
                      className={({active}) =>
                        twMerge(
                          'flex items-center justify-between gap-[20px] py-[8px] pl-[8px] pr-[12px] rounded-sm text-sm font-normal',
                          active && "bg-grey-50",
                          isAlreadySelected(category) ? 'text-grey' : 'text-black-300 cursor-pointer hover:bg-grey-50'
                        )
                      }
                      key={category?.id}
                      value={category}
                      disabled={isAlreadySelected(category)}
                    >
                      {({selected}) => (
                        <>
                          {category.name}
                          {selected && <CheckMark className="flex-[12px] grow-0 shrink-0 h-[12px] text-purple-400"/>}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </div>
            </Combobox.Options>
          )}
        </div>
      )
      }
    </Combobox>
  );
}

export default CategoryComboBox;