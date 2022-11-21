import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from 'react-router-dom';
import Entry from "./Entry";


const mockedNavigator = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigator,
}));

describe('Entry', () => {

    const renderComponent = () => {
        return render(<Entry id='id' />, { wrapper: MemoryRouter });
    }

    it('should render component', () => {
        renderComponent();
        expect(screen.getByTestId('entry-wrapper')).toBeInTheDocument();
    })

    it('should show delete entry modal on delete icon click', () => {
        renderComponent();
        const deleteButton = screen.getByAltText(/delete entry icon/i);
        userEvent.click(deleteButton);
        expect(screen.getByText(/Are you sure you want to delete this entry/i)).toBeInTheDocument();
    });

    it('should navigate to edit page on edit click', () => {

    });
});
