import { Fragment } from "react";
import { CheckIcon, MinusIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Adult Personal Training",
    id: "apt",
    href: "/your-fitness-journey",
    priceMonthly: "$1,020",
    priceMeasure: "month",
    description: "3 sessions a week for 4 weeks",
    mostPopular: true,
  },
  {
    name: "Youth Personal Training",
    id: "tier-essential",
    href: "/your-fitness-journey",
    priceMonthly: "$780",
    priceMeasure: "month",
    description: "3 sessions a week for 4 weeks",
    mostPopular: false,
  },
  {
    name: "Soccer Skill Development",
    id: "tier-soccer",
    href: "/your-fitness-journey",
    priceMonthly: "$75",
    priceMeasure: "hour",
    description: "3 sessions a week for 4 weeks",
    mostPopular: false,
  },
];
const sections = [
  {
    name: "Packages",
    features: [
      {
        name: "Single Session",
        tiers: {
          "Adult Personal Training": "$135.00",
          "Youth Personal Training": "$115.00",
          "Soccer Skill Development": false,
        },
      },
      {
        name: "5 Sessions",
        tiers: {
          "Adult Personal Training": "$625.00",
          "Youth Personal Training": "$525.00",
          "Soccer Skill Development": false,
        },
      },
      {
        name: "10 Sessions",
        tiers: {
          "Adult Personal Training": "$1150.00",
          "Youth Personal Training": "$950.00",
          "Soccer Skill Development": false,
        },
      },
      {
        name: "15 Sessions",
        tiers: {
          "Adult Personal Training": "$1575.00",
          "Youth Personal Training": "$1275.00",
          "Soccer Skill Development": false,
        },
      },
      {
        name: "20+ Sessions",
        tiers: {
          "Adult Personal Training": "$1900.00 ($95/Session)",
          "Youth Personal Training": "$1500.00 ($75/Session)",
          "Soccer Skill Development": false,
        },
      },
    ],
  },
  {
    name: "Group Sessions",
    features: [
      {
        name: "2 Participants",
        tiers: {
          "Adult Personal Training": false,
          "Youth Personal Training": false,
          "Soccer Skill Development": "$65/hour",
        },
      },
      {
        name: "3 Participants",
        tiers: {
          "Adult Personal Training": false,
          "Youth Personal Training": false,
          "Soccer Skill Development": "$60/hour",
        },
      },
      {
        name: "4 Participants",
        tiers: {
          "Adult Personal Training": false,
          "Youth Personal Training": false,
          "Soccer Skill Development": "$55/hour",
        },
      },
      {
        name: "5+ Participants",
        tiers: {
          "Adult Personal Training": false,
          "Youth Personal Training": false,
          "Soccer Skill Development": "$50/hour",
        },
      },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
        {tiers.map((tier) => (
          <section
            key={tier.id}
            className={classNames(
              tier.mostPopular
                ? "rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200"
                : "",
              "p-8"
            )}
          >
            <h3
              id={tier.id}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {tier.name}
            </h3>
            <p className="mt-2 flex items-baseline gap-x-1 text-gray-900">
              <span className="text-4xl font-bold">{tier.priceMonthly}</span>
              <span className="text-sm font-semibold">
                /{tier.priceMeasure}
              </span>
            </p>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "bg-primary text-white"
                  : "text-primary ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                "mt-8 block rounded py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              )}
            >
              Start for free!
            </a>
            <ul
              role="list"
              className="mt-10 space-y-4 text-sm leading-6 text-gray-900"
            >
              {sections.map((section) => (
                <li key={section.name}>
                  <ul role="list" className="space-y-4">
                    {section.features.map((feature) =>
                      feature.tiers[tier.name] ? (
                        <li key={feature.name} className="flex gap-x-3">
                          {feature.name}{" "}
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="text-sm leading-6 text-gray-500">
                              ({feature.tiers[tier.name]})
                            </span>
                          ) : null}
                        </li>
                      ) : null
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* lg+ */}
      <div className="isolate mt-20 hidden lg:block">
        <div className="relative -mx-8">
          {tiers.some((tier) => tier.mostPopular) ? (
            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
              <div
                className="flex w-1/4 px-4"
                aria-hidden="true"
                style={{
                  marginLeft: `${
                    (tiers.findIndex((tier) => tier.mostPopular) + 1) * 25
                  }%`,
                }}
              >
                <div className="w-full rounded-t border-x border-t border-gray-900/10 bg-gray-400/5" />
              </div>
            </div>
          ) : null}
          <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
            <caption className="sr-only">Pricing plan comparison</caption>
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <td />
                {tiers.map((tier) => (
                  <th
                    key={tier.id}
                    scope="col"
                    className="px-6 pt-6 xl:px-8 xl:pt-8"
                  >
                    <div className="text-sm font-semibold leading-7 text-gray-900">
                      {tier.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
                {tiers.map((tier) => (
                  <td key={tier.id} className="px-6 pt-2 xl:px-8">
                    <div className="flex items-baseline gap-x-1 text-gray-900">
                      <span className="text-4xl font-bold">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-sm font-semibold leading-6">
                        /{tier.priceMeasure}
                      </span>
                    </div>
                    <a
                      href={tier.href}
                      className={classNames(
                        tier.mostPopular
                          ? "bg-primary text-white"
                          : "text-primary ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                        "mt-8 block rounded py-2 px-3 text-center text-sm font-semibold leading-6"
                      )}
                    >
                      Start for Free!
                    </a>
                  </td>
                ))}
              </tr>
              {sections.map((section, sectionIdx) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      scope="colgroup"
                      colSpan={4}
                      className={classNames(
                        sectionIdx === 0 ? "pt-8" : "pt-16",
                        "pb-4 text-sm font-semibold leading-6 text-gray-900"
                      )}
                    >
                      {section.name}
                      <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        scope="row"
                        className="py-4 text-sm font-normal leading-6 text-gray-900"
                      >
                        {feature.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.id} className="px-6 py-4 xl:px-8">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <div className="text-center text-sm leading-6 text-gray-500">
                              {feature.tiers[tier.name]}
                            </div>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="mx-auto h-5 w-5 text-indigo-600"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="mx-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Included"
                                  : "Not included"}{" "}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
