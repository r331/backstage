/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiFactory, createRouteRef } from '@backstage/core-plugin-api';
import {
  createApiExtension,
  createPageExtension,
  createPlugin,
  createSchemaFromZod,
} from '@backstage/frontend-plugin-api';
import React from 'react';
import { techRadarApiRef } from './api';
import { SampleTechRadarApi } from './sample';

const techRadarRouteRef = createRouteRef({ id: 'plugin.techradar.page' });

/** @alpha */
export const TechRadarPage = createPageExtension({
  id: 'plugin.techradar.page',
  defaultPath: '/tech-radar',
  routeRef: techRadarRouteRef,
  configSchema: createSchemaFromZod(z =>
    z.object({
      title: z.string().default('Tech Radar'),
      subtitle: z
        .string()
        .default('Pick the recommended technologies for your projects'),
      pageTitle: z.string().default('Company Radar'),
      path: z.string().default('/tech-radar'),
      width: z.number().default(1500),
      height: z.number().default(800),
    }),
  ),
  loader: ({ config }) =>
    import('./components').then(m => <m.RadarPage {...config} />),
});

const sampleTechRadarApi = createApiExtension({
  api: techRadarApiRef,
  factory() {
    return createApiFactory(techRadarApiRef, new SampleTechRadarApi());
  },
});

/** @alpha */
export default createPlugin({
  id: 'tech-radar',
  extensions: [TechRadarPage, sampleTechRadarApi],
});
