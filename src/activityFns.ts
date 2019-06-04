function prefix(location: Location, ...prefixes: string[]) {
    return prefixes.some(
      prefix => (
        location.href.indexOf(`${location.origin}/${prefix}`) !== -1
      )
    )
  }
  
  export function app1(location: Location) {
    return prefix(location, 'app1')
  }
  
  export function app2(location: Location) {
    return prefix(location, 'app2')
  }

  export const navbar = (location: Location) => true;