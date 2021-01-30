import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "./App";
import experiences from "./ressources/experiences";
import formations from "./ressources/formations";
import pages from "./ressources/pages";
import projects from "./ressources/projects";
import skills from "./ressources/skills";

test("should display my name and presentation", () => {
  render(<App />);

  const nameElement = screen.getByText(/Mathieu Smarzyk/i);
  const presentationElement = screen.getByText(/Développeur /i);

  expect(nameElement).toBeInTheDocument();
  expect(presentationElement).toBeInTheDocument();
});

test("should display the summary", () => {
  render(<App />);

  const listOfPages = screen.getByTestId("page-link");

  expect(listOfPages.childNodes).toHaveLength(pages.length);
});

test("should display contact info", () => {
  render(<App />);

  const emailElement = screen.getByTestId("mail");
  const telElement = screen.getByTestId("mail");

  expect(emailElement).toBeInTheDocument();
  expect(telElement).toBeInTheDocument();
});

test("should go to page skills", async () => {
  render(<App />);

  const skillsPageName = pages[0].name;
  const nameOfPage = screen.getByText(skillsPageName);

  userEvent.click(nameOfPage);

  await waitFor(() => {
    expect(screen.getByText(skills[0].groupName)).toBeInTheDocument();
  });
});

test("should go to page experiences", async () => {
  render(<App />);

  const experiencePageName = pages[1].name;
  const nameOfPage = screen.getByText(experiencePageName);

  userEvent.click(nameOfPage);

  await waitFor(() => {
    expect(screen.getByText(experiences[0].name)).toBeInTheDocument();
  });
});

test("should go to page Formations", async () => {
  render(<App />);

  const formationsPageName = pages[2].name;
  const nameOfPage = screen.getByText(formationsPageName);

  userEvent.click(nameOfPage);

  await waitFor(() => {
    expect(screen.getByText(formations[0].name)).toBeInTheDocument();
  });
});

test("should go to page Projects", async () => {
  render(<App />);

  const projectsPageName = pages[3].name;
  const nameOfPage = screen.getByText(projectsPageName);

  userEvent.click(nameOfPage);

  expect(screen.getByText(projects[0].name)).toBeInTheDocument();
});
