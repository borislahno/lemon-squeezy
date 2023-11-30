import { Menu } from '@headlessui/react';
import { ReactComponent as Dots } from '../../../assets/svg/dots.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import { useDispatch } from 'react-redux';
import { deleteMonthlyReport } from '../../../store/reducers/CostsSlice';

type MonthlyReportDropDownMenuProps = {
  id: string,
}

const MonthlyReportDropDownMenu: React.FC<MonthlyReportDropDownMenuProps> = ({id}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [popperRef, setPopperRef] = useState<HTMLDivElement | null>(null);
  const {styles: popperStyle, attributes} = usePopper(containerRef, popperRef, {
    placement: 'bottom-end',
    strategy: 'absolute',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top-end'],
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 6],
        },
      },
    ]
  });
  const dispatch = useDispatch();

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => event.stopPropagation();

  const onDeleteButtonClick = () => dispatch(deleteMonthlyReport(id));

  const onDropdownClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  }

  return (
    <Menu as="div" className="relative w-[32px]">
      {({open}) => (
        <div ref={ref => setContainerRef(ref)} onClick={onDropdownClick}>
          <Menu.Button
            className="flex items-center justify-center w-full h-[32px] rounded-md hover:bg-grey-100 text-black-300"
            onClick={onButtonClick}
          >
            <Dots/>
          </Menu.Button>
          {open && (
            <Menu.Items
              className="absolute z-[50] bottom-[50px] left-0 w-[150px] rounded-md bg-white py-[8px] dropdown-shadow"
              style={popperStyle.popper}
              {...attributes.popper}
              ref={ref => setPopperRef(ref)}
            >
              <Menu.Item>
                <Link className={'dropdown-link'} to={`/monthly-report/${id}`}>
                  Edit
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button className="dropdown-link" onClick={onDeleteButtonClick} type="button">
                  Delete
                </button>
              </Menu.Item>
            </Menu.Items>
          )}
        </div>
      )}
    </Menu>
  );
}

export default MonthlyReportDropDownMenu;