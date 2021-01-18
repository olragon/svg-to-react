import svgr from "@svgr/core"

// force vercel to transpile plugins code
import "@svgr/plugin-svgo"
import "@svgr/plugin-jsx"
import "@svgr/plugin-prettier"

export default async (req, res) => {
  const parsedQuery = parseQuery(req.query, {
    name: 'SvgComponent'
  });
  let { svg, name, debug, ...params } = parsedQuery;

  svg = svg || req.body;

  if (!svg) {
    res.statusCode = 400;
    return res.end('Missing `svg` param.');
  }

  const jsCode = await svgr(svg, {
    ...params,
    plugins: [
      '@svgr/plugin-svgo',
      '@svgr/plugin-jsx',
      '@svgr/plugin-prettier',
    ]
  }, { componentName: name });

  if (debug) {
    return res.json({
      query: req.query,
      parsedQuery,
      params,
      svg,
      jsCode,
    });
  }

  return res.end(jsCode);
}

const valMaps = {
  'false': false,
  'true': true
}

function parseQuery(query, defaultValues = {}) {
  return Object.fromEntries(
    Object.entries({...defaultValues, ...query})
      .map(([key, val]) => {
        const pair = [key, val];
        if (valMaps.hasOwnProperty(val)) {
          pair[1] = valMaps[val];
        } else if (typeof val == "string") {
          try {
            pair[1] = JSON.parse(val);
          } catch (err) {
            // skip
          }
        }
        return pair;
      })
  );
}
