import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";
import { Providers } from "@/services/redux/providers";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), back: jest.fn() }),
}));

jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: { error: jest.fn() },
  error: jest.fn(),
}));

describe("Header", () => {
  it("renders input, add button, and unit toggles", () => {
    render(
      <Providers>
        <Header />
      </Providers>
    );
    expect(screen.getByLabelText(/enter city/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
    expect(screen.getByText("°C")).toBeInTheDocument();
    expect(screen.getByText("°F")).toBeInTheDocument();
  });

  it("clears input after add", () => {
    render(
      <Providers>
        <Header />
      </Providers>
    );
    const input = screen.getByLabelText(/enter city/i);
    fireEvent.change(input, { target: { value: "London" } });
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(input).toHaveValue("");
  });
});
