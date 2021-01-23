import { createSelector } from 'reselect';

const breweryDomain = (state) => state.brewery;

const makeSelectBreweryList = () =>
  createSelector(
    breweryDomain,
    (subdomain) => subdomain.data
  );
const makeSelectSelectedBreweryItem = () =>
  createSelector(breweryDomain, (subdomain) => subdomain.data.find(({ id }) => id === subdomain.selected));
const makeSelectBreweryLoading = () =>
  createSelector(breweryDomain, (subdomain) => subdomain.loading);
const makeSelectBreweryError = () =>
  createSelector(breweryDomain, (subdomain) => subdomain.error);
const makeSelectBreweryListSort = () =>
  createSelector(breweryDomain, (subdomain) => subdomain.sort);

export {
  makeSelectBreweryLoading,
  makeSelectBreweryError,
  makeSelectBreweryList,
  makeSelectSelectedBreweryItem,
  makeSelectBreweryListSort,
};
